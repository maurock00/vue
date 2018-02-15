<template>
    <div> 
        <h3>Some User Details</h3>
        <p> User loaded with ID: {{ $route.params.id }}</p>
        <router-link 
            tag="button"
            class="btn btn-primary"
            :to="link">
        Edit User
        </router-link>
    </div>
   
</template>

<script>
//Link could be on this way, but er are using name property of routes
// :to="'/user/' + $route.params.id + '/edit' ">
export default { 
    data() { 
        return { 
            link: { 
                name: 'editUser', 
                params: { id: this.$route.params.id }, 
                query: { locale: 'en', q: 100 }, 
                hash: '#data'
            }
        }
    }, 
    beforeRouteEnter(to, from, next){ 
        if(true) {
            next(); 
        }
        else { 
            alert('Non autohorized user');
            next(false); 
        }
    }
}
</script>
