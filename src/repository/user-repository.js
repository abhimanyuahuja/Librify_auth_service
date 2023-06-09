const { User } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("something wrong in repository layer");
      throw { error };
    }
  }

  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("something wrong in repository layer");
      throw { error };
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      console.log("something wrong in repository layer");
      throw { error };
    }
  }
  async getByEmail(email) {
    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      console.log("something wrong in repository layer");
      throw { error };
    }
  }

  async getByUsername(username) {
    try {
      const user = await User.findOne({
        where: {
          username,
        },
      });
      return user;
    } catch (error) {
      console.log("something wrong in repository layer");
      throw { error };
    }
  }
}

module.exports = UserRepository;
