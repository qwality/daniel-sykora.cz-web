// import { ref } from 'vue'

export const useMenu_items = () => {

    const route = useRoute()
    
    const menu_items = {
        '/': 'Home',
        '/zivotopis': 'Zivotopis',
        '/this-project': 'This project',
        '/technologies': 'Technologies',
        '/admin': 'Admin',
    }

    const get_menu_item_name = () => {
        return menu_items[`/${route.name !== 'index' ? route.name : ''}`]
    }

    return {
        menu_items, get_menu_item_name
    }
}