<template>
  <div class="twitch-oauth">
    <h1>iframe em baixo</h1>
    
  </iframe>

  </div>

</template>

<script>
import axios from "axios";
export default {
  name: 'TwitchOAuth',
  data() {
    return {
      scopes: [
        "viewing_activity_read",
        "channel:read:redemptions"
      ],
      redirect: "http://localhost:8000/oauth/redirect",
      endpoint: "https://id.twitch.tv/oauth2/authorize?response_type=token"
    };
  },
   beforeMount() {
    console.log(process.env.VUE_APP_TWITCH_CLIENT_ID);
    this.loading = true;
    this.url = this.endpoint + "&client_id=" + process.env.VUE_APP_TWITCH_CLIENT_ID + "&redirect_uri=" + this.redirect 
    + "&scope=" + this.scopes.join(" ");

    console.log(this.$electron.ipcRenderer);

    this.loading = false;
  },
  methods: {

  }
}
</script>
<style scoped lang="scss">
</style>
