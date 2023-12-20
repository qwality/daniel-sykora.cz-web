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

for (const path in import.meta.glob('$lib/img/icon/technology/*.svg')) {
    const name = path.split('/').pop().split('.')[0]
    // import(/* @vite-ignore */path + '?component').then(component => {
    //     technologies_components[name] = component;
    // })
    // console.log(path)
    // const s = path + '?component'
    const s2 = `${path}?component`
    // const s3 = '/src/lib/img/icon/technology/' + name + '.svg?component'
    // console.log(s, s2)
    technologies_components[name] = import(/* @vite-ignore */s2)
    // technologies_components[name] = await import(/* @vite-ignore */path + '?component')
}
// let imports = []

// for (const path in import.meta.glob('$lib/img/icon/technology/*.svg')) {
//     imports.push(
//         import(/* @vite-ignore */path + '?component').then(component => {
//             technologies_components[path.split('/').pop().split('.')[0]] = component;
//         })
//     );
// }

// Promise.all(imports).then(() => {  })

// console.log('loading technologies...')