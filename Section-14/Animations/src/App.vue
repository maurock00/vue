<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click=" show = !show"> Show an alert ! </button>
                <br><br>
                <transition name="fade">
                    <div class="alert alert-info" v-if="show"> This is some info </div>
                </transition>
                 <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show"> This is some info </div>
                </transition>
                <transition 
                    appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                >
                    <div class="alert alert-info" v-if="show"> This is some info </div>
                </transition>
                <transition name="slide" type="animation" appear>
                    <div class="alert alert-info" v-if="true"> This is some info </div>
                </transition>
                <h2> With dynamic classes </h2>
                <select v-model="dynamicAnimation" class="form-control"> 
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br><br>
                <transition :name="dynamicAnimation"  appear>
                    <div class="alert alert-info" v-if="show"> This is some info </div>
                </transition>
                <h2> Multiple elements transition </h2>
                <transition :name="dynamicAnimation"  mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info"> This is some info </div>
                    <div class="alert alert-warning" v-else key="warning"> This is some warning </div>
                </transition>
                <hr>
                <h2> JS Animation </h2>
                <button class="btn btn-primary" @click=" load = !load"> Load / Unload element</button>
                <br><br>
                <transition
                    @before-enter = "beforeEnter"
                    @enter = "enter"
                    @after-enter = "afterEnter"
                    @enter-cancelled = "enterCancelled" 

                    @before-leave = "beforeLeave"
                    @leave = "leave" 
                    @after-leave = "afterLeave"
                    @leave-cancelled = "leaveCancelled"
                    :css="false"> 
                    <div style=" width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
                </transition>
                <hr>
                <h2> Animations on transitions between components </h2>
                <button class="btn btn-primary"
                        @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'"> 
                Change Component </button>
                <br><br>
                <transition name="fade" mode="out-in">
                     <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <h2> Animations on lists </h2>
                <button class="btn btn-primary" @click="addItem"> Add element </button>
                <ul class="list-group">
                <transition-group name="slide">
                    <li 
                        class="list-group-item" 
                        v-for="(number, index) in numbers"
                        @click="removeItem(index)"
                        style=" cursors: pointer;"
                        :key="number"> 
                        {{ number }} </li>
                </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';

    export default {
        data() {
            return {
                show: false,
                load: false,
                dynamicAnimation: 'fade', 
                elementWidth: 100, 
                selectedComponent: 'app-success-alert', 
                numbers: [1 ,2 ,3, 4, 5]
            }
        }, 
        methods: { 
            beforeEnter(el) { 
                console.log('Before-enter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            }, 
            enter(el,done) { 
                console.log('Enter');
                let round = 1; 
                const interval = setInterval( () => { 
                    el.style.width = ( this.elementWidth + round * 10 ) + 'px';
                    round++;
                    if (round > 20 ){
                        clearInterval(interval); 
                        done();
                    } 
                }, 20)
            }, 
            afterEnter(el) { 
                console.log('After enter'); 
            }, 
            enterCancelled(el) { 
                console.log('Enter cancelled');
            }, 
             beforeLeave(el) { 
                console.log('Before-leave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            }, 
            leave(el,done) { 
                console.log('Leave');
                let round = 1; 
                const interval = setInterval( () => { 
                    el.style.width = ( this.elementWidth - round * 10 ) + 'px';
                    round++;
                    if (round > 20 ){
                        clearInterval(interval); 
                        done();
                    } 
                }, 20)
            }, 
            afterLeave(el) { 
                console.log('After leave'); 
            }, 
            leaveCancelled(el) { 
                console.log('Leave cancelled');
            }, 
            addItem() { 
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            }, 
            removeItem(index) {
                this.numbers.splice(index, 1);
            }
        },
        components: { 
                appDangerAlert: DangerAlert, 
                appSuccessAlert: SuccessAlert
            }
    }
</script>

<style>

.fade-enter { 
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 1s;
}

.fade-leave { 
    /*opacity: 1; */
}

.fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
}

.slide-enter { 
    /* transform: translateX(-20px); */
    opacity: 0;
}

.slide-enter-active { 
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
}

.slide-leave { 
    
}

.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
}

.slide-move { 
    transition: transform 1s;
}

@keyframes slide-in {
    from { 
        transform: translateX(-20px); 
    }
    to { 
        transform: translateX(0);
    }
}

@keyframes slide-out {
    from { 
        transform: translateX(0px); 
    }
    to { 
        transform: translateX(-20px);
    }
}

</style>
