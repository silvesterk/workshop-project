const path = require('path');

module.exports = {
  screenDir: path.join(__dirname, '../tests/referenceImages'),
  reportDir: path.join(__dirname, '../tests/report'),
  storybookUrl: 'http://localhost:6006',
  diffOptions: { threshold: 0.2 },
}