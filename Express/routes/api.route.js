const router = require('express').Router();

router.get('/', async (req, res, next) => {
  res.send({ message: 'hey! 🚀' });
});

module.exports = router;
