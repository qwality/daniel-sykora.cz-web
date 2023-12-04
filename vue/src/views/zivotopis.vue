<template>
  <div class="flex flex-row flex-wrap gap-4 max-w-full mx-auto">
    <!-- Nadpis -->
    <div class="card shadow-xl bg-base-200 min-w-full hover:opacity-90">
      <div class="card-body">
        <h2 class="card-title md:absolute">Zivotopis:</h2>
        <h1 class=" text-[clamp(1rem,9vw,8rem)] text-primary text-center">Daniel Sykora</h1>
      </div>
    </div>
    <!-- Hledam praci -->
    <div class="small-card">
      <div class="card-body">
        <h2 class="card-title text-secondary">Hledam praci jako:</h2>
        <p>backend, frontend, fullstack junior developer</p>
      </div>
    </div>
    <!-- kontakty -->
    <div class="small-card">
      <div class="card-body">
        <h2 class="card-title text-secondary">Kontakty:</h2>
        <div class="grid grid-cols-[min-content_min-content] gap-x-4">
          <span>email: </span>  <a class="link link-accent" href="mailto:daniel_sykora@icloud.com">daniel_sykora@icloud.com</a>
          <span>tel: </span>    <a class="link link-accent" href="tel:+420603328223">603 328 223</a>
        </div>
      </div>
    </div>
    <!-- souhrn -->
    <div class="large-card">
      <div class="card-body">
        <h2 class="card-title text-secondary">Souhrn:</h2>
        <p>Před několika lety jsem opustil vysokou školu a vydal se na jinou kariérní cestu. Asi pět let jsem pracoval jako kurýr, ale i když mě řízení baví, nakonec jsem zjistil, že to není to, co chci dělat celý život. Po dlouhém přemýšlení jsem se rozhodl, že se chci opět věnovat programování. Začal jsem si obnovovat své znalosti a chtěl bych získat v tomto oboru více zkušeností. Chtěl bych se vydat do reálného světa a zjistit, jak vypadá práce programátora v praxi.</p>
      </div>
    </div>
    <!-- Technologie -->
    <div class="small-card">
      <div class="card-body">
        <h2 class="card-title text-secondary">Technologie:</h2>
        <div class="grid grid-cols-[min-content_min-content] gap-x-8 gap-y-2">
          <span class="flex flex-nowrap">python     <img class=" ml-2 w-4 h-4 self-center" :src="require('@/assets/img/python.png')"> </span>
          <span class="flex flex-nowrap">javascript <img class=" ml-2 w-4 h-4 self-center" :src="require('@/assets/img/javascript.png')"></span>
          <span class="flex flex-nowrap">HTML       <img class=" ml-2 w-4 h-4 self-center" :src="require('@/assets/img/html.png')"></span>
          <span class="flex flex-nowrap"><i>CSS </i><img class=" ml-2 w-4 h-4 self-center" :src="require('@/assets/img/css.png')"></span>
          <span class="flex flex-nowrap">FastAPI    <img class=" ml-2 w-4 h-4 self-center" :src="require('@/assets/img/fastapi.svg')"></span>
          <span class="flex flex-nowrap">Vue        <img class=" ml-2 w-4 h-4 self-center" :src="require('@/assets/img/vue.png')"></span>
        </div>
      </div>
    </div>
    <!-- Vzdelani -->
    <div class="small-card">
      <div class="card-body">
        <h2 class="card-title text-secondary">Vzdelani:</h2>
        <div class="">
          <div class="flex justify-between gap-4"><b class="">Střední průmyslová </b> <span>obor technické lyceum</span></div>
          <div class="divider my-0"></div> 
          <div class="flex justify-between gap-4"><b class="">VSB-TU Ostrava     </b> <span>nedokončené</span></div>
        </div>
      </div>
    </div>
    <!-- Byvale prace -->
    <div class="small-card">
      <div class="card-body">
        <h2 class="card-title text-secondary">Byvale prace:</h2>
        <div class="grid grid-cols-[min-content_min-content_min-content] gap-x-8 gap-y-2">
          <b>Rohlik</b> <span>kurýr</span> <span class=" whitespace-nowrap">nyní</span>  
          <b>GLS</b>    <span>kurýr</span> <span class=" whitespace-nowrap">4 roky</span> 
          <b>Tint</b>   <span>montér</span><span class=" whitespace-nowrap">1 rok</span> 
        </div>
      </div>
    </div>
    <!-- Soft skills -->
    <div class="large-card">
      <div class="card-body">
        <h2 class="card-title text-secondary">Soft skills:</h2>
        <div class="flex flex-col  gap-4">
          <p><b class="whitespace-nowrap text-lg">odolný vůči stresu:</b> jako kurýr jsem pracoval pod tlakem a mnohdy řešil více věcí najednou </p>
          <p><b class="whitespace-nowrap text-lg">úhel pohledu:</b>       často dokážu vidět věci z různých pohledů a na základě toho poskytovat zpětnou vazbu </p>
          <p><b class="whitespace-nowrap text-lg">důslednost:</b>         při řešení problémů mě zajímá hlavně jak problém vznikl ne jenom jak ho vyřešit </p>
        </div>
      </div>
    </div>
    <!-- Projekty -->
    <div class="large-card">
      <div class="card-body">
        <h2 class="card-title text-secondary">Projekty:</h2>
        <div class="flex flex-col  gap-4">
          <p><b class="whitespace-nowrap text-lg link link-accent">Tetris:</b> Základní hra tetris s ovládáním pomocí šipek a počítáním score, použil jsem knihovnu Pygame, která je optimalizovaná pro hry v Pythonu. </p>
          <p><b class="whitespace-nowrap text-lg link link-accent">Hexagons:</b> Základ pro hexagonální mapu, objektově orientovaný, taky pomocí Pygame. </p>
          <p><b class="whitespace-nowrap text-lg link link-accent">Cvičení na leetcode:</b> Zde si procvičuju své schopnosti řešením různých algoritmických úloh a vylepšuji tak své dovednosti v oblasti programování a logického myšlení. </p>
          <p><b class="whitespace-nowrap text-lg link link-accent">This.server:</b> Tato stránka je součástí mého projektu, běží na vlastním serveru s vlastním backendem. Pro správný chod jsem nainstaloval nejnovější verzi Pythonu a vytvořil jednoduchý bash skript pro rychlý redeploy. </p>
        </div>
      </div>
    </div>
    <!-- Jazyky -->
    <div class="small-card">
      <div class="card-body">
        <h2 class="card-title text-secondary">Jazyky:</h2>
        <div class="flex flex-nowrap gap-4">
          <b>Anglictina: </b>intermediate
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueResizable from 'vue-resizable';

export default {
  name: 'Zivotopis',
  components: {
    VueResizable
  }
}
</script>

<style>
.small-card{
    @apply card shadow-xl bg-base-100 shrink grow self-start hover:opacity-90;
}
.large-card{
    @apply card shadow-xl bg-base-100 basis-1/2 grow hover:opacity-90;
}
</style>
