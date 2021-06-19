<template>
  <div class="home">
    <h1>HOME</h1>
    
    <li v-for="(i, index) in getUsers" :key="index">
      {{index + 1}} : {{i.name}}
    </li>
    
    <button class="mt-5" @click.prevent="fetchUsers()">Fetch Users</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { mapGetters, useStore, mapActions } from 'vuex'

export default defineComponent({
  // name: 'Home',
  setup() {
    const store = useStore()
    // const user = computed(() => store.state.user)

    // console.log('>> user > ', user.value.name);
    // return {
    //   name: user.value.name,
    // }
    // function setName(name: any) {
    //   return store.dispatch('user/saveName', name)
    // }

    // return {
    //   setName,
    // }
  },
  computed: {
    ...mapGetters('user', ['getUsers']),
  },
  methods: {
    ...mapActions({
      fetchUsers: 'user/getUsers'
    })
  }
})
</script>
