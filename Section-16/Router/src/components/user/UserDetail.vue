<template>
    <div> 
        <h3>Some User Details</h3>
        <p> User loaded with ID: {{ $route.params.id }}</p>
        <router-link 
            tag="button"
            class="btn btn-primary"
            :to="{ name: 'editUser', params: { id: $route.params.id }, query: { locale: 'en', q: 100} }">
        Edit User
        </router-link>
    </div>
   
</template>

<script>
//Link could be on this way, but er are using name property of routes
// :to="'/user/' + $route.params.id + '/edit' ">
</script>
