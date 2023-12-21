<!-- 404 -->
<div class="flex flex-col items-center min-h-screen justify-center h-full">
    <h1 class="text-9xl font-bold">404</h1>
    <h2 class="text-2xl font-semibold">This page ( {$page.params.other} ) could not be found.</h2>
    <p class="text-xl mt-4">Please check the URL or go back to the homepage.</p>
    <a href="/" class="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">Go back home</a>

    <div class="mt-8">
        <!-- <img src="https://i.imgur.com/qIufhof.png" alt="404 image"> -->
    </div>
</div>

<script>
    import { page } from '$app/stores';
    console.log($page.route)
</script>