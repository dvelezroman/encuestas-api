const ping = (req, res) => {
  res.status(200).send('PONG')
}

module.exports = {
  ping
}
