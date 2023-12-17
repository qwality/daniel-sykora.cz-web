<template>
  <div>
    <!-- scale -->
    <div class="flex-small-card h-min self-center mx-auto mb-4 !min-w-full">
      <div class="card-body">
        <div class="join h-4 bg-neutral grid grid-cols-5 border !border-neutral-500">
            <span class="bg-success join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-accent  join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-info    join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-warning join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-error   join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
        </div>
        <div class="grid grid-cols-5 gap-4 w-full text-center">
          <span class="text-xs text-ellipsis overflow-hidden text-success">excelent familiarity</span>
          <span class="text-xs text-ellipsis overflow-hidden text-accent">comfortable</span>
          <span class="text-xs text-ellipsis overflow-hidden text-info">usable</span>
          <span class="text-xs text-ellipsis overflow-hidden text-warning">recent adition</span>
          <span class="text-xs text-ellipsis overflow-hidden text-error">want to learn</span>
        </div>
      </div>
    </div>
    <!-- technologies -->
    <div class="flex-card-layout">
      <technology-card
        v-for="[key, level] in Object.entries(technologies)"
        :key="key"
        :name="key"
        :level="level"
      />
    </div>
  </div>
</template>

<script>
// import technology_card from '../components/technology-card.vue';
export default {
    name: 'Technologie',
    // components: {
    //   technology_card
    // },
    setup() {

        const technologies = {
          'python': 1,
          'fastapi': 3,
          'javascript': 2,
          'vue': 3,
          'html': 2,
          'css': 3,
          'tailwindcss': 4,
          'jwt': 5,
          // 'icons8': 4,
          'elixir': 5,
          'svelte': 5,
          'phoenix': 5,
          'alpinejs': 5,
          'htmx': 4,
          'bun': 5,
          'stylex': 5,
          'nginx': 3,
          'docker': 5,
          'mongodb': 5,
          'sass': 5,
          'git': 3,
          'vite': 5,
          'nuxt': 4,

        }

        return {
            technologies
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
