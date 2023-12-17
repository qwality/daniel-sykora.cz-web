<template>
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
                        <icon-common-hamburger />
                    </label>
                    <!-- current page name -->
                    <div class="flex-1">
                        <h1 class=" text-xl text-secondary">
                        {{ get_menu_item_name() }}
                        </h1>
                    </div>
                    <!-- menu -->
                    <div class="flex-none hidden lg:inline-flex gap-4 h-full">
                        <div role="tablist" class="tabs tabs-lifted tabs-lg self-end">
                            <div
                                @click="e => $router.push(key)"
                                v-for="[key, item] in Object.entries(menu_items)"
                                :key="key"
                                role="tab"
                                :class="`tab ${ get_menu_item_name() == item ? 'tab-active' : '' } hover:bg-base-100`"
                            >
                                {{ item }}
                            </div>
                        </div>
                        <searchbar class=" self-center"/>
                    </div>
                </div>
                <!-- main content -->
                <div class="card md:mx-16 my-4 bg-neutral shadow-xl grow">
                    <div class="card-body p-2 md:p-8" ref="content">
                        <slot />
                    </div>
                </div>
                <!-- footer -->
                <layout-footer />
            </div> 
            <!-- sidebar -->
            <div class="drawer-side">
                <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
                
                <div class="p-4 min-h-full bg-base-200 flex flex-col gap-4">
                <label for="my-drawer-3" aria-label="close sidebar" class="btn btn-square btn-ghost self-end">
                    <icon-common-cross />
                </label>
                <searchbar />
                <div class=" join join-vertical">
                    <label
                        @click="e => $router.push(key)"
                        v-for="[key, item] in Object.entries(menu_items)"
                        :key="key"
                        for="my-drawer-3"
                        class="btn join-item"
                    >
                    {{ item }}
                    </label>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'default layout',
    setup() {
        const { menu_items, get_menu_item_name } = useMenu_items()

        return {
            menu_items, get_menu_item_name
        }
    }
}

</script>