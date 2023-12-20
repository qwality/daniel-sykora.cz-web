
<div {...$$props}>
    <div class="join" >
        <input bind:value={search_query} type="text" placeholder="Search..." class=" join-item input input-bordered max-w-xs" />
        <a on:click={onClick} class="btn btn-outline btn-secondary join-item" href="{base}/search-result?search={search_query}">
            <LupaIcon />
        </a>
    </div>
</div>

<script>
    import { base } from '$app/paths.js'
    import LupaIcon from '$lib/img/icon/common/lupa.svg?component'

    export let onClick = () => {}

    let search_query = ''
//     let clazz = ''
//     export {clazz as class}
</script>