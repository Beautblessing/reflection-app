'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Reflection = require('./src/routes/Reflection');

var _Reflection2 = _interopRequireDefault(_Reflection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// server.js
var app = (0, _express2.default)();

app.use(_express2.default.json());

app.use('/api/v1', _Reflection2.default);

app.get('/', function (req, res) {
  return res.status(200).send({ message: 'YAY! Welcome To Reflection Corner' });
});

app.listen(4039);
console.log('app running on port ', 4039);