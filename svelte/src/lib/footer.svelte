<footer class="footer items-center p-4 bg-base-200 text-neutral-content">
    <aside class="flex items-center grid-flow-col gap-4">
        <a href="{links.this}"><IconBlog class="fill-current w-8 h-8"/> </a>
        <p class="">© 2023 Daniel Sykora. Tento web jsem vytvoril s ucelem uplatneni svych dosavadnich zkusenosti.</p>
    </aside> 
    <nav class=" flex gap-4 justify-around w-full md:w-min md:justify-self-end">
        <!-- <a href=" "><TwitterIcon class="fill-current w-8 h-8"/> </a> -->
        <!-- <a href=" "><YoutubeIcon class="fill-current w-8 h-8"/> </a> -->
        <a href="{links.facebook}" target="_blank"><FacebookIcon class="fill-current w-8 h-8"/> </a>
        <a href="{links.github}" target="_blank">  <GithubIcon class="fill-current w-8 h-8"/>   </a>
    </nav>
</footer>

<script>
    import { links } from "$lib/store/links.js";

    import IconBlog from "$lib/img/icon/social/blog.svg?component";
    // import TwitterIcon from "$lib/img/icon/social/twitter.svg?component";
    // import YoutubeIcon from "$lib/img/icon/social/youtube.svg?component";
    import FacebookIcon from "$lib/img/icon/social/facebook.svg?component";
    import GithubIcon from "$lib/img/icon/social/github.svg?component";
</script>