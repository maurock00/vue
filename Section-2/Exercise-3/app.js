new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result: function(){
                return this.value == 37 ? 'done' : 'no there yet'; 
            }   
        },
        watch: {
            value: function(value){
                vm = this; 
                if (vm.value == 37){
                    setTimeout(function(){
                        vm.value = 0;
                    },5000)
                }   
            }
        }
    });