<template>
    <div class="join">
        <input v-model="searchQuery" type="text" placeholder="Search..." class=" join-item input input-bordered max-w-xs" />
        <button class="btn btn-outline btn-secondary join-item" @click="e => router.push({name: '/app/search', query: {search: searchQuery}})" >
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
</template>

<script>

import { useRouter } from 'vue-router';

export default {
  name: 'searchbar',
  setup() {

    const router = useRouter()
    return {
      router
    }
  }
}
</script>

<style>
</style>