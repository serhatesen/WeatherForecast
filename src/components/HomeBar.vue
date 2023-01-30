<template>
  <div class="home-bar">
  <v-app-bar app height="90%" elevation="12" color="blue lighten-2">
    <v-spacer/>
    <Icon class="blue lighten-2" icon="simple-icons:rainmeter" />
    <v-spacer/>
    <v-toolbar-title style="font-family: Zapfino;font-size: 25px"
    >
      <Icon style="font-size: 50px" icon="fluent-emoji:sun-behind-rain-cloud" />
      Weather
      <span style="font-family: 'Wawati SC'; font-size: 30px"
      >
          World</span>
    </v-toolbar-title>
    <v-spacer/>
    <Icon class="blue lighten-2" icon="simple-icons:rainmeter" />
    <v-spacer/>
  </v-app-bar>
  </div>
</template>

<script>
import {Icon} from '@iconify/vue2';

export default {
  name: "HomeBar",
  components: {
    Icon
  }
}
</script>

<style scoped>
</style>