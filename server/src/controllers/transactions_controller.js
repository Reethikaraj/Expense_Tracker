import Transaction from '../models/transactions_model.js'
import Category from '../models/categories_model.js'

// transaction category
export const newTransaction = async (req, res, next) => {
  if (!req.body) return res.status(400).json('Please enter data')
  let { name, type, amount } = req.body
  const transaction = await Transaction.create({
    name,
    type,
    amount,
    date: new Date(),
  })
  transaction.save(function (err) {
    if (!err) return res.json(transaction)
    return res
      .status(400)
      .json({ message: `Error while creating transaction ${err}` })
  })
}

export const getAllTransactions = async (req, res, next) => {
  if (!req.body) return res.status(400).json('Please enter data')
  let data = await Transaction.find({})
  return res.json(data)
}

export const deleteTransaction = async (req, res, next) => {
  if (!req.body) res.status(400).json({ message: 'Please enter data' })
  await Transaction.deleteOne(req.body, function (err) {
    if (!err) res.json('Transaction Deleted successfully!')
  })
    .clone()
    .catch(function (err) {
      res.json('Error while deleting Transaction Record')
    })
}

export const getLabels = async (req, res, next) => {
  Transaction.aggregate([
    {
      $lookup: {
        from: Category.collection.name,
        localField: 'type',
        foreignField: 'type',
        as: 'Category_info',
      },
    },
    {
      $unwind: '$Category_info',
    },
  ])
    .then((result) => {
      let data = result.map((v) =>
        Object.assign(
          {},
          {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.Category_info['color'],
          }
        )
      )
      res.json(data)
    })
    .catch((error) => {
      res.status(400).json('Lookup Collection Error')
    })
}
