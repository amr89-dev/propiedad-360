const Owner = require("../db/models/owner.model");

class OwnerService {
  constructor() {}

  async getOwner() {
    const owners = await Owner.findAll();
    return owners;
  }

  async getOwnerById(id) {
    const owner = await Owner.findById(id);
    if (!owner) throw new Error("Owner not found");
    return owner;
  }

  async createOwner(owner) {
    const newOwner = await Owner.create(owner, {
      include: ["user"],
    });
    return newOwner;
  }

  async updateOwner(id, changes) {
    const owner = await this.getOwnerById(id);
    const updatedOwner = await owner.update(changes);
    return updatedOwner;
  }

  async deleteOwner(id) {
    const owner = await this.getOwnerById(id);
    const deletedOwner = await owner.destry();
    return { message: "Owner deleted" };
  }
}

module.exports = OwnerService;
