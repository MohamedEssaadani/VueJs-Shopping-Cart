import Vue from 'vue'
import VueRouter from 'vue-router'
import Books from '../components/Books'
import Cart from '../components/Cart'

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Books',
        component: Books
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});