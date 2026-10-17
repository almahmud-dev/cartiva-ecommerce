const express = require('express');
const router = express.Router();

router.get('/api/v1', (req, res) => {
  consle.log('API v1 route hit');
});

module.exports = router;