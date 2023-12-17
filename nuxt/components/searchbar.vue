<template>
    <div class="join">
        <input v-model="searchQuery" type="text" placeholder="Search..." class=" join-item input input-bordered max-w-xs" />
        <NuxtLink class="btn btn-outline btn-secondary join-item" :to="`/search-result?search=${searchQuery}`">
            <icon-common-lupa />
        </NuxtLink>
    </div>
</template>

<script>

// import { useRouter } from 'vue-router';
import { useNuxtApp } from 'nuxt/app';

export default {
  name: 'searchbar',
  setup() {

    // const router = useRouter()
    const searchQuery = ref('')

    const router = useNuxtApp().router

    return {
      router, searchQuery
    }
  }
}
</script>