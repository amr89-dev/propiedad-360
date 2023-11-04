const RealEstate = require("../db/models/real_estate.model");

class RealEstateService {
  async getRealEstate() {
    const realEstate = await RealEstate.findAll();
    return realEstate;
  }

  async getRealEstateById(id) {
    const realEstate = await RealEstate.findByPk(id);
    if (!realEstate) throw new Error("Real Estate not found");
    return realEstate;
  }
  async createRealEstate(data) {
    const realEstate = await RealEstate.create(data, {
      include: ["user"],
    });
    delete realEstate.dataValues.user.dataValues.password;
    return realEstate;
  }

  async updateRealEstate(id, changes) {
    const realEstate = await this.getRealEstateById(id);
    const realEstateUpdated = await realEstate.update(changes);
    return realEstateUpdated;
  }
  async deleteRealEstate(id) {
    const realEstate = await this.getRealEstateById(id);
    await realEstate.destroy();
    return { message: "Real Estate deleted" };
  }
}

module.exports = RealEstateService;
