from fastapi import FastAPI, Request, Response, status
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from fastapi.exceptions import HTTPException
from fastapi.middleware.cors import CORSMiddleware

import os

dev = True

app = FastAPI()
'''FastAPI app reference'''

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080",  # Vývojový server
        "https://daniel-sykora.cz",  # Produkční server
    ] if not dev else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

templates = Jinja2Templates(directory='uvicorn_fastapi/templates')
''' specifies usage of jinja2 templating engine and defines its root directory
    templates'''

app.mount(
    "/static",
    StaticFiles(directory="uvicorn_fastapi/static"),
    name="static")
'''making entire /static directory and all its subdirectories publicaly awiable'''

@app.get('/')
async def index(request: Request):
    return templates.TemplateResponse('index.html', {'request':request})

@app.head('/')
async def head(request: Request):
    '''only here to allow HTTP head request'''
    return None

# @app.get('/article/readme')
# async def readme(request: Request, id: int):
#     '''README endpoint'''
#     file_path = f'README.md'
#     if not os.path.isfile(file_path):
#         raise HTTPException(status_code=404, detail=f"README.md not found")
#     return FileResponse(file_path)

@app.get('/article/{id}')
async def article(request: Request, id: str):
    '''Article endpoint'''
    file_path = f'uvicorn_fastapi/articles/article-{int(id)}.md' if id.isdigit() else f'{id}.md'
    if not os.path.isfile(file_path):
        raise HTTPException(status_code=404, detail=f"Article {id} not found")
    return FileResponse(file_path)

@app.get('/test')
async def test_end_point(request: Request):
    '''specific test endpoint'''
    return '<test resonse from uvicorn>'

@app.get('/request-headers')
async def request_headers(request: Request):
    '''test headers by returning all headers sent in request'''
    return dict(request.headers)

from playwright.async_api import async_playwright

@app.get('/rohlik/alt-login')
async def rohlik_alt_login(request: Request, id: int, pin: int) -> JSONResponse:
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context()
        page = await context.new_page()

        page.goto('https://couriers-portal.rohlik.cz')
        page.fill(".login_field > *:first-child", id)
        page.fill(".login_field:nth-child(2) > *:first-child", pin)
        page.click(".login_button")

        cookies = await context.cookies()

        cp_courier_id = list(filter(lambda cookie: cookie['name'] == 'cp_courier_id',cookies))[0]
        cp_courier_hash = list(filter(lambda cookie: cookie['name'] == 'cp_courier_hash',cookies))[0]

        return JSONResponse(
            content={
                'cp_courier_id': 'cp_courier_id',
                'cp_courier_hash': 'cp_courier_hash'
            },
            status_code=200
        )
        
@app.get('/{path:path}')
async def catch_other(request: Request, path: str):
    '''replaces 404'''
    return f"Toto je catch-all koncový bod pro cestu: <{path}> \n tento endpoint nahrazuje 404"