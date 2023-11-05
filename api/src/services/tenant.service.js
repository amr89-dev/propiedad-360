const Tenant = require("../db/models/tenant.model");
const RealEstate = require("../db/models/real_estate.model");
const bcrypt = require("bcrypt");

class TenantService {
  async getTenant() {
    return await Tenant.findAll();
  }
  async createTenant(data) {
    const hash = await bcrypt.hash(data.user.password, 10);
    const newData = {
      ...data,
      user: {
        ...data.user,
        profile: "tenant",
        password: hash,
      },
    };
    const tenant = await Tenant.create(newData, {
      include: ["user"],
    });
    const { real_estates } = data;
    if (real_estates) {
      real_estates.forEach(async (real_estate) => {
        const realEstate = await RealEstate.findByPk(real_estate);
        await realEstate.addTenant(tenant);
      });
    }
    delete tenant.dataValues.user.dataValues.password;
    return tenant;
  }

  async getTenantById(id) {
    const tenant = await Tenant.findByPk(id, {
      include: ["user", "real_estates"],
    });
    if (!tenant) throw new Error("Tenant not found");
    return tenant;
  }
  async updateTenant(id, data) {
    console.log("id -->", id, "data -->", data);
    const tenant = await this.getTenantById(id);
    const updatedTenant = await tenant.update(data);
    return updatedTenant;
  }

  async deleteTenant(id) {
    const tenant = await this.getTenantById(id);
    await tenant.destroy();
    return { message: "Tenant deleted" };
  }
}

module.exports = TenantService;
