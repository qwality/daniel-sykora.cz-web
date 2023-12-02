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

export default {
  name: 'Home',
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
