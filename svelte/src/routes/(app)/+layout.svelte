
<div class="app min-h-screen flex flex-col">
    <div class="drawer grow">
        <input bind:checked={my_drawer_3} id="my-drawer-3" type="checkbox" class="drawer-toggle" /> <!-- daisyui hidden toggle to controll side drawer -->
        <div class="drawer-content flex flex-col">
            <!-- header -->
            <div class="w-full text-center bg-base-300">
                <h1 class=" text-6xl p-8 text-primary font-bold">
                    Daniel Sykora <span class=" inline-block font-normal text-3xl">Blog Page</span>
                </h1>
            </div>
            <!-- navbar -->
            <div class="flex gap-4 w-full md:px-16 items-center bg-base-200 min-h-[4rem]">
                <!-- hamburger icon -->
                <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost flex-none lg:hidden mr-4">
                    <HamburgerIcon class="inline-block w-6 h-6 stroke-current" />
                </label>
                <!-- current page name -->
                <h1 class="shrink grow-0 whitespace-nowrap text-ellipsis overflow-hidden text-xl text-secondary">
                    <!-- { menu_items[$page.route.id] ? menu_items[$page.route.id] : ''  } -->
                    { $page.data.name }
                </h1>
                <!-- menu -->
                <div class="ml-auto pt-2 flex-none hidden lg:inline-flex h-full gap-4">
                    <div role="tablist" class="tabs tabs-lifted tabs-lg self-end">
                        {#each Object.entries(menu_items) as [key, item]}
                            <a
                                href="{base}{key}"
                                role="tab"
                                class={`tab hover:bg-base-100 ${$page.data.name == item ? 'tab-active' : ''}`} 
                            >
                                {item}
                            </a>
                        {/each}
                    </div>
                </div>
                <SearchBar class="hidden lg:inline-flex" />
            </div>
            <!-- main content -->
            <div class="main card md:mx-16 my-4 bg-base-200 bg-opacity-70 shadow-xl grow">
                <div class="card-body p-2 md:p-8" ref="content">
                    <slot></slot>
                </div>
            </div>
            <!-- footer -->
            <Footer />
        </div>
        <!-- sidebar -->
        <div class="drawer-side">
            <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
            <div class="p-4 min-h-full bg-base-200 flex flex-col gap-4">
                <label for="my-drawer-3" aria-label="close sidebar" class="btn btn-square btn-ghost self-end">
                    <CrossIcon class="stroke-current"/>
                </label>
                <SearchBar onClick={e => my_drawer_3 = false}/>
                <div class=" join join-vertical">
                    {#each Object.entries(menu_items) as [key, item]}
                        <a
                            href="{base}{key}"
                            on:click={e => my_drawer_3 = false}
                            class="btn join-item"
                        >
                            {item}
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>



<script>
    import "../../app.css";
    import { page } from '$app/stores';
    import { base } from '$app/paths';

    import HamburgerIcon from "$lib/img/icon/common/hamburger.svg?component";
    import CrossIcon from "$lib/img/icon/common/cross.svg?component";
    import SearchBar from "$lib/searchbar.svelte";
    import Footer from "$lib/footer.svelte";
    import { menu_items } from "$lib/store/menu_items.js";

    let my_drawer_3
</script>

<style>
    /* .main {
        --pattern_size: 40px;

        --main_color: #222525;
        --secondary_color: rgb(46, 46, 46);
        --tertiary_color: rgb(41, 41, 41);

        --base-color: #0000;
        background:
            conic-gradient(at 50% calc(100%/6),var(--main_color) 60deg,var(--base-color) 0),
            conic-gradient(at calc(100%/6) 50%,var(--base-color) 240deg,var(--main_color) 0),
            conic-gradient(from 180deg at calc(100%/6) calc(500%/6),var(--main_color) 60deg,var(--base-color) 0),
            conic-gradient(from 180deg at calc(500%/6),var(--base-color) 240deg,var(--main_color) 0) calc(4*.866*var(--pattern_size)) 0,
            repeating-linear-gradient(-150deg,var(--secondary_color) 0 calc(100%/6),var(--base-color)   0 50%),
            repeating-linear-gradient(-30deg, var(--tertiary_color) 0 calc(100%/6),var(--base-color) 0 50%);
        background-size: calc(6*.866*var(--pattern_size)) calc(3*var(--pattern_size))
    } */
    .app{
        background-image: url('$lib/img/bg/circuit-board.svg');
        /* background-repeat: no-repeat; */
        /* background-size: cover; */
    }
</style>
