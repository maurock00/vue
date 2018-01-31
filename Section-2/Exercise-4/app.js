new Vue({
  el: '#exercise',
  data: {
    attachedShrink: true,
    attachedhighlight: false,
    userClass: '', 
    userClass2: '', 
    attachedUserClass3: false,
    fSize: '', 
    stbWidth: 0
  },
  methods: {
    startEffect: function() {
      vm = this; 
      setInterval(function(){

        vm.attachedhighlight = !vm.attachedhighlight; 
        vm.attachedShrink = !vm.attachedShrink;

        
      },1000)

      /*if(this.attachedhighlight == true) {
          this.attachedhighlight = false; 
          this.attachedShrink = true;
        }
      else if(this.attachedShrink == true) {
        this.attachedShrink = false;
        this.attachedhighlight = true; 
      }*/
      
    }, 
    startProgress: function(){ 
      vm = this;
      counter = 0; 
      setInterval(function(){
        vm.stbWidth = vm.stbWidth+5;
        counter++;
        if (vm.stbWidth == 110){
          vm.stbWidth = 0;
          counter = 0;
        }         
      },100)
    }
  },
  computed: {
    shrinkClass: function(){
        return {
            'shrink': this.attachedShrink
        }
    },
    highlightClass: function(){
        return {
            'highlight': this.attachedhighlight
        }
    }, 
    youHaveAClass: function(){ 
      return { 'youHaveAClass': true }
    },
    youHaveAnotherClass: function(){ 
      return { 'youHaveAnotherClass': true }
    }, 
    userClass3: function(){
      return {
          'userClass3': this.attachedUserClass3
      }
    },
    userStyle: function(){
        return { 
          fontSize: this.fSize + 'px'
        }
    },
    progressBarStyle: function(){
      return { 
        width: this.stbWidth + 'px'
      }
  }
  }
});
