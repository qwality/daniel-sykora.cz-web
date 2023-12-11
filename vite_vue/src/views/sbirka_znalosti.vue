<template>
  <div class="grid-card-layout w-1/2">
    <!-- scale -->
    <div class="grid-small-card h-min self-center">
      <div class="card-body">
        <div class="join h-4 w-80">
            <span
                v-for="i in 10" :key="i"
                class="h-max"
                :style="{ backgroundColor: `rgba(0, 0, 0, ${(i+1)/10})`, width: '10%', height: '100%'}"
                >

            </span>
        </div>
      </div>
    </div>
    <!-- python -->
    <div class="grid-small-card !bg-base-100">
      <div class="card-body">
        <h2 class="card-title text-secondary">python</h2>
        <img class=" ml-2 w-4 h-4 self-center" src="/img/python.png">
      </div>
    </div>
    <!-- javascript -->
    <div class="grid-small-card !bg-base-200">
      <div class="card-body">
        <h2 class="card-title text-secondary">javascript</h2>
        <img class=" ml-2 w-4 h-4 self-center" src="/img/javascript.png">
      </div>
    </div>
    <!-- HTML -->
    <div class="grid-small-card !bg-base-300">
      <div class="card-body">
        <h2 class="card-title text-secondary">HTML</h2>
        <img class=" ml-2 w-4 h-4 self-center" src="/img/html.png">
      </div>
    </div>
    <!-- CSS -->
    <div class="grid-small-card !bg-base-[300]">
      <div class="card-body">
        <h2 class="card-title text-secondary"><i>CSS </i></h2>
        <img class=" ml-2 w-4 h-4 self-center" src="/img/css.png">
      </div>
    </div>
    <!-- FastAPI -->
    <div class="grid-small-card !bg-[#414A4C]">
      <div class="card-body">
        <h2 class="card-title text-secondary">FastAPI</h2>
        <img class=" ml-2 w-4 h-4 self-center" src="/img/fastapi.svg">
      </div>
    </div>
    <!-- Vue -->
    <div class="grid-small-card !bg-[#7C7C7C]">
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
  @apply flex flex-wrap gap-4 m-auto justify-center;
}
.grid-small-card{
  @apply card shadow-xl bg-base-100 hover:opacity-90 min-w-min max-w-max;
}
</style>
