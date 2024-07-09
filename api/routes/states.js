const express = require('express');
const router = express.Router();

function buildResponse(data) {
  return {
    _embedded: {
      states: data,
    },
  };
}
// Dados simulados para estados
const states = [
  { code: 'CA', name: 'California', countryCode: 'US' },
  { code: 'TX', name: 'Texas', countryCode: 'US' },
  { code: 'NY', name: 'New York', countryCode: 'US' },
  { code: 'ON', name: 'Ontario', countryCode: 'CA' },
  { code: 'BC', name: 'British Columbia', countryCode: 'CA' },
  { code: 'QC', name: 'Quebec', countryCode: 'CA' },
  { code: 'JA', name: 'Jalisco', countryCode: 'MX' },
  { code: 'CDMX', name: 'Sao Paulo', countryCode: 'BR' },
  { code: 'CDMX', name: 'Ciudad de Mexico', countryCode: 'MX' },
  { code: 'CDMX', name: 'Bahia', countryCode: 'BR' },
  { code: 'CDMX', name: 'Minas Gerais', countryCode: 'BR' },
];

// Rota para obter estados por código de país
router.get('/search/findByCountryCode', (req, res) => {
  const countryCode = req.query.code;
  const filteredStates = states.filter(state => state.countryCode === countryCode);
  const response = buildResponse(filteredStates);
  res.send(response);
});

module.exports = router;
