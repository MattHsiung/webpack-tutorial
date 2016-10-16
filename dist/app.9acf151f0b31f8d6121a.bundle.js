webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _content = __webpack_require__(4);

	var _content2 = _interopRequireDefault(_content);

	var _navbar = __webpack_require__(3);

	var _navbar2 = _interopRequireDefault(_navbar);

	var _footer = __webpack_require__(5);

	var _footer2 = _interopRequireDefault(_footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _jquery2.default)('body').append(_navbar2.default);

	(0, _jquery2.default)('body').append(_content2.default);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var content = "\n\t<div class=\"content\">\n\t\t<h1>Home</h1>\n\t</div>\n";

	exports.default = content;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = "\n\t<div class=\"footer\">\n\t\t<h4>footer</h4>\n\t</div>";

/***/ }
]);