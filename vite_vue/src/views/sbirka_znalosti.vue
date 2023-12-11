<template>
  <div class="grid-card-layout w-1/2">
    <!-- scale -->
    <div class="grid-small-card h-min self-center">
      <div class="card-body">
        <div class="join h-4 w-80 bg-neutral grid grid-cols-5 border !border-neutral-500">
            <span class="bg-success join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-accent  join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-info    join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-warning join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-error   join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
        </div>
      </div>
    </div>
    <!-- python -->
    <div class="grid-small-card !bg-success">
      <div class="card-body">
        <h2 class="card-title text-base-300">Python</h2>
        <img class=" ml-2 w-8 h-8 self-center" src="/img/python.svg">
      </div>
    </div>
    <!-- FastAPI -->
    <div class="grid-small-card !bg-info">
      <div class="card-body">
        <h2 class="card-title text-base-300">FastAPI</h2>
        <img class=" ml-2 w-8 h-8 self-center" src="/img/fastapi.svg">
      </div>
    </div>
    <!-- javascript -->
    <div class="grid-small-card !bg-info">
      <div class="card-body">
        <h2 class="card-title text-base-300">JavaScript</h2>
        <img class=" ml-2 w-8 h-8 self-center" src="/img/js.svg">
      </div>
    </div>
    <!-- Vue -->
    <div class="grid-small-card !bg-info">
      <div class="card-body">
        <h2 class="card-title text-base-300">Vue</h2>
        <img class=" ml-2 w-8 h-8 self-center" src="/img/vue.svg">
      </div>
    </div>
    <!-- HTML -->
    <div class="grid-small-card !bg-info">
      <div class="card-body">
        <h2 class="card-title text-base-300">HTML</h2>
        <img class=" ml-2 w-8 h-8 self-center" src="/img/html.svg">
      </div>
    </div>
    <!-- CSS -->
    <div class="grid-small-card !bg-info">
      <div class="card-body">
        <h2 class="card-title text-base-300"><i>CSS </i></h2>
        <img class=" ml-2 w-8 h-8 self-center" src="/img/css.svg">
      </div>
    </div>
    <!-- tailwindcss -->
    <div class="grid-small-card !bg-warning ">
      <div class="card-body">
        <h2 class="card-title text-base-300">tailwindcss</h2>
        <img class=" ml-2 w-8 h-8 self-center" src="/img/tailwindcss.svg">
      </div>
    </div>
    
    
    <!-- JWT -->
    <div class="grid-small-card !bg-error ">
      <div class="card-body">
        <h2 class="card-title text-base-300">JWT</h2>
        <img class=" ml-2 w-8 h-8 self-center" src="/img/jwt.svg">
      </div>
    </div>
    
    <!-- icons8 -->
    <div class="grid-small-card !bg-warning ">
      <div class="card-body">
        <h2 class="card-title text-base-300">icons8</h2>
        <img class=" ml-2 w-8 h-8 self-center" src="/img/icons8.svg">
      </div>
    </div>
    <!-- elixir -->
    <div class="grid-small-card !bg-error ">
      <div class="card-body">
        <h2 class="card-title text-base-300">elixir</h2>
        <img class=" ml-2 w-8 h-8 self-center" src="/img/elixir.svg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Sbirka znalosti',
    setup() {

        const familiarity = [ 'almost none', 'basic knowledge', 'aligable', 'comfortable', 'excelent familiarity']

        return {
            familiarity
        };
    }
}
</script>

<style scoped>
.grid-card-layout{
  @apply flex flex-wrap gap-4 m-auto justify-center;
}
.grid-small-card{
  @apply card shadow-xl bg-base-100 hover:opacity-90 min-w-min max-w-max;
}
</style>
