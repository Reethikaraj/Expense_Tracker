import Category from '../models/categories_model.js'

// Create category
export const newCategory = async (req, res, next) => {
  const category = await Category.create({
    type: 'Investment',
    color: '#36AE7C',
  })
  await category.save(function (err) {
    if (!err) return res.json(category)
    return res
      .status(400)
      .json({ message: `Error while creating categories ${err}` })
  })
}

// Get all categories
export const allCategories = async (req, res, next) => {
  let data = await Category.find({})
  let filter = data.map((v) =>
    Object.assign({}, { type: v.type, color: v.color })
  )
  return res.json(filter)
}
