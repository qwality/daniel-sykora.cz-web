<div {...$$props}>
    <div class="grid-card-layout">
        <!-- 1 Nadpis -->
        <div class="grid-full-card">
            <div class="card-body">
                <h2 class="card-title md:absolute">Životopis:</h2>
                <h1 class=" text-[clamp(1rem,9vw,8rem)] text-primary text-center">Daniel Sýkora</h1>
            </div>
        </div>
        <!-- 2 Hledám práci -->
        <div class="grid-small-card">
            <div class="card-body">
                <h2 class="card-title text-secondary">Hledám práci jako:</h2>
                <p>backend, frontend, fullstack junior developer</p>
            </div>
        </div>
        <!-- 3 Souhrn -->
        <div class="grid-large-card">
            <div class="card-body">
                <h2 class="card-title text-secondary">Souhrn:</h2>
                <p>Před několika lety jsem opustil vysokou školu a vydal se na jinou kariérní cestu. Asi pět let jsem pracoval jako kurýr, ale i když mě řízení baví, nakonec jsem zjistil, že to není to, co chci dělat celý život. Po dlouhém přemýšlení jsem se rozhodl, že se chci opět věnovat programování. Začal jsem si obnovovat své znalosti a chtěl bych získat v tomto oboru více zkušeností. Chtěl bych se vydat do reálného světa a zjistit, jak vypadá práce programátora v praxi.</p>
            </div>
        </div>
        <!-- 4 Kontakty -->
        <div class="grid-small-card">
            <div class="card-body">
                <h2 class="card-title text-secondary">Kontakty:</h2>
                <div class="grid grid-cols-[min-content_min-content] gap-x-4">
                <span>email: </span>  <a class="link link-accent" href="mailto:daniel_sykora@icloud.com">daniel_sykora@icloud.com</a>
                <span>tel: </span>    <a class="link link-accent" href="tel:+420603328223">603 328 223</a>
                </div>
            </div>
        </div>
        <!-- Soft skills -->
        <div class="grid-large-card">
            <div class="card-body">
                <h2 class="card-title text-secondary">Soft skills:</h2>
                <div class="flex flex-col  gap-4">
                <p><b class="whitespace-nowrap text-lg">odolný vůči stresu:</b> jako kurýr jsem pracoval pod tlakem a mnohdy řešil více věcí najednou </p>
                <p><b class="whitespace-nowrap text-lg">úhel pohledu:</b>       často dokážu vidět věci z různých pohledů a na základě toho poskytovat zpětnou vazbu </p>
                <p><b class="whitespace-nowrap text-lg">důslednost:</b>         při řešení problémů mě zajímá hlavně jak problém vznikl ne jenom jak ho vyřešit </p>
                </div>
            </div>
        </div>
        <!-- Technologie -->
        <a class="grid-small-card hover:outline outline-accent transition-[outline]" href="{base}/technologies">
            <div class="card-body">
                <h2 class="card-title text-secondary">Technologie:</h2>
                <div class="grid grid-cols-[min-content_min-content] gap-x-8 gap-y-2">
                <span class="flex flex-nowrap">python     <PythonIcon class=" ml-2 w-4 h-4 self-center"/> </span>
                <span class="flex flex-nowrap">javascript <JavascriptIcon class=" ml-2 w-4 h-4 self-center"/></span>
                <span class="flex flex-nowrap">HTML       <HtmlIcon class=" ml-2 w-4 h-4 self-center"/></span>
                <span class="flex flex-nowrap"><i>CSS </i><CssIcon class=" ml-2 w-4 h-4 self-center"/></span>
                <span class="flex flex-nowrap">FastAPI    <FastapiIcon class=" ml-2 w-4 h-4 self-center"/></span>
                <span class="flex flex-nowrap">Svelte     <SvelteIcon class=" ml-2 w-4 h-4 self-center"/></span>
                </div>
            </div>
        </a>
        <!-- Vzdělání -->
        <div class="grid-small-card">
            <div class="card-body">
                <h2 class="card-title text-secondary">Vzdělání:</h2>
                <div class="">
                <div class="flex justify-between gap-4"><b class="">Střední průmyslová </b> <span>obor technické lyceum</span></div>
                <div class="divider my-0"></div> 
                <div class="flex justify-between gap-4"><b class="">VSB-TU Ostrava     </b> <span>nedokončené</span></div>
                </div>
            </div>
        </div>
        <!-- Bývalé práce -->
        <div class="grid-small-card">
            <div class="card-body">
                <h2 class="card-title text-secondary">Bývalé práce:</h2>
                <div class="grid grid-cols-[min-content_min-content_min-content] gap-x-8 gap-y-2">
                <b>Rohlík</b> <span>kurýr</span> <span class=" whitespace-nowrap">nyní</span>  
                <b>GLS</b>    <span>kurýr</span> <span class=" whitespace-nowrap">4 roky</span> 
                <b>Tint</b>   <span>montér</span><span class=" whitespace-nowrap">1 rok</span> 
                </div>
            </div>
        </div>
        <!-- Projekty -->
        <div class="grid-large-card">
            <div class="card-body">
                <h2 class="card-title text-secondary">Projekty:</h2>
                <div class="flex flex-col  gap-4">
                    <p><a target="_blank" href="{

