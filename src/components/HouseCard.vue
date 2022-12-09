<template>
  <div class="card">
    <img class="img-fluid" :src="house.imgUrl" alt="">
    <h5>{{ house.rooms }} | {{ house.bathrooms }} | {{ house.squareFeet }}</h5>
    <h1>${{ house.price }}</h1>
    <div class="text-start p-2">{{ house.description }}</div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>

</style>