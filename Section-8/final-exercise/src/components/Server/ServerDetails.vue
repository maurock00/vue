<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="serverId == 0">Server Details are currently not updated</p>
        <p v-else> The server Id is : #{{ serverId }} and its status is: {{ serverStatus }} </p> 
        <hr>
    </div>

</template>

<script>

import { eventBus } from '../../main'; 

    export default { 
        data: function () { 
            return { 
                serverId: 0, 
                serverStatus: 'unknown'
            }
        }, 
        created() { 
            eventBus.$on('serverDataSent', (server) => { 
                this.serverId = server.id; 
                this.serverStatus = server.status;
            }); 
        }
    }

</script>

<style>
</style>
