<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li 
                    @click="sendServerData(server)"
                    class="list-group-item"
                    v-for="server in servers">
                Server #{{ server.id }}
            </li>
        </ul>
    </div>
</template>

<script>

import { eventBus } from '../../main'; 

export default { 
    data: function() { 
        return { 
            servers: [
                { id: 1, status: 'Normal'},
                { id: 2, status: 'Critical'},
                { id: 3, status: 'Unknown'},
                { id: 4, status: 'Normal'},
                { id: 5, status: 'Normal'}
            ],
        }
    }, 
    methods: {
        sendServerData(server) { 
            eventBus.sendServerData(server); 
            //alert('Id: ' + server.id + 'Status: ' + server.status)
        }
    }
}

</script>

<style scoped>

li:hover { 
    background-color: darksalmon; 
    cursor: pointer;
}

</style>
