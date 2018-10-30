<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

  </div>
</template>

<script>
  // @ is an alias to /src
  import Orders from '@/components/Orders.vue'

  export default {
    name: 'orders',
    components: {
      Orders
    }
  }
</script>