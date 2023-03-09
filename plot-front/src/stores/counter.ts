import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('polygons', () => {
  const polygons = ref([])


  return { polygons, }
})
