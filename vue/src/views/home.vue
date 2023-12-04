<template>
  <div class="flex gap-4 flex-wrap">
    <div class="card shadow-xl bg-base-100 max-w-4xl mx-auto">
      <div class="card-body">
        <div class="markdown-body" v-html="article_1"></div>
      </div>
    </div>

    <div class="card shadow-xl bg-base-100 max-w-4xl mx-auto">
      <div class="card-body">
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
        console.log(response.data)
        return MarkdownIt().render(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      // const md = new MarkdownIt()
      // articleHtml.value = md.render(article)
      fetch_article('readme')
        .then((data) => {
          article_1.value = data
        })
      fetch_article(2)
        .then((data) => {
          article_2.value = data
        })
    })

    return{
      article_1, article_2
    }
  }
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
