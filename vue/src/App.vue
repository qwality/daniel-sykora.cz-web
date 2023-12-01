<template>
  <div>
    <div class="w-full text-center bg-base-300">
    <h1 class=" text-6xl p-8 text-primary font-bold">
      Daniel Sykora <span class=" inline-block font-normal text-3xl">Blog Page</span>
    </h1>
  </div>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="flex w-full px-16 navbar bg-base-200">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div> 
        <div class="flex-1">
          <h1 class=" text-xl px-8 text-secondary">
            Featuring
          </h1>
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="join mr-4">
            <li><a class="btn join-item">Zivotopis</a></li>
            <li><a class="btn join-item">This project</a></li>
            <li><a class="btn join-item">Sbirka znalosti</a></li>
            <li><a class="btn join-item">Admin</a></li>
          </ul>
          <div class="join">
            <input type="text" placeholder="Search..." class=" join-item input input-bordered max-w-xs" />
            <button class="btn btn-outline btn-secondary join-item">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
          
          
        </div>
      </div>
      
      <!-- Page content here -->
      <div class="card mx-16 my-4 bg-neutral shadow-xl">
        <div class="card-body">
          <!-- <h2 class="card-title">Card title!</h2> -->
          <p class="markdown-body" v-html="articleHtml"></p>
        </div>
      </div>
      
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
      <ul class="menu p-4 min-h-full bg-base-200">
        <!-- Sidebar content here -->
        <li class=" lg:hidden">
          <label for="my-drawer-3" aria-label="close sidebar" class="">
            hide
          </label>
        </li>
        
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
  </div>
  
</template>

<script>
import { ref, onMounted } from 'vue';
import MarkdownIt from 'markdown-it';
import article from '@/article-1.md';

export default {
  name: 'App',
  setup() {
    const articleHtml = ref('');

    onMounted(() => {
      const md = new MarkdownIt();
      articleHtml.value = md.render(article);
    });

    return {
      articleHtml
    }
  }
}
</script>

<style>
.markdown-body {
  @apply bg-transparent text-current;
}
</style>