<div class="flex gap-4 flex-wrap">
    <div class="hero bg-base-100">
        <div class="hero-content flex-col gap-8 lg:flex-row-reverse">
          <img src="{base}/img/daniel-sykora.jpg" class="md:max-w-sm rounded-lg shadow-2xl opacity-70 max-w-full" alt="" />
          <div>
            <h1 class=" px-6 text-5xl font-bold text-secondary">Daniel Sykora - Developer</h1>
            <p class="p-6 max-w-[64ch]">
                Vítejte! Jsem Daniel Sykora, aspirující developer s vášní pro technologie a inovace.
                Ačkoli momentálně pracuji jako kurýr, můj cíl je stát se plnohodnotným vývojářem.
                Tento web je odrazem mé cesty a pokroku - stále se rozvíjející portfolio, kde sdílím své projekty a učení se novým technologiím.
            </p>
            <!-- <button class="btn btn-primary">Nejaky button</button> -->
          </div>
        </div>
      </div>
    <div class="card shadow-xl bg-base-200 min-w-full max-w-4xl mx-auto ">
        <div class="card-body">
            <div class="markdown-body">
                {@html article_1}
            </div>
        </div>
    </div>

    <div class="card shadow-xl bg-base-100 min-w-full max-w-4xl mx-auto ">
        <div class="card-body ">
            <div class="markdown-body">
                {@html article_2}
            </div>
        </div>
    </div>
    <button on:click={e => {clear_storage(); /**load_articles()*/; location.reload()}} class="btn btn-secondary w-min px-8 text-lg whitespace-nowrap col-span-full ml-auto mt-auto">Reload</button>
</div>

<script>

import MarkdownIt from "markdown-it";
import axios from "axios";

import { onMount } from "svelte";
import { base } from '$app/paths';

async function fetch_article(id){
    try {
    const response = await axios.get(`https://daniel-sykora.cz/uvicorn/article/${id}`)
        return MarkdownIt().render(response.data)
    } catch (error) {
        console.error(error)
    }
}

function clear_storage(){
    sessionStorage.clear();
    localStorage.clear();
}

function load_articles(){
    if(localArticle1) {
        article_1 = localArticle1;
    } else {
        fetch_article(3).then((data) => {
            article_1 = data;
            sessionStorage.setItem('article_1', data);
        });
    }

    if(localArticle2){
        article_2 = localArticle2;
    } else {
        fetch_article(2).then((data) => {
            article_2 = data;
            sessionStorage.setItem('article_2', data);
        });
    }
}

let article_1
let article_2

let localArticle1
let localArticle2

onMount(() => {
    // clear_storage();
    localArticle1 = sessionStorage.getItem('article_1')
    localArticle2 = sessionStorage.getItem('article_2')
    load_articles();
});
</script>

<style>
/* .daniel {
    background-image: url($lib/img/daniel-sykora.jpg);
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
} */
</style>