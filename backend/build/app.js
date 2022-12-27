"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
require('express-async-errors');
var _errorhandler = require('./app/middlewares/error-handler'); var _errorhandler2 = _interopRequireDefault(_errorhandler);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

class App {
  

   constructor() {
    this.app = _express2.default.call(void 0, );
    this.config();
    this.routes();
  }

   config() {
    this.app.use(_express2.default.json());
    this.app.use(_cors2.default.call(void 0, ));
  }

   routes() {
    this.app.use(_routes2.default);
    this.app.use(_errorhandler2.default);
  }

   start(PORT) {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

exports. default = new App();
