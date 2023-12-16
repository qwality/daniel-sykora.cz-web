<template>
    <div :class="`card shadow-xl hover:opacity-90 min-w-min max-w-max ${familiarity_style}`">
        <div class="card-body">
            <h2 class="card-title text-base-300">{{ name }}</h2>
            <img class=" ml-2 w-8 h-8 self-center" :src="`/app/img/${icon}`">
        </div>
    </div>
</template>

<script>
export default {
  name: 'technology_card',
  props: {
    name: String,
    familiarity: Number,
    icon: String
  },
  setup(props) {
    
    const familiarity_styles = [
        'bg-success',
        'bg-accent',
        'bg-info',
        'bg-warning',
        'bg-error',
    ]
    // console.log(props.familiarity, props.name, props.icon, familiarity_styles[props.familiarity])
    const icon = props.icon ? props.icon : 'img_not_found.svg'
    const familiarity_style = familiarity_styles[props.familiarity-1] ? familiarity_styles[props.familiarity-1] : 'bg-error'
    return {
        familiarity_style, icon
    };
  }
}
</script>

<style>
</style>