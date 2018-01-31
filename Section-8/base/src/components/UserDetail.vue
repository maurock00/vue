<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p> The name is: --- {{ userName }} ---</p>
        <button @click="resetName"> Reset Name </button>
        <hr>
        <p> Age: {{ userAge }} </p>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default { 
        props: { 
            userName: { 
                type: String
            },
            userAge: { 
                type: Number
            }
        }, 
        methods: { 
            resetName() { 
                this.userName = 'Maurock00'; 
                this.$emit('nameWasReset', this.userName); 
            },
        },   
        created() { 
                eventBus.$on('ageWasChanged', (age) => { 
                    this.userAge = age;
                })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
