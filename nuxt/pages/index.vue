<template>
  <div class="flex gap-4 flex-wrap">
    <div class="card shadow-xl bg-base-100 min-w-full min-h-screen max-w-4xl mx-auto ">
      <div class="card-body">
        <div class="markdown-body" v-html="article_1"></div>
      </div>
    </div>

    <div class="card shadow-xl bg-base-100 min-w-full max-w-4xl mx-auto ">
      <div class="card-body ">
        <div class="markdown-body" v-html="article_2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import MarkdownIt from 'markdown-it';

import axios from 'axios';

export default {
  name: 'Home',
  setup(){

    const article_1 = ref('')
    const article_2 = ref('')

    async function fetch_article(id){
      try {
        const response = await axios.get(`https://daniel-sykora.cz/uvicorn/article/${id}`)
        // console.log(response.data)
        return MarkdownIt().render(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      const localArticle1 = localStorage.getItem('article_1');
      const localArticle2 = localStorage.getItem('article_2');

      if(localArticle1) {
        article_1.value = localArticle1;
      } else {
        fetch_article('README').then((data) => {
          article_1.value = data;
          localStorage.setItem('article_1', data);
        });
      }

      if(localArticle2){
        article_2.value = localArticle2;
      } else {
        fetch_article(2).then((data) => {
          article_2.value = data;
          localStorage.setItem('article_2', data);
        });
      }
    });

    return{
      article_1, article_2
    }
  }
}
</script>

<style scoped>
/* .markdown-body {
  background-color: var(--base-100);
  color: var(--base-900);
} */
.markdown-body {
  @apply bg-transparent text-current;
}
/* Add your custom styles here */
</style>
  