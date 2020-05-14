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
        books: (state) => state.books,
        cartItems: (state) => state.cart,
    },
    mutations: {
        addToCart(state, book) {
            let item = undefined;
            //check if the item already in cart by trying to get it from cart
            item = state.cart.find(b => b.id === book.id);
            //if item doesnt exist then create new one in the cart
            if (item == undefined) {
                book.quantity = 1;
                state.cart.push(book);

            } else {
                //if item already exist then update quantity
                item.quantity += 1;
                state.cart.splice(state.cart.indexOf(book), 1, item);
            }

        },
        updateQuantity(state, id) {
            //Find index of book 
            let bookIndex = state.cart.findIndex((book => book.id == id));

            //Update object's name property.
            state.cart[bookIndex].quantity += 1;

        }
    }
})