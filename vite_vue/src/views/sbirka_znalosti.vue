<template>
  <div class="grid-card-layout w-1/2">
    <!-- python -->
    <div class="grid-small-card">
      <div class="card-body">
        <h2 class="card-title text-secondary">python</h2>
        <img class=" ml-2 w-4 h-4 self-center" src="/img/python.png">
      </div>
    </div>
    <!-- javascript -->
    <div class="grid-small-card">
      <div class="card-body">
        <h2 class="card-title text-secondary">javascript</h2>
        <img class=" ml-2 w-4 h-4 self-center" src="/img/javascript.png">
      </div>
    </div>
    <!-- HTML -->
    <div class="grid-small-card">
      <div class="card-body">
        <h2 class="card-title text-secondary">HTML</h2>
        <img class=" ml-2 w-4 h-4 self-center" src="/img/html.png">
      </div>
    </div>
    <!-- CSS -->
    <div class="grid-small-card">
      <div class="card-body">
        <h2 class="card-title text-secondary"><i>CSS </i></h2>
        <img class=" ml-2 w-4 h-4 self-center" src="/img/css.png">
      </div>
    </div>
    <!-- FastAPI -->
    <div class="grid-small-card">
      <div class="card-body">
        <h2 class="card-title text-secondary">FastAPI</h2>
        <img class=" ml-2 w-4 h-4 self-center" src="/img/fastapi.svg">
      </div>
    </div>
    <!-- Vue -->
    <div class="grid-small-card">
      <div class="card-body">
        <h2 class="card-title text-secondary">Vue</h2>
        <img class=" ml-2 w-4 h-4 self-center" src="/img/vue.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Sbirka znalosti',
}
</script>

<style scoped>
.grid-card-layout{
  @apply flex gap-4 m-auto justify-center;
}
.grid-small-card{
  @apply card shadow-xl bg-base-100 hover:opacity-90 min-w-min max-w-max;
}
</style>
