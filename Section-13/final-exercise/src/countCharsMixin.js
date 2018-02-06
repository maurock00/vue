export const countCharsMixin = { 
    data() { 
        return { 
            mixinText: ''
        }
    }, 
    computed: {
        countCharactersMixin() { 
            return (this.mixinText + ' (' + this.mixinText.split('').length + ')');
        }
    }
    
}