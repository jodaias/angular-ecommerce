const express = require('express');
const router = express.Router();

function buildResponse(data) {
  return {
    _embedded: {
      countries: data,
    }
  };
}
// Dados simulados para países
const countries = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'MX', name: 'Mexico' },
  { code: 'BR', name: 'Brazil' },
];

router.get('/', (req, res) => {
  const response = buildResponse(countries);
  res.send(response);
});

module.exports = router;
