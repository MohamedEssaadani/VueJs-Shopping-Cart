import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        books: [{
                id: 1,
                name: "Full Stack VueJs & Laravel",
                price: 99,
                image: "/images/books/VueJsLaravel.png"
            },
            {
                id: 2,
                name: "Java For Beginners",
                price: 79,
                image: "/images/books/Java.png"
            },
            {
                id: 3,
                name: "Learn C# In 2 Years",
                price: 56,
                image: "/images/books/csharp.jpg"
            }
        ],
        cart: []
    },
    getters: {
        books: (state) => state.books
    },
    mutations: {
        addToCart(state, book) {
            book.quantity = 1;
            state.cart.push(book);
        }
    }
})