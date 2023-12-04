<template>
  <div>
    <div class="card shadow-xl bg-base-100 min-w-full hover:opacity-90">
      <div class="card-body flex flex-row gap-4 flex-wrap">
        <h2 class="card-title self-start">Search is not jet implemented !</h2>
        <div class="card shadow-xl bg-neutral hover:opacity-90 grow">
            <div class="card-body flex flex-row">
                <h2 class="text-secondary font-semibold">Your query was:</h2>
                <h1 class=" mx-auto"> {{ query }}</h1>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import { ref } from 'vue';

export default {
    name: 'Search result',
    setup() {
        const route = useRoute();
        const query = ref(route.query.search); // Název 'query' odpovídá parametru v URL

        watch(() => route.query, (newQuery) => {
            query.value = newQuery.search
        });

        return {
        query
        };
    }
}
</script>