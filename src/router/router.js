import Vue from 'vue'
import VueRouter from 'vue-router'
import Books from '../components/Books'
import Cart from '../components/Cart'

Vue.use(VueRouter);

const routes = [{
        path: '/',
        component: Books
    },
    {
        path: '/Cart',
        component: Cart
    },
];

export const router = new VueRouter({
    routes
});