<div>
    <div class="card shadow-xl bg-base-100 min-w-full hover:opacity-90">
    <div class="card-body flex flex-row gap-4 flex-wrap">
        <h2 class="card-title self-start">Search is not yet implemented !</h2>
        <div class="card shadow-xl bg-neutral hover:opacity-90 grow">
            <div class="card-body flex flex-row">
                <h2 class="text-secondary font-semibold">Your query was:</h2>
                <h1 class=" mx-auto"> { $page.url.searchParams.get('search') }</h1>
            </div>
        </div>
    </div>
    </div>
</div>

<script>
    import { page } from '$app/stores';
</script>