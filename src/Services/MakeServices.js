import ApiServices from "./ApiServices";

class MakeServices extends ApiServices {
  constructor() {
    super(`https://api.baasic.com/v1/vehicles-031/resources/VehicleMake`);
  }
}

export default MakeServices;
