<Zivotopis />
<div class="ml-auto mt-auto join gap-1 flex-nowrap flex">
    <a href="https://daniel-sykora.cz/uvicorn/static/pdf/daniel-sykora-developer.pdf" class="btn btn-secondary join-item w-min px-8 text-lg whitespace-nowrap col-span-full">
        PDF
    </a>
    <!-- Prin button -->
    <a href="{base}/print_zivotopis" class="btn btn-secondary join-item w-min px-8 text-lg whitespace-nowrap col-span-full ">
        Printable version
    </a>
</div>
<script>
    import {base} from '$app/paths';
    import Zivotopis from "$lib/zivotopis.svelte";
</script>