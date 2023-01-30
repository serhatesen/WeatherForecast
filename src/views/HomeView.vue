<template>
  <div class="home-view">
    <v-container>
      <home-bar/>
      <v-row>
        <v-col>
          <v-card color="#BBDEFB" shaped elevation="5">
            <v-card-title>
              <v-spacer/>
              <v-text-field
                  placeholder="Search for a city"
                  outlined
                  dense
                  rounded
                  height="30px"
                  class="mt-5"
                  v-model="city"
                  v-on:keydown="Location()"
              />
              <v-spacer/>
            </v-card-title>
            <div class="text-center">
              <v-btn
                  color="primary"
                  dark
                  tile
                  rounded
                  outlined
                  elevation="15"
                  class="mb-5"
                  @click="weathers(); dialog= true"
              >
                {{ city }}
              </v-btn>
              <v-dialog
                  v-model="dialog"
                  max-width="500px"
              >
                <v-card color="#BBDEFB" height="500px">
                  <v-card-title class="headline orange--text text-h4">
                    <v-spacer/>
                    <v-card color="#90CAF9" elevation="12">
                      <Icon icon="openmoji:location-indicator-red"/>
                      {{ this.locationStatus.name }} - {{ weatherSys.country }}
                      <Icon icon="openmoji:location-indicator-red"/>
                    </v-card>
                    <v-spacer/>
                  </v-card-title>
                  <v-card-title class="text-center" style="font-size: 50px">
                    <v-spacer/>
                    <Icon v-if="weatherStatus.main==='Rain'" class="mr-5" icon="fluent-emoji:cloud-with-rain"/>
                    <Icon v-if="weatherStatus.main==='Clouds'" class="mr-5" icon="twemoji:cloud"/>
                    <Icon v-if="weatherStatus.main==='Snow'" class="mr-5" icon="twemoji:cloud-with-snow"/>
                    <Icon v-if="weatherStatus.main==='Mist'" class="mr-5" icon="emojione-v1:foggy"/>
                    <Icon v-if="weatherStatus.main==='Clear'" class="mr-5" icon="line-md:sunny-outline-loop"/>
                    {{ weatherStatus.main }}
                    <v-spacer/>
                  </v-card-title>
                  <v-card-title>
                    <v-spacer/>
                    <v-card-text class="text-center" style="font-size: 30px">
                      <v-spacer/>
                      <Icon icon="twemoji:thermometer" class="mr-5"/>
                      {{ (weatherMain.temp - 273.15).toFixed(2) }}°C
                      <v-spacer/>
                    </v-card-text>
                    <v-spacer/>
                  </v-card-title>
                  <v-card-text class="text-center" style="font-size: 30px">
                    <v-spacer/>
                    <Icon icon="twemoji:droplet" class="mr-5"/>
                    {{ weatherMain.humidity }}%
                    <v-spacer/>
                  </v-card-text>
                  <v-spacer/>
                  <v-card-text class="text-center" style="font-size: 30px">
                    <v-spacer/>
                    Min: {{ (weatherMain.temp_min - 273.15).toFixed(2) }}°C
                    <Icon icon="ph:thermometer-hot" class="mr-5"/>
                    <v-spacer/>
                    Max: {{ (weatherMain.temp_max - 273.15).toFixed(2) }}°C
                    <Icon icon="ph:thermometer-hot-bold" class="mr-5"/>
                    <v-spacer/>
                  </v-card-text>
                  <v-spacer/>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="mr-5 mt-12"
                        color="#ffe59a"
                        @click="dialog = false"
                    >
                      <Icon icon="mdi:close-outline"/>
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HomeBar from "@/components/HomeBar.vue";
import axios from "axios";
import {mapGetters} from "vuex";
import {Icon} from "@iconify/vue2";

export default {
  name: "HomeView",
  components: {
    HomeBar,
    Icon
  },
  data: () => ({

    locationUrl: "http://api.openweathermap.org/geo/1.0/direct?",
    weatherUrl: "https://api.openweathermap.org/data/2.5/weather?",
    city: "",
    apiKey: "YOUR_API_KEY",
    locationStatus: {},
    weatherStatus: {},
    weatherMain: {},
    weatherSys: {},
    dialog: false
  }),
  computed: {
    ...mapGetters({
      getLocation: "LocationStatus/getLocation",
      getWeatherStatus: "weatherStatus/getWeatherStatus"
    })
  },
  methods: {
    Location() {
      let location = `${this.locationUrl}q=${this.city}&appid=${this.apiKey}`
      axios.get(location)
          .then((response) => {
            this.locationStatus = response.data[0]
            console.log(this.locationStatus)
          }).catch((error) => {
        console.log(error)
      })
    },
    weathers() {
      let weather = `${this.weatherUrl}lat=${this.locationStatus.lat}&lon=${this.locationStatus.lon}&appid=${this.apiKey}`
      axios.get(weather)
          .then((response) => {
            this.weatherStatus = response.data.weather[0]
            this.weatherMain = response.data.main
            this.weatherSys = response.data.sys
            console.log(this.weatherStatus)
          }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.home-view {
  background-image: url('@/assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
}
</style>