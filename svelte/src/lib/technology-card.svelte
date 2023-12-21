<div class="card shadow-xl hover:opacity-90 min-w-min max-w-max {level_style}">
    <div class="card-body">
        <h2 class="card-title text-base-300 self-center">{name}</h2>
        <div class=" self-center bg-neutral-600 rounded-2xl shadow-lg p-2 bg-opacity-50">
            {#await component}
                <Fallback class="w-8 h-8"/>
            {:then com}
                {#if com}
                    <svelte:component this={com?.default} class=" w-8 h-8"/>
                {:else}
                    <Fallback class="w-8 h-8"/>
                {/if}
            {/await}
        </div>
    </div>
</div>

<script>
    import { technologies_promisses } from "$lib/store/technologies.js";
    import Fallback from '$lib/img/icon/common/fallback.svg?component'

    export let name
    export let level

    let component = technologies_promisses[name]

    const level_style = [
        'bg-success',
        'bg-accent',
        'bg-info',
        'bg-warning',
        'bg-error',
    ][level - 1];
</script>