<template>
  <div class="app min-h-screen flex flex-col ">
    <!-- header -->
    <div class="w-full text-center bg-base-300">
      <h1 class=" text-6xl p-8 text-primary font-bold">
        Daniel Sykora <span class=" inline-block font-normal text-3xl">Blog Page</span>
      </h1>
    </div>
    <div class="drawer grow">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> <!-- daisyui hidden toggle to controll side drawer -->
      <div class="drawer-content flex flex-col">
        <!-- navbar -->
        <div class="flex w-full md:px-16 navbar p-0 bg-base-200">
          <!-- hamburger icon -->
          <div class="flex-none lg:hidden mr-4">
            <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
              <hamburger_icon />
            </label>
          </div>
          <!-- current page name -->
          <div class="flex-1">
            <h1 class=" text-xl text-secondary">
              {{ currentComponentName }}
            </h1>
          </div>
          <!-- menu -->
          <div class="flex-none hidden lg:inline-flex gap-4 h-full">
            <div role="tablist" class="tabs tabs-lifted tabs-lg self-end">
              <div
                @click="e => router.push(item)"
                v-for="[key, item] in Object.entries(menu_items)"
                :key="item"
                role="tab"
                :class="`tab ${ currentComponentName === key ? 'tab-active' : '' } hover:bg-base-100`"
              >
                {{ key }}
              </div>
            </div>
            <searchbar class=" self-center"/>
          </div>
        </div>
        
        <!-- main content -->
        <div class="card md:mx-16 my-4 bg-neutral shadow-xl grow">
          <div class="card-body p-2 md:p-8" ref="content">
            <router-view/>
          </div>
        </div>

        <!-- footer -->
        <footer class="footer items-center p-4 bg-base-200 text-neutral-content">
          <aside class="flex items-center grid-flow-col gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512" class="fill-current"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z"/></svg>
            <p class="">© 2023 Daniel Sykora. Všechna práva vyhrazena.</p>
          </aside> 
          <nav class=" flex gap-4 justify-between w-full md:w-min md:justify-self-end">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.607-4.042-1.607-.546-1.387-1.334-1.755-1.334-1.755-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.306 3.495.998.108-.776.419-1.305.763-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.431.371.825 1.102.825 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
          </nav>
        </footer>
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
      'Technologie': '/app/technologie',
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