<template>
    <!-- 404 -->
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-9xl font-bold">404</h1>
        <h2 class="text-2xl font-semibold">This page ( {{ $route.params.other }} ) could not be found.</h2>
        <p class="text-xl mt-4">Please check the URL or go back to the homepage.</p>
        <nuxt-link to="/" class="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">Go back home</nuxt-link>

        <div class="mt-8">
            <!-- <img src="https://i.imgur.com/qIufhof.png" alt="404 image"> -->
        </div>
    </div>
</template>
<script setup>
definePageMeta({
  layout: 'empty'
})
</script>