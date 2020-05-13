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
          <tr>
            <td>1</td>
            <td>Laravel</td>
            <td>$22.34</td>
            <td>2</td>
            <td>
              <img src="/images/books/csharp.jpg" style="height:100px; width:100px;" alt />
            </td>
            <td>
              <button class="btn btn-danger">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart"
};
</script>