<template>
  <div class="login">
    <TwitchOAuth/>
  </div>
</template>

<script>
// @ is an alias to /src
import TwitchOAuth from '@/components/TwitchOAuth.vue'

export default {
  name: 'Login',
  components: {
    TwitchOAuth
  },


}
</script>
