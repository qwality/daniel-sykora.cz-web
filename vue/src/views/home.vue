<template>
  <div>
    <div class="card shadow-xl bg-base-100 max-w-4xl mx-auto">
      <div class="card-body">
        <div class="markdown-body" v-html="articleHtml"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import MarkdownIt from 'markdown-it';
import article from '@/article-1.md';

import axios from 'axios';

export default {
  name: 'Home',
  setup(){

    const articleHtml = ref('')

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
      fetch_article(1).then((data) => {
        articleHtml.value = data
      })
    })

    return{
      articleHtml
    }
  }
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
