<template>
    <div class="container"> 
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"><app-header></app-header></div>
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <app-full-name v-model="userData.fullName"></app-full-name>

                    <div class="form-group">
                        <label for="Email">Email</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="userData.password">
                    </div>
                    
                    <div class="form-group">
                         <label>Store Data in DB ?</label>
                         <div class="row">
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                                <label for="Yes">
                                    <input
                                            type="radio"
                                            id="yes"
                                            value="yes" 
                                            v-model="storeData"> Yes
                                </label>
                                <label for="No">
                                    <input
                                            type="radio"
                                            id="no"
                                            value="no"
                                            v-model="storeData"> No
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <button
                                class="btn btn-primary"
                                @click.prevent="submit">Submit!
                            </button>
                        </div>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }} </p>
                        <p>Mail: {{ userData.email }} </p>
                        <p>Password: {{ userData.password }} </p>
                        <p>Store in Database?: {{ storeData }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Header from './Header.vue';
    import FullName from './FullName.vue';

    export default {
        data() { 
            return { 
                userData: {
                    fullName: '',
                    email: '',
                    password: ''
                }, 
                storeData: 'no',
                isSubmitted: false
            }
        }, 
        components: { 
            appHeader: Header,
            appFullName: FullName
        }, 
        methods: { 
            submit() { 
                this.isSubmitted = true; 
            }
        }
    }
</script>

<style>
</style>
