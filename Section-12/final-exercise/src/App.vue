<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <!-- <button @click="alertMe"> Click me !</button> -->
                <button v-app-on:click="alertMe"> Click me !</button>
                <hr>
                <div style=" width:100px; height:100px; backgroundColor: red; "
                     v-app-on:mouseenter="mouseEnter"
                     v-app-on:mouseleave="mouseLeft"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: { 
            appOn: { 
                bind (el, binding ) { 
                        // el.onclick = function() { 
                        //     binding.value();
                        // };
                        var type = binding.arg; 
                        var fn = binding.value; 

                        el.addEventListener(type, fn);
                }
            }
        },
        methods: { 
            alertMe() { 
                alert('You pushed me'); 
            }, 
            mouseEnter() { 
                console.log('Mouse enter');
            },
            mouseLeft() { 
                console.log('Mouse left');
            }
        }
    }
</script>

<style>
</style>
