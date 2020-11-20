const { Router } = require('express');
const router = Router();
router.get('/', (req, res) => {
  res.json({
    page: 'Home',
    msg: 'Welcome to this page with docker!',
  });
});

module.exports = router;
