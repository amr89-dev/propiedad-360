const Owner = require("../db/models/owner.model");
const RealEstate = require("../db/models/real_estate.model");

class OwnerService {
  constructor() {}

  async getOwner() {
    const owners = await Owner.findAll();
    return owners;
  }

  async getOwnerById(id) {
    const owner = await Owner.findByPk(id);
    if (!owner) throw new Error("Owner not found");
    return owner;
  }

  async createOwner(data) {
    const newOwner = await Owner.create(data, {
      include: ["user"],
    });
    const { real_estates } = data;
    if (real_estates) {
      real_estates.forEach(async (real_estate) => {
        const realEstate = await RealEstate.findByPk(real_estate);
        await realEstate.addOwner(newOwner);
      });
    }
    return newOwner;
  }

  async updateOwner(id, data) {
    const owner = await this.getOwnerById(id);
    const { real_estates } = data;
    if (real_estates) {
      real_estates.forEach(async (real_estate) => {
        const realEstate = await RealEstate.findByPk(real_estate);
        await realEstate.addOwner(owner);
      });
    }
    const updatedOwner = await owner.update(data);
    return updatedOwner;
  }

  async deleteOwner(id) {
    const owner = await this.getOwnerById(id);
    const deletedOwner = await owner.destry();
    return { message: "Owner deleted" };
  }
}

module.exports = OwnerService;
