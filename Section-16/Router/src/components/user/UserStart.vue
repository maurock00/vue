<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="router-linkst-group">
            <router-link
                tag="li"
                :to="`user/${users[0]}`"         
                class="list-group-item" style="cursor: pointer">User 1
            </router-link>
            <router-link 
                tag="li"
                :to="'user/' + users[1]"
                class="list-group-item" style="cursor: pointer">User 2
            </router-link>
            <router-link 
                tag="li"
                :to="{ name: 'userDetail', params: { id: users[2] } }"
                class="list-group-item" style="cursor: pointer">User 3
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  data() { 
      return { 
          users: [1,2,3],
      }
  }
}
</script>
