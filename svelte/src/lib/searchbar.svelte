<div class="join">
    <input bind:value={search_query} type="text" placeholder="Search..." class=" join-item input input-bordered max-w-xs" />
    <a class="btn btn-outline btn-secondary join-item" href="/search-result?search={search_query}">
        <LupaIcon />
    </a>
</div>

<script>
    import LupaIcon from '$lib/img/icon/common/lupa.svg?component'
    let search_query = ''
</script>