<template>
  <div class="app">
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
              <haburger_icon />
            </label>
          </div> 
          <div class="flex-1">
            <h1 class=" text-xl px-8 text-secondary">
              Featuring
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
        
        <div class="card mx-16 my-4 bg-neutral shadow-xl">
          <div class="card-body">
            <router-view/>
          </div>
        </div>
        
      </div> 
      <div class="drawer-side">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
        <ul class="menu p-4 min-h-full bg-base-200 join join-vertical">
          <!-- Sidebar content here -->
          <li class=" lg:hidden">
            <label for="my-drawer-3" aria-label="close sidebar" class="btn join-item">
              hide
            </label>
          </li>
          <li v-for="item in menu_items" :key="item">
            <router-link class="btn join-item" :to="item">{{ item }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
</template>

<script>



import searchbar from './components/searchbar.vue';
import haburger_icon from './components/haburger_icon.vue';

export default {
  name: 'App',
  components: {
    searchbar, haburger_icon
  },
  setup() {
    

    const menu_items = {
      'Home': '/',
      'Zivotopis': '/zivotopis',
      'This project': '/this-project',
      'Sbirka znalosti': '/sbirka-znalosti',
      'Admin': '/admin'
    }

    

    return {
      menu_items
    }
  }
}
</script>

<style>
.markdown-body {
  @apply bg-transparent text-current;
}
</style>