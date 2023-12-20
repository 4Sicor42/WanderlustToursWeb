const { User } = require('../models/models');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, role) => {
  return jwt.sign(
      {id, email, role},
      process.env.SECRET_KEY,
      {expiresIn: '24h'}
  )
}



class userController {
  async registration(req, res, next) {
    const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        //const history = await UserHistory.create({userId: user.id}),name,phone,
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
      const {email, password} = req.body
      const user = await User.findOne({where: {email}})
      if (!user) {
          return next(ApiError.internal('Пользователь не найден'))
      }
      let comparePassword = bcrypt.compareSync(password, user.password)
      if (!comparePassword) {
          return next(ApiError.internal('Указан неверный пароль'))
      }
      const token = generateJwt(user.id, user.email, user.role)
      return res.json({token})
  }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return ApiError.badRequest('User not found!');
      }
      return res.json(user);
    } catch (error) {
      console.error(error);
      return ApiError.internal(error.message);
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedUser = await User.update(updateData, { where: { id } });
      if (!updatedUser) {
        return ApiError.badRequest('User not found!');
      }
      return res.json({ message: 'User updated successfully!' });
    } catch (error) {
      console.error(error);
      return ApiError.internal(error.message);
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deletedUser = await User.destroy({ where: { id } });
      if (!deletedUser) {
        return ApiError.badRequest('User not found!');
      }
      return res.json({ message: 'User deleted successfully!' });
    } catch (error) {
      console.error(error);
      return ApiError.internal(error.message);
    }
  }
}

module.exports = new userController();
