const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const Profile = require("../db/models/profile.model");

class ProfileService {
  async createProfile(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newProfile = {
      ...data,
      password: hash,
    };
    await Profile.create(newProfile, {
      include: ["user"],
    });
    return newProfile;
  }
  async getProfile() {
    const profile = await Profile.find();
    return profile;
  }
  async getProfileById(id) {
    const profile = await Profile.findByPk(id);
    if (!profile) {
      throw boom.notFound("Profile not found");
    }
    return profile;
  }
  async updateProfile(id, changes) {
    const profile = await this.getProfileById(id);
    const rta = await profile.update(changes);
    return rta;
  }
  async deleteProfile(id) {
    const profile = await this.getProfileById(id);
    await profile.destroy();
    return { rta: true };
  }
}

module.exports = ProfileService;
