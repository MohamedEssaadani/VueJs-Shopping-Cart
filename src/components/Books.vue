<template>
  <div>
    <div class="alert alert-success" :style="displayAlert">
      <span>Added to cart.</span>
      <router-link :to="{name:'cart'}">View Cart</router-link>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="book in books" v-bind:key="book.id">
        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
          <div class="card-header">{{book.name}}</div>
          <div class="card-body">
            <img :src="book.image" style="height:220px; width:220px;" alt />
            <div style="margin-top:20px;">
              <span class="card-text" style="float:left;">Price: ${{book.price}}</span>
              <button
                class="btn btn-danger"
                @click="addToCart(book)"
                style="float:right;"
              >Add to card</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "books",
  computed: {
    books() {
      return this.$store.getters.books;
    }
  },
  methods: {
    addToCart(book) {
      this.$store.commit("addToCart", book);
      this.displayAlert = "display:block";
    }
  },
  data() {
    return {
      displayAlert: "display:none"
    };
  }
};
</script>