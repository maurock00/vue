<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p> {{ textData | toUppercase }} </p>
                <p> {{ textData | to-lowercase }} </p>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits"> {{ fruit  }} </li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';

    export default {
        data() { 
            return { 
                textData: 'This is the law',
                fruits: ['Apple', 'Banana', 'Mango', 'Lemon'],
                filterText: ''
            }
        }, 
        filters: { 
            toUppercase(value) { 
                return value.toUpperCase();
            }
        }, 
        computed: { 
            filteredFruits() { 
                return this.fruits.filter( (element) => { 
                    return element.match(this.filterText)
                });
            }
        }, 
        components: { 
            appList: List
        }
    }
</script>

<style>

</style>
