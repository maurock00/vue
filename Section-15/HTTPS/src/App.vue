<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="user.username"> 
                </div>
                <div class="form-group" >
                    <label>User Email</label>
                    <input type="text" class="form-control" v-model="user.userEmail">
                </div>
                <button class="btn btn-primary" @click="save"> Save ! </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return { 
                user: { 
                    username: '', 
                    userEmail: ''
                }
            }
        }, 
        methods: { 
            save(){ 
                this.$http.post('https://vuejs-http-e0872.firebaseio.com/user.json', this.user)
                        .then(response => { 
                            console.log(response);
                        }, error => { 
                            console.log(error); 
                        });
            }
        }
    }
</script>

<style>
</style>
