<template>
  <form @submit.prevent="createHouse()" class="row justify-content-evenly">
    <div class="mb-2 col-3">
      <label for="" class="form-label">Rooms</label>
      <input type="number" class="form-control" name="" id="">
    </div>
    <div class="mb-2 col-3">
      <label for="" class="form-label">Bathrooms</label>
      <input type="number" class="form-control" name="" id="">
    </div>
    <div class="mb-2 col-3">
      <label for="" class="form-label">SquareFeet</label>
      <input type="number" class="form-control" name="" id="">
    </div>
    <div class="mb-2 col-3">
      <label for="" class="form-label">Price</label>
      <input type="number" class="form-control" name="" id="">
    </div>
    <div class="mb-3 col-12">
      <label for="" class="form-label">ImgUrl</label>
      <input type="url" class="form-control" name="" id="">
    </div>
    <div class="mb-2 col-12">
      <label for="">Description</label>
      <textarea name="" id="" class="form-control" rows="3"></textarea>
    </div>
    <div class="col-3">
      <button class="btn btn-primary w-100 rounded-pill">Create</button>
    </div>

  </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { housesService } from '../services/HousesService.js';
export default {
  setup() {
    async function createHouse() {
      try {
        await housesService.createHouse()
        Pop.toast('created House!', 'success')
      } catch (error) {
        Pop.error(error)
        logger.log(error)
      }
    }
    return {
      createHouse
    }
  }
};
</script>


<style lang="scss" scoped>

</style>