<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p> My name is: {{ name }} </p>
        <button @click="changeName" >Change name</button>
        <hr>
        <p> Age: {{ age }} </p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :userName="name" 
                    :userAge="age"
                    @nameWasReset="name = $event">
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :userName="name" 
                    :userAge="age">
                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function () { 
            return {
                name: 'Maurock00', 
                age: 24 
            }
        }, 
        methods: { 
            changeName() { 
                this.name = 'MANUEL'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
