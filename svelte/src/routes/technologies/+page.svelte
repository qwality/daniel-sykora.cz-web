<!-- scale -->
<div class="flex-small-card h-min self-center mx-auto mb-4 !min-w-full">
    <div class="card-body">
        <div class="join h-4 bg-neutral grid grid-cols-5 border !border-neutral-500">
            <span class="bg-success join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-accent  join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-info    join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-warning join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
            <span class="bg-error   join-item border !border-neutral-500 hover:opacity-90 h-full" ></span>
        </div>
        <div class="grid grid-cols-5 gap-4 w-full text-center">
            <span class="text-xs text-ellipsis overflow-hidden text-success">excelent familiarity</span>
            <span class="text-xs text-ellipsis overflow-hidden text-accent">comfortable</span>
            <span class="text-xs text-ellipsis overflow-hidden text-info">usable</span>
            <span class="text-xs text-ellipsis overflow-hidden text-warning">recent adition</span>
            <span class="text-xs text-ellipsis overflow-hidden text-error">want to learn</span>
        </div>
    </div>
</div>
<!-- technologies -->
<div class="flex-card-layout">
    {#each Object.entries(technologies) as [name, level]}
        <TechnologyCard
            name={name}
            level={level}
        />
    {/each}
</div>

<script>
    import TechnologyCard from "$lib/technology-card.svelte";
    import { technologies } from "$lib/store/technologies.js";
</script>
  