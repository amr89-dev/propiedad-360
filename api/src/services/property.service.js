const Property = require("../db/models/property.model");

class PropertyService {
  async getAll() {
    const properties = await Property.findAll();
    return properties;
  }

  async getById(id) {
    const property = await Property.findByPk(id);
    if (!property) throw new Error("Property not found");
    return property;
  }

  async create(data) {
    const newProperty = await Property.create(data);
    return newProperty;
  }

  async update(id, data) {
    const property = await this.getById(id);
    const updatedProperty = await property.update(data);
    return updatedProperty;
  }

  async delete(id) {
    const property = await this.getById(id);
    const deletedProperty = await property.destry();
    return { message: "Property deleted" };
  }
}

module.exports = PropertyService;
