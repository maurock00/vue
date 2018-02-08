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

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                dynamicAnimation: 'fade'
            }
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
