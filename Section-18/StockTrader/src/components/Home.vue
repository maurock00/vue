<template>
    <div>
         <h1>Trade or view your portfolio</h1>
         <h6>You may Save or Load your data</h6>
         <h6>Click On 'End Day' to begin a new Day !</h6>
         <hr>
         <p> Your founds: {{ funds | currencyFilter }}</p>
    </div>
</template>

<script>
export default {
    computed: { 
        funds() {
             return this.$store.getters.funds; 
        }
    }
}
</script>
