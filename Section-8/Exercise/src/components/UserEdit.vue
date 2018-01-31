<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p> User Age: {{ userAge }}</p>
        <button @click="editAge"> Edite Age </button>
    </div>
</template>

<script>
    import { EventBus  } from '../main.js';

    export default { 
        props: { 
            userAge: Number
        },
        methods: { 
            editAge() { 
                this.userAge = 30;
                //this.$emit('ageWasEdited', this.userAge)
                EventBus.$emit('ageWasEdited', 30);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
