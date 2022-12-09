import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class HousesService {
  async getHouses() {
    const res = await api.get('api/houses')
    logger.log('got houses', res.data)
    AppState.houses = res.data
  }

  async getHouseById() {

  }

  async createHouse() {

  }

  async removeHouse() {

  }
}

export const housesService = new HousesService()