links.this_web}" class="whitespace-nowrap font-bold text-lg link link-accent">This.web:</a> Web, postavený na SvelteKit 2, používá Node.js a je hostován na VPS serveru s Ubuntu. Stylování zajišťuje Tailwind CSS a DaisyUI. Má responzivní UI, s navigační lištou přeměněnou na sidebar na menších zařízeních. Obsahuje sekce jako životopis, přehled technologií, a administrativní sekci s mockupem přihlašování. V navigační liště je vyhledávací panel. Web demonstruje můj pokrok v oblasti web developmentu. </p>
                    <p><a target="_blank" href="{links.this_server}" class="whitespace-nowrap font-bold text-lg link link-accent">This.server:</a> Tato utilita je určena pro správu serverů na VPS. Poskytuje skripty pro aktualizaci a správu webových aplikací. </p>
                    <p><a target="_blank" href="{links.leetcode}" class="whitespace-nowrap font-bold text-lg link link-accent">Cvičení na LeetCode:</a> Zde si procvičuji své schopnosti řešením různých algoritmických úloh a vylepšuji tak své dovednosti v oblasti programování a logického myšlení. </p>
                    <p><a target="_blank" href="{links.tetris}" class="whitespace-nowrap font-bold text-lg link link-accent">Tetris:</a> Základní hra tetris s ovládáním pomocí šipek a počítáním score, použil jsem knihovnu Pygame, která je optimalizovaná pro hry v Pythonu. </p>
                    <p><a target="_blank" href="{links.hexagons}" class="whitespace-nowrap font-bold text-lg link link-accent">Hexagons:</a> Základ pro hexagonální mapu, objektově orientovaný, taky pomocí Pygame. </p>
                </div>
            </div>
        </div>
        <!-- Jazyky -->
        <div class="grid-small-card">
            <div class="card-body">
                <h2 class="card-title text-secondary">Jazyky:</h2>
                <div class="flex flex-nowrap gap-4">
                <b>Angličtina: </b>intermediate
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    import { base } from '$app/paths';
    import { links } from "$lib/store/links.js";

    import PythonIcon       from '$lib/img/icon/technology/icon-python.svg?component'
    import JavascriptIcon   from '$lib/img/icon/technology/icon-javascript.svg?component'
    import HtmlIcon         from '$lib/img/icon/technology/icon-html.svg?component'
    import CssIcon          from '$lib/img/icon/technology/icon-css.svg?component'
    import FastapiIcon      from '$lib/img/icon/technology/icon-fastapi.svg?component'
    import SvelteIcon       from '$lib/img/icon/technology/icon-svelte.svg?component'
</script>