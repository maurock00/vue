<template>
    <div class="row">
        <label>Full Name</label>

            <div class="form-group">
                
                <label for="First Name">First Name</label>
                <input
                        type="text"
                        id="fullName"
                        class="form-control"
                        :value="firstName"
                        @input="firstName = $event.target.value; 
                                changeName(firstName + ' ' + lastName)">        
                <label for="Last Name">Last Name</label>
                    <input
                        type="text"
                        id="fullName"
                        class="form-control"
                        :value="lastName"
                        @input="lastName = $event.target.value; 
                                changeName(firstName + ' ' + lastName)"> 
                       
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return { 
            firstName: '', 
            lastName: '', 
        };
    }, 
    props: ['value'], 
    methods: { 
        changeName(name) { 
            this.$emit('input', name)
        }
    }
   
}
</script>

<style>

</style>
