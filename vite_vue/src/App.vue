<template>
  <div class="app">
    <!-- header -->
    <div class="w-full text-center bg-base-300">
      <h1 class=" text-6xl p-8 text-primary font-bold">
        Daniel Sykora <span class=" inline-block font-normal text-3xl">Blog Page</span>
      </h1>
    </div>
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> <!-- daisyui hidden toggle to controll side drawer -->
      <div class="drawer-content flex flex-col">
        <!-- navbar -->
        <div class="flex w-full md:px-16 navbar bg-base-200">
          <div class="flex-none lg:hidden mr-4">
            <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
              <hamburger_icon />
            </label>
          </div> 
          <div class="flex-1">
            <h1 class=" text-xl text-secondary">
              {{ currentComponentName }}
            </h1>
          </div>
          <div class="flex-none hidden lg:inline-flex gap-4">
            <ul class="join">
              <li v-for="[key, item] in Object.entries(menu_items)" :key="item">
                <router-link class="btn join-item" :to="item">{{ key }}</router-link>
              </li>
            </ul>
            <searchbar />
          </div>
        </div>
        
        <!-- main content -->
        <div class="card md:mx-16 my-4 bg-neutral shadow-xl">
          <div class="card-body p-2 md:p-8" ref="content">
            <router-view/>
          </div>
        </div>
      </div> 

      <!-- sidebar -->
      <div class="drawer-side">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
        
        <div class="p-4 min-h-full bg-base-200 flex flex-col gap-4">
          <label for="my-drawer-3" aria-label="close sidebar" class="btn btn-square btn-ghost self-end">
            <cross_icon />
          </label>
          <searchbar />
          <div class=" join join-vertical">
            <label @click="e => router.push(item)" v-for="[key, item] in Object.entries(menu_items)" :key="item" for="my-drawer-3" class="btn join-item">
              {{ key }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, getCurrentInstance, computed } from 'vue';

import searchbar from './components/searchbar.vue';
import hamburger_icon from './components/hamburger_icon.vue';
import cross_icon from './components/cross_icon.vue';

export default {
  name: 'App',
  components: {
    searchbar, hamburger_icon, cross_icon
  },
  setup() {
    const route = useRoute()
    const router = useRouter()

    // by se klidne mohlo importovat z router/index.js
    const menu_items = {
      'Home': '/app/',
      'Zivotopis': '/app/zivotopis',
      'This project': '/app/this-project',
      'Sbirka znalosti': '/app/sbirka-znalosti',
      'Admin': '/app/admin'
    }

    onMounted(() => {
    })

    const currentComponentName = computed(() => {
      if (route.matched.length > 0) {
        const routeRecord = route.matched[0];
        const component = routeRecord.components.default;
        return component.name || 'UnnamedComponent';
      }
      return 'NoComponent';
    })

    return {
      menu_items,  currentComponentName, router
    }
  }
}
</script>

<style>
.markdown-body {
  @apply bg-transparent text-current;
}
</style>