
<div class="app min-h-screen flex flex-col">
    <div class="drawer grow">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> <!-- daisyui hidden toggle to controll side drawer -->
        <div class="drawer-content flex flex-col">
            <!-- header -->
            <div class="w-full text-center bg-base-300">
                <h1 class=" text-6xl p-8 text-primary font-bold">
                    Daniel Sykora <span class=" inline-block font-normal text-3xl">Blog Page</span>
                </h1>
            </div>
            <!-- navbar -->
            <div class="flex w-full md:px-16 navbar p-0 bg-base-200">
                <!-- hamburger icon -->
                <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost flex-none lg:hidden mr-4">
                    <HamburgerIcon class="inline-block w-6 h-6 stroke-current" />
                </label>
                <!-- current page name -->
                <div class="flex-1">
                    <h1 class=" text-xl text-secondary">
                        { menu_items[$page.route.id] }
                    </h1>
                </div>
                <!-- menu -->
                <div class="flex-none hidden lg:inline-flex gap-4 h-full">
                    <div role="tablist" class="tabs tabs-lifted tabs-lg self-end">
                        {#each Object.entries(menu_items) as [key, item]}
                            <a
                                href="{key}"
                                role="tab"
                                class={`tab hover:bg-base-100 ${menu_items[$page.route.id] == item ? 'tab-active' : ''}`} 
                            >
                                {item}
                            </a>
                        {/each}
                    </div>
                    <SearchBar />
                </div>
            </div>
            <!-- main content -->
            <div class="card md:mx-16 my-4 bg-neutral shadow-xl grow">
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
                <SearchBar/>
                <div class=" join join-vertical">
                    {#each Object.entries(menu_items) as [key, item]}
                        <label
                            href="{key}"
                            for="my-drawer-3"
                            class="btn join-item"
                        >
                            {item}
                        </label>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    import "../app.css";
    import { page } from '$app/stores';
    import HamburgerIcon from "$lib/img/icon/common/hamburger.svg?component";
    import CrossIcon from "$lib/img/icon/common/cross.svg?component";
    import SearchBar from "$lib/searchbar.svelte";
    import Footer from "$lib/footer.svelte";
    import { menu_items } from "$lib/store/menu_items.js";
    console.log($page)
</script>
