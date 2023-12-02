<template>
  <div>
    <p class="markdown-body" v-html="articleHtml"></p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import MarkdownIt from 'markdown-it';
import article from '@/article-1.md';

export default {
  name: 'home',
  setup(){

    const articleHtml = ref('')

    onMounted(() => {
      const md = new MarkdownIt()
      articleHtml.value = md.render(article)
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
