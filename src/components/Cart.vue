<template>
  <div>
    <div>
      <table class="table table-bordered table-hover" style="cursor:pointer;">
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Image</th>
          <th></th>
        </thead>

        <tbody>
          <tr v-for="(item, index) in cartItems" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>${{item.price}}</td>
            <td>
              <input type="number" :value="item.quantity" @change="updateQuantity(item.id)" />
            </td>
            <td>
              <img :src="item.image" style="height:100px; width:100px;" alt />
            </td>
            <td>
              <i class="btn btn-danger fa fa-trash" @click="remove(index)"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    }
  },
  methods: {
    updateQuantity(id) {
      this.$store.commit("updateQuantity", id);
    },
    remove(index) {
      this.$store.commit("remove", index);
    }
  }
};
</script>