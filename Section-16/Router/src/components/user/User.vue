<template>
    <div> 
        <h1>The User Page</h1>
        <hr>
        <button class="btn btn-primary" @click="backToHome"> Back Home </button> 
        <br><br>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  methods: {
      backToHome() { 
          this.$router.push('/');
      }
  }
}
</script>
