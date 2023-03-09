<script  >
import { MapboxMap } from "vue-mapbox-ts";
import { defineComponent,ref,onMounted } from 'vue'
import axios, * as others from 'axios';
export default defineComponent ({

  components: {
    MapboxMap
  },

  data() {
    return {
      accessToken: 'pk.eyJ1IjoiYWxleC1hc2tlciIsImEiOiJjbGN0ZWlkOHUwY3QwM29xdHJ3OWM0OXYxIn0._5fbv3Co5WkAX8iWsReSeQ', // your access token. Needed if you using Mapbox maps
    };
  },
  setup(){
    const polygons = ref([])


    const addPolygon = async (poly) => {

      polygons.value.push(poly.features[0].geometry.coordinates[0])

      const data=JSON.stringify(poly.features[0].geometry.coordinates[0])

      const res= await axios.post('http://localhost:1337/api/plots',{
        data:{plot: data}
      });
    }

    const fetching = async () => {

      try {
        const response = await axios.get('http://localhost:1337/api/plots',);
         const data=response.data.data.map(d=>JSON.parse(d.attributes.plot))
        polygons.value=data

      } catch (e) {
        alert(e.message)
      }
    }
    onMounted(fetching)
    return {
      polygons,
      addPolygon,
      fetching,
    }
  },
});
</script>

<template>
  <mapbox-map :accessToken="accessToken">
    <mapbox-navigation-control position="bottom-left" />
    <mapbox-draw-control @create="addPolygon"  />
    <mapbox-geogeometry-polygon v-for="path in polygons" :path="path"/>
  </mapbox-map>
</template>



<style scoped>

</style>
