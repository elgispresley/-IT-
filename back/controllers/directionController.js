const {Direction } = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')


class DirectionController {
  async create(req, res, next) {
    try {
      const {title, description, form_of_studies, price, userId} = req.body
      const {img} = req.files
      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const data = await Direction.create({title, description, form_of_studies, price, userId, img: fileName})
      return res.json(data)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
  async getAll(req, res) {
    const data = await Direction.findAndCountAll()
    return res.json(data)
  }

  async getOne(req, res) {
    const {id} = req.params
    const data = await Direction.findOne(
      {
        where:{id}
      }
    )
    return res.json(data)
  }
  async deleteOne(req, res, next) {
    try {
      const { id } = req.params;
      const deleted = await Direction.destroy({ where: { id } });
      if (deleted) {
        return res.json({ message: "Deleted successfully" });
      }
      throw new Error("Direction not found");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new DirectionController()
