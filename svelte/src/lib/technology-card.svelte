<div class="card shadow-xl hover:opacity-90 min-w-min max-w-max {level_style}">
    <div class="card-body">
        <h2 class="card-title text-base-300 self-center">{technology.name}</h2>
        <svelte:component this={technology.component.default} class=" w-8 h-8 self-center"/>
    </div>
    
</div>

<script>
    export let technology = {
        name: 'default',
        component: null,
        level: 1
    }

    const level_style = [
        'bg-success',
        'bg-accent',
        'bg-info',
        'bg-warning',
        'bg-error',
    ][technology.level - 1];
</script>