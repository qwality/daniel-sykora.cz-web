export let technologies_promisses = {}

export let technologies = {
    'python': 1,
    'fastapi': 3,
    'javascript': 2,
    'vue': 4,
    'html': 2,
    'css': 3,
    'tailwindcss': 3,
    'jwt': 5,
    'elixir': 5,
    'svelte': 4,
    'phoenix': 5,
    'alpinejs': 5,
    'htmx': 4,
    'bun': 5,
    'stylex': 5,
    'nginx': 3,
    'docker': 5,
    'mongodb': 5,
    'sass': 5,
    'github': 3,
    'vite': 5,
    'nuxt': 4,
    'daisyui': 3,
    'graphql': 5,
}

import { base } from '$app/paths'

for (const path in import.meta.glob('$lib/img/icon/technology/*.svg')) {
    let technology_name =
        path.split('/').pop().split('.')[0].split('-')[1]

    technologies_promisses[technology_name] =
        import(`.././img/icon/technology/icon-${technology_name}.svg?component`)
}