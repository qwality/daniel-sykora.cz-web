// const paths = 

export const paths = import.meta.glob('$lib/img/icon/technology/*.svg')

export let technologies_components = {}

export let technologies = {
    'python': 1,
    'fastapi': 3,
    'javascript': 2,
    'vue': 4,
    'html': 2,
    'css': 3,
    'tailwindcss': 3,
    'jwt': 5,
    // 'icons8': 4,
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

for (const path in paths) {
    const name = path.split('/').pop().split('.')[0]
    technologies_components[name] = {
        name: name,
        component: await import(path + '?component'),
        level: technologies[name]
    }
}