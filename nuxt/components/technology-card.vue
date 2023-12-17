<template>
  <div :class="`card shadow-xl hover:opacity-90 min-w-min max-w-max ${level_style}`">
    <div class="card-body">
      <h2 class="card-title text-base-300 self-center">{{ name }}</h2>
      <component v-if="dynamic_component" :is="dynamic_component" class=" w-8 h-8 self-center"/>
      <fallback v-else class=" w-8 h-8 self-center"/>
    </div>
  </div>
</template>

<script>

import fallback from '@/components/icon/common/fallback.vue';

export default {
  components: { fallback },
  name: 'technology_card',
  props: {
    name: String,
    level: Number,
  },
  setup(props) {
    const level_styles = [
      'bg-success',
      'bg-accent',
      'bg-info',
      'bg-warning',
      'bg-error',
    ];

    const level_style = ref(level_styles[props.level - 1] ? level_styles[props.level - 1] : 'bg-error');
    
    const dynamic_component = shallowRef(null);

    onMounted(async () => {
      dynamic_component.value = await defineAsyncComponent(async () => {
        try {
          return await import(`@/components/icon/technology/${props.name}.vue`);
        } catch (error) {
          return fallback
        }
      });
    });

    return {
      level_style,
      dynamic_component
    };
  }
};
</script>

<style>
</style>