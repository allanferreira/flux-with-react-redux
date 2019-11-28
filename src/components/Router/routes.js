import {
    Home,
    About
} from '../../pages'

export default [
    {
        exact: true,
        path: '/',
        component: Home
    },
    {
        exact: false,
        path: '/about',
        component: About
    }
]
