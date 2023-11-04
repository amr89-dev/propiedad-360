const RealEstate = require("../db/models/real_estate.model");

class RealEstateService {
  async getRealEstate() {
    const realEstate = await RealEstate.findAll();
    if (!realEstate) throw new Error("Real Estate not found");
    return realEstate;
  }

  async getRealEstateById(id) {
    const realEstate = await RealEstate.findByPk(id);
    if (!realEstate) throw new Error("Real Estate not found");
    return realEstate;
  }
  async createRealEstate(data) {
    const realEstate = await RealEstate.create(data);
    return realEstate;
  }

  async updateRealEstate(id, changes) {
    const realEstate = await this.getRealEstateById(id);
    if (!realEstate) {
      throw new Error("Real Estate not found");
    }
    const realEstateUpdated = await RealEstate.update(changes);
    return realEstateUpdated;
  }
  async deleteInmobiliaria(id) {
    const realEstate = await this.getRealEstateById(id);
    if (!realEstate) {
      throw new Error("Real Estate not found");
    }
    await realEstate.destroy();
    return { message: "Real Estate deleted" };
  }
}

module.exports = RealEstateService;
