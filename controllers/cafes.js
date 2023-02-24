const { Cafe } = require("../models")

const create = async (req, res) => {
  try {
    const cafe = await Cafe.create(req.body)
    res.status(200).json(cafe)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const cafes = await Cafe.findAll()
    res.status(200).json(cafes)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const cafe = await Cafe.update(
      req.body,
      { where: { id: req.params.id }, returning: true }
    )
    res.status(200).json(cafe)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteCafe = async (req, res) => {
  try {
    const cafe = await Cafe.findByPk(req.params.id)
    await cafe.destroy()
    res.status(200).json(cafe) 
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteCafe
}