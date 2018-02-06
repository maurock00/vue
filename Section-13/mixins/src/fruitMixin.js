export const fruitMixin = { 
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