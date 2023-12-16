<template>
  <div>
    <!-- scale -->
    <div class="flex-small-card h-min self-center mx-auto mb-4">
      <div class="card-body">
        <div class="join h-4 w-80 bg-neutral grid grid-cols-5 border !border-neutral-500">
            <span class="bg-success join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-accent  join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-info    join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-warning join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-error   join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
        </div>
        <div class="grid grid-cols-1 text-center">
          <span class="text-xs text-success">excelent familiarity</span>
          <span class="text-xs text-accent">comfortable</span>
          <span class="text-xs text-info">usable</span>
          <span class="text-xs text-warning">recent adition</span>
          <span class="text-xs text-error">want to learn</span>
        </div>
      </div>
    </div>
    <div class="flex-card-layout">
      <technology_card
        v-for="[key, item] in Object.entries(technologies)"
        :key="item"
        :name="key"
        :familiarity="item['familiarity']"
        :icon="item['icon'] ? item['icon'] : ''"
      />
    </div>
  </div>
</template>

<script>
import technology_card from '../components/technology_card.vue';
export default {
    name: 'Technologie',
    components: {
      technology_card
    },
    setup() {

        const familiarity = [ 'almost none', 'basic knowledge', 'aligable', 'comfortable', 'excelent familiarity']

        const technologies = {
          'python': {
            'familiarity': 1,
            'icon': 'python.svg'
          },
          'fastapi': {
            'familiarity': 3,
            'icon': 'fastapi.svg'
          },
          'javascript': {
            'familiarity': 2,
            'icon': 'js.svg'
          },
          'vue': {
            'familiarity': 3,
            'icon': 'vue.svg'
          },
          'html': {
            'familiarity': 2,
            'icon': 'html.svg'
          },
          'css': {
            'familiarity': 3,
            'icon': 'css.svg'
          },
          'tailwindcss': {
            'familiarity': 4,
            'icon': 'tailwindcss.svg'
          },
          'jwt': {
            'familiarity': 5,
            'icon': 'jwt.svg'
          },
          // 'icons8': {
          //   'familiarity': 4,
          //   'icon': 'icons8.svg'
          // },
          'elixir': {
            'familiarity': 5,
            'icon': 'elixir.svg'
          },
          'svelte': {
            'familiarity': 5,
            'icon': 'svelte.svg'
          },
          'phoenix': {
            'familiarity': 5,
            'icon': 'phoenix.svg'
          },
          'alpinejs': {
            'familiarity': 5,
            'icon': 'alpinejs.svg'
          },
          'htmx': {
            'familiarity': 4,
            'icon': 'htmx.svg'
          },
          'bun': {
            'familiarity': 5,
            'icon': 'bun.svg'
          },
          'stylex': {
            'familiarity': 5,
            'icon': 'stylex.svg'
          },
          'nginx': {
            'familiarity': 3,
            'icon': 'nginx.svg'
          },
          'docker': {
            'familiarity': 5,
            'icon': 'docker.svg'
          },
          'mongodb': {
            'familiarity': 5,
            'icon': 'mongodb.svg'
          },
          'sass': {
            'familiarity': 5,
            'icon': 'sass.svg'
          },
          'git': {
            'familiarity': 2,
          },
        }

        return {
            familiarity, technologies
        };
    }
}
</script>

<style scoped>
.flex-card-layout{
  @apply flex flex-wrap gap-4 m-auto justify-center content-center ;
}
.flex-small-card{
  @apply card shadow-xl bg-base-100 hover:opacity-90 min-w-min max-w-max;
}
</style>
