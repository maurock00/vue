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
                <hr>
                <h2> fectching data </h2>
                <input type="text" class="form-control" v-model="node">
                <button class="btn btn-primary" @click="fetchData"> Get Data </button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(u, index) in users" :key="index">
                       {{ u.username }}  ----  {{ u.userEmail }}
                    </li>
                </ul>
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
                }, 
                users: [],
                resource: {}, 
                node: 'user'
            }
        }, 
        methods: { 
            save(){ 
                // this.$http.post('user.json', this.user)
                //         .then(response => { 
                //             console.log(response);
                //         }, error => { 
                //             console.log(error); 
                //         });
                //this.resource.save({}, this.user);
                this.resource.saveAlt(this.user); 
            }, 
            fetchData() { 
                /*this.$http.get('user.json')
                        .then( response => { 
                            return response.json();
                        })
                        .then(data => { 
                            //this.users = data; first method 
                            //Second Method
                            const resultArray = []; 
                            for( let key in data)
                                resultArray.push(data[key]); 
                            this.users = resultArray;
                        });*/
                this.resource.getData({node: this.node} )
                        .then( response => { 
                            return response.json();
                        })
                        .then(data => { 
                            const resultArray = []; 
                            for( let key in data)
                                resultArray.push(data[key]); 
                            this.users = resultArray;
                        });
            }
        }, 
        created() {
            const customActions = { 
                saveAlt: { method: 'POST', url: 'alternative.json' }, 
                getData: { method: 'GET'}
            }; 
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style>
</style>
