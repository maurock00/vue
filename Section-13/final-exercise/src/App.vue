<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h2>Filters</h2>
                <label>Add some text</label>
                <input type="text" v-model="filterText"><br><br>
                <label>Filtered text (reverse): </label>
                <p> {{ filterText | reverseTextFilter }} </p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <label>Filtered text (count): </label>
                <p> {{ filterText | count-characters }} </p>
                <hr>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h2>Computed</h2>
                <label>Add some text</label>
                <input type="text" v-model="computedText"><br><br>
                <label>Computed text (reverse): </label>
                <p> {{ reverseTextComputed }} </p>
                <label>Computed text (count): </label>
                <p> {{ countCharactersComputed }} </p>
                <hr>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <h2>Mixin</h2>
                <label>Add some text</label>
                <input type="text" v-model="mixinText"><br><br>
                <label>Mixin text (count): </label>
                <p> {{ countCharactersMixin }} </p>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    import { countCharsMixin } from './countCharsMixin.js';

    export default {
        data () { 
            return { 
                filterText: '',
                computedText: ''
            }
        }, 
        filters: { 
            reverseTextFilter(value) {
                return value.split("").reverse().join("");
            }
        },
        computed: { 
            reverseTextComputed() { 
                return this.computedText.split("").reverse().join("");
            },
            countCharactersComputed() { 
                return (this.computedText + ' (' + this.computedText.split('').length + ')');
            }
        }, 
        mixins: [countCharsMixin]
    }
</script>

<style>
</style>
