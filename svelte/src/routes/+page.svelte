<div class="flex gap-4 flex-wrap">
    <div class="hero bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="/img/daniel-sykora.jpg" class="max-w-sm rounded-lg shadow-2xl opacity-70" alt="" />
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    <div class="card shadow-xl bg-base-200 min-w-full min-h-screen max-w-4xl mx-auto ">
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
</div>

<script>

import MarkdownIt from "markdown-it";
import axios from "axios";

import { onMount } from "svelte";

async function fetch_article(id){
    try {
    const response = await axios.get(`https://daniel-sykora.cz/uvicorn/article/${id}`)
        return MarkdownIt().render(response.data)
    } catch (error) {
        console.error(error)
    }
}

let article_1
let article_2

onMount(() => {
    const localArticle1 = localStorage.getItem('article_1');
    const localArticle2 = localStorage.getItem('article_2');

    if(localArticle1) {
        article_1 = localArticle1;
    } else {
        fetch_article('README').then((data) => {
            article_1 = data;
            localStorage.setItem('article_1', data);
        });
    }

    if(localArticle2){
        article_2 = localArticle2;
    } else {
        fetch_article(2).then((data) => {
            article_2 = data;
            localStorage.setItem('article_2', data);
        });
    }
});
</script>

<style>
.daniel {
    background-image: url($lib/img/daniel-sykora.jpg);
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>