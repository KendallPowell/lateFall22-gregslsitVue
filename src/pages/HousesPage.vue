<template>
  <div class="component">
    <h1 class="text-center text-info">Houses</h1>
    <section class="row justify-content-center">
      <div class="col-8 bg-white p-3 elevation-1 rounded">
        <HouseForm />
      </div>
    </section>
    <section class="row">
      <div v-for="h in houses" class="col-md-4">
        <HouseCard :house="h" />
      </div>
    </section>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
export default {
  setup() {
    async function getHouses() {
      try {
        await housesService.getHouses()
      } catch (error) {
        Pop.error(error)
        logger.log(error)
      }
    }
    return {}
  }
};
</script>


<style lang="scss" scoped>

</style>
