<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName"> Change Name </button>
        <p> {{ name }} </p>
        <p> {{ age }} </p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name"
                                 :resetFn="resetFn" 
                                 @nameWasReset="name = $event"
                                 :userAge="age">
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age"
                               @ageWasEdited="age = $event">
                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function (){ 
            return { 
                name: 'Maurock00', 
                age: 27
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: { 
            changeName: function () { 
                this.name = 'Nombre Cambiado';
            }, 
            resetFn: function() { 
                this.name = 'Maurock00';
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
