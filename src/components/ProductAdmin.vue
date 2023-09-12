<template>
    <div class="product-list">
     <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <p>{{ message }}</p>
    <!-- <h2 class="display-4">Quản lý Admin</h2> -->
    <p> <router-link to="/products/create">Add new</router-link></p>

    
  </div>

  
</div>
</template>
<script>
export default {
  name:'ProductAdmin',

  props: {
    message: String
  }
//   data() {
//       return {
          
//           products:[]
//       }
//   },
//   created(){
//     console.log('OK');
//     this.getAll()
//   },
//   // chạy đầu tiên trong toàn bộ compo lừn
//   // mỗi lần created tạo ra 1 method
//   methods: {
//     getAll() {
//     this.$request.get('http://localhost:8000/api/products').then(res=>{
//       console.log(res.data)
//       this.products=res.data
//     })
//     },
//     onDelete(id){
//       this.$request.delete(`http://localhost:8000/api/products/${id}`).then(res=>{
//       console.log(res.data)
//       this.getAll()
//     })
//     }
//   },
}
  </script> 

  