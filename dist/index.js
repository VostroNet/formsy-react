
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./formsy-react-native.cjs.production.min.js')
} else {
  module.exports = require('./formsy-react-native.cjs.development.js')
}
