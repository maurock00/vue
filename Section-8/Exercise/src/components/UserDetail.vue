<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username: {{ switchName() }} </p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName"> Reset Name </button>
        <button @click="resetFn()"> Reset Name </button>
    </div>
</template>

<script>
    import { EventBus } from '../main.js';

    export default { 
        props: {
            name: { 
                type: String, 
                default: 'Max'
            }, 
            resetFn: { 
                type: Function
            },
            userAge: Number
        }, 
        methods: { 
            switchName() { 
                return this.name.split("").reverse().join("");
            },
            resetName() { 
                this.name = 'Maurock00';
                this.$emit('nameWasReset', this.name);

                EventBus.$on('ageWasEdited', function (age) { 
                   this.age = age;
                });
            },
            created() { 
               
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
