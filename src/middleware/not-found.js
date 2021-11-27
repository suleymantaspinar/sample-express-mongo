const notFound = (req, res) => {
  res.status(404).json({
    code: 400,
    msg: "Page is not found!"
  })
}
module.exports = {notFound}