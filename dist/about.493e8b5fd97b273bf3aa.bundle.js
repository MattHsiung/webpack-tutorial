webpackJsonp([0,4],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _content = __webpack_require__(2);

	var _content2 = _interopRequireDefault(_content);

	var _navbar = __webpack_require__(3);

	var _navbar2 = _interopRequireDefault(_navbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log();
	(0, _jquery2.default)('body').append(_navbar2.default);

	(0, _jquery2.default)('body').append(_content2.default);

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var content = "\n\t<div class=\"content\">\n\t\t<h1>About</h1>\n\t</div>\n";

	exports.default = content;

/***/ }
]);