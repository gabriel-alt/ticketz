<template>

  <v-app id="fondo">
    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-app>


</template>

<script>
import { RouterView } from 'vue-router';

export default {
  components: {
    RouterView
},
}


</script>


<style>
#fondo {
  /* background: url('../public/fondo.jpg'); */
  width: auto;
  height: auto;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>

