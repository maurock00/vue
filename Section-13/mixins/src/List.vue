<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits"> {{ fruit  }} </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() { 
            return { 
                textData: 'This is the law',
                fruits: ['Apple', 'Banana', 'Mango', 'Lemon'],
                filterText: ''
            }
        }, 
        computed: { 
            filteredFruits() { 
                return this.fruits.filter( (element) => { 
                    return element.match(this.filterText)
                });
            }
        }
    }
</script>

<style>

</style>
