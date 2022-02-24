import ApiServices from "./ApiServices";

class ModelServices extends ApiServices {
  constructor() {
    super("https://api.baasic.com/v1/vehicles-031/resources/VehicleMake");
  }
}

export default ModelServices;
