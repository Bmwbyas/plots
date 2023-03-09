<script>
import Map from '@/components/Map.vue';
import { defineComponent } from 'vue'
import * as axios from "axios";
export default defineComponent( {

  components: {
    Map
  },
  mounted() {
  }

})
</script>

<template>
  <div class="app">
    <h1 class="header"> plots</h1>
    <div class="map">
        <Map/>
    </div>

  </div>


</template>

<style scoped>
.header{
 text-align: center;
}
.map {
  height: 500px;
  width: 100%;
}
</style>
