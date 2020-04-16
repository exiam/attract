/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/stats.js/build/stats.min.js":
/*!**************************************************!*\
  !*** ./node_modules/stats.js/build/stats.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// stats.js - http://github.com/mrdoob/stats.js\n(function(f,e){ true?module.exports=e():undefined})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?\"block\":\"none\";l=a}var l=0,c=document.createElement(\"div\");c.style.cssText=\"position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000\";c.addEventListener(\"click\",function(a){a.preventDefault();\nu(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel(\"FPS\",\"#0ff\",\"#002\")),h=e(new f.Panel(\"MS\",\"#0f0\",\"#020\"));if(self.performance&&self.performance.memory)var t=e(new f.Panel(\"MB\",\"#f08\",\"#201\"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/\n1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement(\"canvas\");q.width=r;q.height=h;q.style.cssText=\"width:80px;height:48px\";var b=q.getContext(\"2d\");b.font=\"bold \"+9*a+\"px Helvetica,Arial,sans-serif\";b.textBaseline=\"top\";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);\nb.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+\" \"+e+\" (\"+g(c)+\"-\"+g(k)+\")\",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});\n\n\n//# sourceURL=webpack:///./node_modules/stats.js/build/stats.min.js?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _managers_scene_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./managers/scene.manager */ \"./src/managers/scene.manager.ts\");\n/* harmony import */ var _inputs_mouse_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs/mouse.controller */ \"./src/inputs/mouse.controller.ts\");\n/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stats.js */ \"./node_modules/stats.js/build/stats.min.js\");\n/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar Game = /** @class */ (function () {\n    function Game(options) {\n        this.options = options;\n        this.canvas = document.getElementById(options.canvas);\n        this.ctx = this.canvas.getContext('2d');\n        this.canvas.width = options.width;\n        this.canvas.height = options.height;\n        this.debug = options.debug || false;\n        // Initialize inputs\n        this.inputs = {\n            mouse: new _inputs_mouse_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.canvas),\n        };\n        this.stats = new stats_js__WEBPACK_IMPORTED_MODULE_2___default.a();\n        this.stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom\n        this.stats.dom.id = 'stats';\n        document.body.appendChild(this.stats.dom);\n        // Initialize scene manager\n        this.sceneManager = new _managers_scene_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, options.scenes);\n        this.sceneManager.run(Object.keys(this.sceneManager.scenes)[0]);\n    }\n    Game.prototype.switchScene = function (sceneKey) {\n        this.sceneManager.run(sceneKey);\n    };\n    return Game;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/Game.ts?");

/***/ }),

/***/ "./src/components/collider.component.ts":
/*!**********************************************!*\
  !*** ./src/components/collider.component.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Collider = /** @class */ (function () {\n    function Collider() {\n    }\n    return Collider;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Collider);\n\n\n//# sourceURL=webpack:///./src/components/collider.component.ts?");

/***/ }),

/***/ "./src/components/movable.component.ts":
/*!*********************************************!*\
  !*** ./src/components/movable.component.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Movable = /** @class */ (function () {\n    function Movable() {\n    }\n    return Movable;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movable);\n\n\n//# sourceURL=webpack:///./src/components/movable.component.ts?");

/***/ }),

/***/ "./src/components/renderable.component.ts":
/*!************************************************!*\
  !*** ./src/components/renderable.component.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Renderable = /** @class */ (function () {\n    function Renderable() {\n    }\n    return Renderable;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Renderable);\n\n\n//# sourceURL=webpack:///./src/components/renderable.component.ts?");

/***/ }),

/***/ "./src/entities/block.entity.ts":
/*!**************************************!*\
  !*** ./src/entities/block.entity.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/entities/entity.ts\");\n/* harmony import */ var _components_renderable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/renderable.component */ \"./src/components/renderable.component.ts\");\n/* harmony import */ var _components_movable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/movable.component */ \"./src/components/movable.component.ts\");\n/* harmony import */ var _components_collider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/collider.component */ \"./src/components/collider.component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\nvar BLOCK_WIDTH = 16;\nvar BLOCK_HEIGHT = 16;\nvar Block = /** @class */ (function (_super) {\n    __extends(Block, _super);\n    function Block(initialValues) {\n        var _this = _super.call(this) || this;\n        _this.highlight = false;\n        _this.addComponent(_components_movable_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            latency: 16,\n            velocity: { x: Math.random() > 0.5 ? 1 : -1, y: 1 },\n            moving: true,\n        });\n        _this.addComponent(_components_renderable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], __assign({ position: { x: 0, y: 0 }, width: BLOCK_WIDTH, height: BLOCK_HEIGHT, color: '#000000' }, initialValues));\n        _this.addComponent(_components_collider_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { width: BLOCK_WIDTH, height: BLOCK_HEIGHT });\n        return _this;\n    }\n    return Block;\n}(_entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\nBlock.tags = ['block'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Block);\n\n\n//# sourceURL=webpack:///./src/entities/block.entity.ts?");

/***/ }),

/***/ "./src/entities/entity.ts":
/*!********************************!*\
  !*** ./src/entities/entity.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _managers_event_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../managers/event.manager */ \"./src/managers/event.manager.ts\");\n\nvar Entity = /** @class */ (function () {\n    function Entity() {\n        this.components = {};\n    }\n    /**\n     * Add component to entity.\n     *\n     * @template T\n     * @param {IComponentConstructor<T>} Component\n     * @param {*} [initialValue]\n     * @returns\n     * @memberof Entity\n     */\n    Entity.prototype.addComponent = function (Component, initialValue) {\n        var component = new Component();\n        if (typeof initialValue !== 'undefined') {\n            Object.assign(component, initialValue);\n        }\n        this.components[Component.name] = component;\n        if (this.id) {\n            _managers_event_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dispatch('ADD_ENTITY_COMPONENT', this.id);\n        }\n        return this;\n    };\n    /**\n     * Get component.\n     *\n     * @template T\n     * @param {IComponentConstructor<T>} Component\n     * @returns\n     * @memberof Entity\n     */\n    Entity.prototype.getComponent = function (Component) {\n        return this.components[Component.name] || null;\n    };\n    Entity.prototype.hasComponent = function (name) {\n        return !!this.components[name];\n    };\n    /**\n     * Check if entity has tag.\n     *\n     * @param {string} tag\n     * @returns {boolean}\n     * @memberof Entity\n     */\n    Entity.prototype.hasTag = function (tag) {\n        return this.constructor.tags.includes(tag);\n    };\n    return Entity;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Entity);\n\n\n//# sourceURL=webpack:///./src/entities/entity.ts?");

/***/ }),

/***/ "./src/entities/player.entity.ts":
/*!***************************************!*\
  !*** ./src/entities/player.entity.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_renderable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/renderable.component */ \"./src/components/renderable.component.ts\");\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity */ \"./src/entities/entity.ts\");\n/* harmony import */ var _components_movable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/movable.component */ \"./src/components/movable.component.ts\");\n/* harmony import */ var _components_collider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/collider.component */ \"./src/components/collider.component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\nvar PLAYER_WIDTH = 16;\nvar PLAYER_HEIGHT = 16;\nvar Player = /** @class */ (function (_super) {\n    __extends(Player, _super);\n    function Player() {\n        var _this = _super.call(this) || this;\n        _this.score = 0;\n        _this.addComponent(_components_renderable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n            position: { x: 0, y: 0 },\n            width: PLAYER_WIDTH,\n            height: PLAYER_HEIGHT,\n            color: '#69D2F5',\n        });\n        _this.addComponent(_components_movable_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { latency: 16, moving: false });\n        _this.addComponent(_components_collider_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { width: PLAYER_WIDTH, height: PLAYER_HEIGHT });\n        return _this;\n    }\n    Player.prototype.onColliderHit = function (hit) { };\n    return Player;\n}(_entity__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\nPlayer.tags = ['player'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n\n//# sourceURL=webpack:///./src/entities/player.entity.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n/* harmony import */ var _scenes_menu_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/menu.scene */ \"./src/scenes/menu.scene.ts\");\n/* harmony import */ var _scenes_game_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/game.scene */ \"./src/scenes/game.scene.ts\");\n/* harmony import */ var _scenes_game_over_scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/game-over.scene */ \"./src/scenes/game-over.scene.ts\");\n/// <reference path=\"./stats.js.d.ts\">\n\n\n\n\nnew _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    canvas: 'game',\n    width: 480,\n    height: 800,\n    scenes: [_scenes_menu_scene__WEBPACK_IMPORTED_MODULE_1__[\"MenuScene\"], _scenes_game_scene__WEBPACK_IMPORTED_MODULE_2__[\"GameScene\"], _scenes_game_over_scene__WEBPACK_IMPORTED_MODULE_3__[\"GameOverScene\"]],\n    debug: window.location.search === '?debug',\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/inputs/mouse.controller.ts":
/*!****************************************!*\
  !*** ./src/inputs/mouse.controller.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar MouseController = /** @class */ (function () {\n    function MouseController(element) {\n        var _this = this;\n        this.element = element;\n        this.position = { x: 0, y: 0 };\n        this.element.addEventListener('mousemove', function (e) { return _this.onMouseMove(e); });\n        this.element.addEventListener('click', function (e) { return _this.onClick(e); });\n        this.listeners = { 'click': [], 'mousemove': [] };\n    }\n    MouseController.prototype.onMouseMove = function (e) {\n        this.position = { x: e.clientX, y: e.clientY };\n        this.listeners['mousemove'].forEach(function (callback) {\n            callback();\n        });\n    };\n    MouseController.prototype.onClick = function (e) {\n        this.click = { x: e.clientX, y: e.clientY };\n        this.listeners['click'].forEach(function (callback) {\n            callback();\n        });\n    };\n    MouseController.prototype.on = function (event, callback) {\n        this.listeners[event].push(callback);\n    };\n    return MouseController;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (MouseController);\n\n\n//# sourceURL=webpack:///./src/inputs/mouse.controller.ts?");

/***/ }),

/***/ "./src/managers/collision.manager.ts":
/*!*******************************************!*\
  !*** ./src/managers/collision.manager.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_quad_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/quad-tree */ \"./src/utils/quad-tree.ts\");\n/* harmony import */ var _components_collider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/collider.component */ \"./src/components/collider.component.ts\");\n/* harmony import */ var _components_renderable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/renderable.component */ \"./src/components/renderable.component.ts\");\n\n\n\nvar CollisionManager = /** @class */ (function () {\n    function CollisionManager(game) {\n        this.game = game;\n        this.buildTree();\n    }\n    CollisionManager.prototype.buildTree = function (entities) {\n        var _this = this;\n        this.tree = new _utils_quad_tree__WEBPACK_IMPORTED_MODULE_0__[\"QuadTree\"]({\n            x: 0,\n            y: 0,\n            width: this.game.canvas.width,\n            height: this.game.canvas.height,\n        });\n        if (entities) {\n            entities.forEach(function (entity) {\n                _this.registerEntity(entity);\n            });\n        }\n    };\n    CollisionManager.prototype.registerEntity = function (entity) {\n        var _a = entity.getComponent(_components_renderable_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).position, x = _a.x, y = _a.y;\n        var _b = entity.getComponent(_components_collider_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), width = _b.width, height = _b.height;\n        this.tree.insert({ x: x, y: y, width: width, height: height }, entity.id);\n    };\n    /**\n     * For debug purpose.\n     *\n     * @param {CanvasRenderingContext2D} ctx\n     * @memberof CollisionManager\n     */\n    CollisionManager.prototype.renderTree = function (ctx) {\n        this.tree.render(ctx);\n    };\n    return CollisionManager;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (CollisionManager);\n\n\n//# sourceURL=webpack:///./src/managers/collision.manager.ts?");

/***/ }),

/***/ "./src/managers/entity.manager.ts":
/*!****************************************!*\
  !*** ./src/managers/entity.manager.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/uuid */ \"./src/utils/uuid.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\n\nvar EntityManager = /** @class */ (function () {\n    function EntityManager() {\n        this.entities = {};\n        this.index = {};\n        this.tagIndex = {};\n    }\n    /**\n     * Add entity.\n     *\n     * @param {Entity} entity\n     * @memberof EntityManager\n     */\n    EntityManager.prototype.addEntity = function (entity) {\n        var _this = this;\n        var id;\n        do {\n            id = Object(_utils_uuid__WEBPACK_IMPORTED_MODULE_0__[\"uuidv4\"])();\n        } while (this.entities[id]);\n        entity.id = id;\n        this.entities[entity.id] = entity;\n        Object.keys(entity.components).forEach(function (component) {\n            if (!_this.index[component]) {\n                _this.index[component] = [];\n            }\n            _this.index[component].push(entity.id);\n        });\n        if (entity.constructor.tags) {\n            entity.constructor.tags.forEach(function (tag) {\n                if (!_this.tagIndex[tag]) {\n                    _this.tagIndex[tag] = [];\n                }\n                _this.tagIndex[tag].push(entity.id);\n            });\n        }\n    };\n    /**\n     * Remove entity.\n     *\n     * @param {Entity} entity\n     * @memberof EntityManager\n     */\n    EntityManager.prototype.removeEntity = function (entity) {\n        var _this = this;\n        Object.keys(entity.components).forEach(function (component) {\n            var index = _this.index[component].indexOf(entity.id);\n            _this.index[component].splice(index, 1);\n        });\n        if (entity.constructor.tags) {\n            entity.constructor.tags.forEach(function (tag) {\n                var index = _this.tagIndex[tag].indexOf(entity.id);\n                _this.tagIndex[tag].splice(index, 1);\n            });\n        }\n        delete this.entities[entity.id];\n    };\n    /**\n     * Return entities filtered by components.\n     *\n     * @param {IComponentConstructor<any>[]} components\n     * @returns {Entity[]}\n     * @memberof EntityManager\n     */\n    EntityManager.prototype.findByComponents = function (components) {\n        var _this = this;\n        var firstComponent = components[0].name;\n        return this.index[firstComponent].reduce(function (results, entityId) {\n            var entity = _this.entities[entityId];\n            if (components.length === 1 ||\n                components.every(function (_a) {\n                    var name = _a.name;\n                    return entity.hasComponent(name);\n                })) {\n                results.push(entity);\n            }\n            return results;\n        }, []);\n    };\n    /**\n     * Return first entity with given tags.\n     *\n     * @param {string[]} tags\n     * @returns {Entity[]}\n     * @memberof EntityManager\n     */\n    EntityManager.prototype.findOneByTags = function (tags) {\n        var _this = this;\n        var entity = null;\n        tags.some(function (tag) {\n            if (_this.tagIndex[tag] && _this.tagIndex[tag].length > 0) {\n                entity = _this.entities[_this.tagIndex[tag][0]];\n                return true;\n            }\n            return false;\n        });\n        return entity;\n    };\n    /**\n     * Return entities filtered by tags.\n     *\n     * @param {string[]} tags\n     * @returns {Entity[]}\n     * @memberof EntityManager\n     */\n    EntityManager.prototype.findByTags = function (tags) {\n        var _this = this;\n        var entitiesIds = tags.reduce(function (results, tag) {\n            if (_this.tagIndex[tag]) {\n                results = __spreadArrays(results, _this.tagIndex[tag]);\n            }\n            return results;\n        }, []);\n        return entitiesIds.map(function (entityId) { return _this.entities[entityId]; });\n    };\n    return EntityManager;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (EntityManager);\n\n\n//# sourceURL=webpack:///./src/managers/entity.manager.ts?");

/***/ }),

/***/ "./src/managers/event.manager.ts":
/*!***************************************!*\
  !*** ./src/managers/event.manager.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar EventManager = /** @class */ (function () {\n    function EventManager() {\n        this.listeners = {};\n    }\n    /**\n     * Add listener.\n     *\n     * @param {string} event\n     * @param {() => void} callback\n     * @memberof EventManager\n     */\n    EventManager.prototype.addListener = function (event, callback) {\n        if (!this.listeners[event]) {\n            this.listeners[event] = [];\n        }\n        this.listeners[event].push(callback);\n    };\n    /**\n     * Dispatch event.\n     *\n     * @param {string} event\n     * @param {*} [value]\n     * @returns {void}\n     * @memberof EventManager\n     */\n    EventManager.prototype.dispatch = function (event, value) {\n        if (!this.listeners[event]) {\n            return;\n        }\n        this.listeners[event].forEach(function (callback) {\n            callback(value);\n        });\n    };\n    return EventManager;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (new EventManager());\n\n\n//# sourceURL=webpack:///./src/managers/event.manager.ts?");

/***/ }),

/***/ "./src/managers/scene.manager.ts":
/*!***************************************!*\
  !*** ./src/managers/scene.manager.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types_system_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/system.types */ \"./src/types/system.types.ts\");\n\nvar SceneManager = /** @class */ (function () {\n    function SceneManager(game, Scenes) {\n        this.game = game;\n        this.scenes = {};\n        for (var _i = 0, Scenes_1 = Scenes; _i < Scenes_1.length; _i++) {\n            var SceneClass = Scenes_1[_i];\n            this.scenes[SceneClass.sceneKey] = SceneClass;\n        }\n        this.lastTime = 0;\n    }\n    SceneManager.prototype.run = function (scene) {\n        var prevScene = undefined;\n        if (this.currentScene != null) {\n            if (typeof this.currentScene.end !== 'undefined') {\n                this.currentScene.end();\n            }\n            prevScene = this.currentScene;\n        }\n        this.currentScene = new this.scenes[scene](this.game);\n        this.currentScene.start(prevScene);\n        this.loop();\n    };\n    SceneManager.prototype.loop = function () {\n        var _this = this;\n        this.game.stats.begin();\n        var now = performance.now();\n        // Render\n        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);\n        var delta = (now - this.lastTime) / 1000;\n        this.currentScene.update(delta);\n        this.currentScene.render(delta);\n        this.lastTime = now;\n        this.game.stats.end();\n        if (this.currentScene.systemManager.hasSystemFor(_types_system_types__WEBPACK_IMPORTED_MODULE_0__[\"SystemTypeEnum\"].LOGIC)) {\n            requestAnimationFrame(function () {\n                _this.loop();\n            });\n        }\n    };\n    return SceneManager;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (SceneManager);\n\n\n//# sourceURL=webpack:///./src/managers/scene.manager.ts?");

/***/ }),

/***/ "./src/managers/system.manager.ts":
/*!****************************************!*\
  !*** ./src/managers/system.manager.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types_system_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/system.types */ \"./src/types/system.types.ts\");\n\nvar SystemManager = /** @class */ (function () {\n    function SystemManager() {\n        var _a;\n        this.systems = (_a = {},\n            _a[_types_system_types__WEBPACK_IMPORTED_MODULE_0__[\"SystemTypeEnum\"].LOGIC] = [],\n            _a[_types_system_types__WEBPACK_IMPORTED_MODULE_0__[\"SystemTypeEnum\"].RENDER] = [],\n            _a);\n    }\n    SystemManager.prototype.registerSystem = function (system) {\n        this.systems[system.constructor.type].push(system);\n    };\n    SystemManager.prototype.hasSystemFor = function (type) {\n        return !!this.systems[type] && this.systems[type].length > 0;\n    };\n    return SystemManager;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (SystemManager);\n\n\n//# sourceURL=webpack:///./src/managers/system.manager.ts?");

/***/ }),

/***/ "./src/scenes/game-over.scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/game-over.scene.ts ***!
  \***************************************/
/*! exports provided: GameOverScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameOverScene\", function() { return GameOverScene; });\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ \"./src/scenes/scene.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar GameOverScene = /** @class */ (function (_super) {\n    __extends(GameOverScene, _super);\n    function GameOverScene() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.score = 0;\n        _this.clickCallback = function () {\n            _this.game.switchScene('menu');\n        };\n        return _this;\n    }\n    GameOverScene.prototype.start = function (prevScene) {\n        var player = prevScene.entityManager.findOneByTags(['player']);\n        this.score = player.score;\n        this.game.canvas.addEventListener('click', this.clickCallback);\n    };\n    GameOverScene.prototype.update = function () {\n        // Title\n        this.game.ctx.fillStyle = '#444444';\n        this.game.ctx.font = '32px Georgia';\n        this.game.ctx.fillText('Game Over', this.game.canvas.width / 2 - 100, this.game.canvas.height / 2);\n        // Indication\n        this.game.ctx.font = '16px Georgia';\n        this.game.ctx.fillText(\"Score: \" + this.score, this.game.canvas.width / 2 + 10, this.game.canvas.height / 2 + 60);\n    };\n    GameOverScene.prototype.end = function () {\n        this.game.canvas.removeEventListener('click', this.clickCallback);\n    };\n    GameOverScene.sceneKey = 'gameover';\n    return GameOverScene;\n}(_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n\n\n//# sourceURL=webpack:///./src/scenes/game-over.scene.ts?");

/***/ }),

/***/ "./src/scenes/game.scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/game.scene.ts ***!
  \**********************************/
/*! exports provided: GameScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameScene\", function() { return GameScene; });\n/* harmony import */ var _entities_player_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/player.entity */ \"./src/entities/player.entity.ts\");\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene */ \"./src/scenes/scene.ts\");\n/* harmony import */ var _systems_render_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../systems/render.system */ \"./src/systems/render.system.ts\");\n/* harmony import */ var _systems_spawn_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../systems/spawn.system */ \"./src/systems/spawn.system.ts\");\n/* harmony import */ var _systems_movement_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../systems/movement.system */ \"./src/systems/movement.system.ts\");\n/* harmony import */ var _systems_player_control_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../systems/player-control.system */ \"./src/systems/player-control.system.ts\");\n/* harmony import */ var _managers_collision_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../managers/collision.manager */ \"./src/managers/collision.manager.ts\");\n/* harmony import */ var _components_collider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/collider.component */ \"./src/components/collider.component.ts\");\n/* harmony import */ var _systems_collision_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../systems/collision.system */ \"./src/systems/collision.system.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\n\n\n\n\n\nvar GameScene = /** @class */ (function (_super) {\n    __extends(GameScene, _super);\n    function GameScene() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    GameScene.prototype.start = function () {\n        this.collisionManager = new _managers_collision_manager__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.game);\n        this.addEntity(new _entities_player_entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n    };\n    GameScene.prototype.update = function (dt) {\n        this.collisionManager.buildTree(this.entityManager.findByComponents([_components_collider_component__WEBPACK_IMPORTED_MODULE_7__[\"default\"]]));\n        if (this.game.debug) {\n            this.collisionManager.renderTree(this.game.ctx);\n            var blocks = this.entityManager.findByTags(['block']);\n            for (var _i = 0, blocks_1 = blocks; _i < blocks_1.length; _i++) {\n                var block = blocks_1[_i];\n                block.highlight = false;\n            }\n        }\n        _super.prototype.update.call(this, dt);\n    };\n    GameScene.prototype.render = function (dt) {\n        _super.prototype.render.call(this, dt);\n        var player = this.entityManager.findOneByTags(['player']);\n        // Title\n        this.game.ctx.fillStyle = '#444444';\n        this.game.ctx.font = '16px Georgia';\n        this.game.ctx.fillText(\"Score: \" + player.score, 0, 16);\n    };\n    GameScene.sceneKey = 'game';\n    return GameScene;\n}(_scene__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\nGameScene.systems = [\n    _systems_render_system__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    _systems_spawn_system__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    _systems_movement_system__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    _systems_player_control_system__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    _systems_collision_system__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n];\n\n\n\n//# sourceURL=webpack:///./src/scenes/game.scene.ts?");

/***/ }),

/***/ "./src/scenes/menu.scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/menu.scene.ts ***!
  \**********************************/
/*! exports provided: MenuScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuScene\", function() { return MenuScene; });\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ \"./src/scenes/scene.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar MenuScene = /** @class */ (function (_super) {\n    __extends(MenuScene, _super);\n    function MenuScene() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.clickCallback = function () {\n            _this.game.switchScene('game');\n        };\n        return _this;\n    }\n    MenuScene.prototype.start = function () {\n        this.game.canvas.addEventListener('click', this.clickCallback);\n    };\n    MenuScene.prototype.update = function () {\n        // Title\n        this.game.ctx.fillStyle = '#444444';\n        this.game.ctx.font = '32px Georgia';\n        this.game.ctx.fillText('Attract', this.game.canvas.width / 2 - 100, this.game.canvas.height / 2);\n        // Indication\n        this.game.ctx.font = '16px Georgia';\n        this.game.ctx.fillText('Click to play', this.game.canvas.width / 2 + 10, this.game.canvas.height / 2);\n    };\n    MenuScene.prototype.end = function () {\n        this.game.canvas.removeEventListener('click', this.clickCallback);\n    };\n    MenuScene.sceneKey = 'menu';\n    return MenuScene;\n}(_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n\n\n//# sourceURL=webpack:///./src/scenes/menu.scene.ts?");

/***/ }),

/***/ "./src/scenes/scene.ts":
/*!*****************************!*\
  !*** ./src/scenes/scene.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _managers_entity_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../managers/entity.manager */ \"./src/managers/entity.manager.ts\");\n/* harmony import */ var _types_system_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/system.types */ \"./src/types/system.types.ts\");\n/* harmony import */ var _managers_system_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../managers/system.manager */ \"./src/managers/system.manager.ts\");\n\n\n\nvar Scene = /** @class */ (function () {\n    function Scene(game) {\n        var _this = this;\n        this.game = game;\n        this.entityManager = new _managers_entity_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.systemManager = new _managers_system_manager__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n        if (this.constructor.systems) {\n            this.constructor.systems.forEach(function (SystemClass) {\n                _this.systemManager.registerSystem(new SystemClass(_this));\n            });\n        }\n    }\n    /**\n     * Add entity to scene.\n     *\n     * @param {Entity} entity\n     * @returns\n     * @memberof Scene\n     */\n    Scene.prototype.addEntity = function (entity) {\n        this.entityManager.addEntity(entity);\n        return this;\n    };\n    /**\n     * Update scene by executing systems.\n     *\n     * @param {number} dt\n     * @memberof Scene\n     */\n    Scene.prototype.update = function (dt) {\n        this.systemManager.systems[_types_system_types__WEBPACK_IMPORTED_MODULE_1__[\"SystemTypeEnum\"].LOGIC].forEach(function (system) {\n            if (!system.initialized) {\n                system.initialize();\n            }\n            system.execute(dt);\n        });\n    };\n    /**\n     * Render scene with render systems.\n     *\n     * @memberof Scene\n     */\n    Scene.prototype.render = function (dt) {\n        this.systemManager.systems[_types_system_types__WEBPACK_IMPORTED_MODULE_1__[\"SystemTypeEnum\"].RENDER].forEach(function (system) {\n            system.execute(dt);\n        });\n    };\n    Scene.sceneKey = undefined;\n    return Scene;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n\n//# sourceURL=webpack:///./src/scenes/scene.ts?");

/***/ }),

/***/ "./src/systems/collision.system.ts":
/*!*****************************************!*\
  !*** ./src/systems/collision.system.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system */ \"./src/systems/system.ts\");\n/* harmony import */ var _components_collider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/collider.component */ \"./src/components/collider.component.ts\");\n/* harmony import */ var _components_renderable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/renderable.component */ \"./src/components/renderable.component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\nvar CollisionSystem = /** @class */ (function (_super) {\n    __extends(CollisionSystem, _super);\n    function CollisionSystem() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    CollisionSystem.prototype.intersects = function (e1, e2) {\n        var _a = e1.getComponent(_components_renderable_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).position, x1 = _a.x, y1 = _a.y;\n        var _b = e2.getComponent(_components_renderable_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).position, x2 = _b.x, y2 = _b.y;\n        var _c = e1.getComponent(_components_collider_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), w1 = _c.width, h1 = _c.height;\n        var _d = e2.getComponent(_components_collider_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), w2 = _d.width, h2 = _d.height;\n        return x1 <= x2 + w2 && x2 <= x1 + w1 && y1 <= y2 + h2 && y2 <= y1 + h1;\n    };\n    CollisionSystem.prototype.execute = function (dt) {\n        // Only check collision on block around player\n        var player = this.entityManager.findOneByTags(['player']);\n        var playerNode = this.scene.collisionManager.tree.findNodeById(player.id);\n        if (!playerNode) {\n            return;\n        }\n        var colliderKeys = Object.keys(playerNode.children);\n        for (var _i = 0, colliderKeys_1 = colliderKeys; _i < colliderKeys_1.length; _i++) {\n            var colliderKey = colliderKeys_1[_i];\n            if (colliderKey === player.id) {\n                continue;\n            }\n            var targetEntity = this.entityManager.entities[colliderKey];\n            if (targetEntity) {\n                if (this.game.debug && targetEntity.hasTag('block')) {\n                    targetEntity.highlight = true;\n                }\n                if (this.intersects(player, targetEntity)) {\n                    player.onColliderHit(targetEntity);\n                    if (targetEntity.hasTag('block')) {\n                        this.game.switchScene('gameover');\n                    }\n                }\n            }\n        }\n    };\n    return CollisionSystem;\n}(_system__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\nCollisionSystem.queries = {\n    collider: {\n        components: [_components_collider_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _components_renderable_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]],\n    },\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CollisionSystem);\n\n\n//# sourceURL=webpack:///./src/systems/collision.system.ts?");

/***/ }),

/***/ "./src/systems/movement.system.ts":
/*!****************************************!*\
  !*** ./src/systems/movement.system.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system */ \"./src/systems/system.ts\");\n/* harmony import */ var _components_movable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/movable.component */ \"./src/components/movable.component.ts\");\n/* harmony import */ var _components_renderable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/renderable.component */ \"./src/components/renderable.component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\nvar MovementSystem = /** @class */ (function (_super) {\n    __extends(MovementSystem, _super);\n    function MovementSystem() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    MovementSystem.prototype.execute = function (dt) {\n        var _this = this;\n        var entities = this.query('movable');\n        entities.forEach(function (entity) {\n            var movement = entity.getComponent(_components_movable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n            var position = entity.getComponent(_components_renderable_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).position;\n            if (movement.destination) {\n                var toPointX = movement.destination.x - position.x;\n                var toPointY = movement.destination.y - position.y;\n                position.x += toPointX / movement.latency;\n                position.y += toPointY / movement.latency;\n                if (entity.hasTag('player')) {\n                    entity.score += Math.round(Math.abs(toPointX / movement.latency) +\n                        Math.abs(toPointX / movement.latency));\n                }\n            }\n            if (movement.velocity) {\n                position.x += movement.velocity.x;\n                position.y += movement.velocity.y;\n            }\n            // Check boundaries\n            if (position.y > _this.game.canvas.height && !entity.hasTag('player')) {\n                _this.entityManager.removeEntity(entity);\n                return;\n            }\n            if (position.x > _this.game.canvas.width) {\n                position.x = 0;\n            }\n            else if (position.x < 0) {\n                position.x = _this.game.canvas.width;\n            }\n        });\n    };\n    return MovementSystem;\n}(_system__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\nMovementSystem.queries = {\n    movable: {\n        components: [_components_movable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _components_renderable_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]],\n    },\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovementSystem);\n\n\n//# sourceURL=webpack:///./src/systems/movement.system.ts?");

/***/ }),

/***/ "./src/systems/player-control.system.ts":
/*!**********************************************!*\
  !*** ./src/systems/player-control.system.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system */ \"./src/systems/system.ts\");\n/* harmony import */ var _components_renderable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/renderable.component */ \"./src/components/renderable.component.ts\");\n/* harmony import */ var _components_movable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/movable.component */ \"./src/components/movable.component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\n\n\nvar PlayerControlSystem = /** @class */ (function (_super) {\n    __extends(PlayerControlSystem, _super);\n    function PlayerControlSystem() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    PlayerControlSystem.prototype.initialize = function () {\n        var _this = this;\n        this.game.inputs.mouse.on('click', function () {\n            _this.onClick();\n        });\n        _super.prototype.initialize.call(this);\n    };\n    PlayerControlSystem.prototype.onClick = function () {\n        var player = this.query('player')[0];\n        var movable = player.getComponent(_components_movable_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        movable.destination = __assign({}, this.game.inputs.mouse.click);\n    };\n    PlayerControlSystem.prototype.execute = function (dt) {\n        var player = this.query('player')[0];\n        var _a = player.getComponent(_components_renderable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), position = _a.position, render = __rest(_a, [\"position\"]);\n        var posX = position.x + render.width / 2;\n        var posY = position.y + render.height / 2;\n        var toMouseX = this.game.inputs.mouse.position.x - posX;\n        var toMouseY = this.game.inputs.mouse.position.y - posY;\n        this.game.ctx.beginPath();\n        this.game.ctx.moveTo(posX, posY);\n        this.game.ctx.lineTo(posX + toMouseX, posY + toMouseY);\n        this.game.ctx.strokeStyle = '#ff0000';\n        this.game.ctx.stroke();\n    };\n    return PlayerControlSystem;\n}(_system__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\nPlayerControlSystem.queries = {\n    player: {\n        tags: ['player'],\n    },\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerControlSystem);\n\n\n//# sourceURL=webpack:///./src/systems/player-control.system.ts?");

/***/ }),

/***/ "./src/systems/render.system.ts":
/*!**************************************!*\
  !*** ./src/systems/render.system.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_renderable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/renderable.component */ \"./src/components/renderable.component.ts\");\n/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system */ \"./src/systems/system.ts\");\n/* harmony import */ var _types_system_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/system.types */ \"./src/types/system.types.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\n\n\nvar RenderSystem = /** @class */ (function (_super) {\n    __extends(RenderSystem, _super);\n    function RenderSystem() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    RenderSystem.prototype.execute = function () {\n        var _this = this;\n        var entities = this.query('renderable');\n        entities.forEach(function (entity) {\n            var _a = entity.getComponent(_components_renderable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]), position = _a.position, render = __rest(_a, [\"position\"]);\n            if (entity.hasTag('block') && entity.highlight) {\n                _this.game.ctx.fillStyle = 'red';\n            }\n            else {\n                _this.game.ctx.fillStyle = render.color;\n            }\n            _this.game.ctx.fillRect(position.x, position.y, render.width, render.height);\n        });\n    };\n    RenderSystem.type = _types_system_types__WEBPACK_IMPORTED_MODULE_2__[\"SystemTypeEnum\"].RENDER;\n    return RenderSystem;\n}(_system__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\nRenderSystem.queries = {\n    renderable: {\n        components: [_components_renderable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RenderSystem);\n\n\n//# sourceURL=webpack:///./src/systems/render.system.ts?");

/***/ }),

/***/ "./src/systems/spawn.system.ts":
/*!*************************************!*\
  !*** ./src/systems/spawn.system.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system */ \"./src/systems/system.ts\");\n/* harmony import */ var _entities_block_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/block.entity */ \"./src/entities/block.entity.ts\");\n/* harmony import */ var _utils_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/timer */ \"./src/utils/timer.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\nvar SPAWN_INTERVAL = 500;\nvar SpawnSystem = /** @class */ (function (_super) {\n    __extends(SpawnSystem, _super);\n    function SpawnSystem() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    SpawnSystem.prototype.initialize = function () {\n        this.spawnTimer = new _utils_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](SPAWN_INTERVAL);\n        _super.prototype.initialize.call(this);\n    };\n    SpawnSystem.prototype.execute = function () {\n        this.spawnTimer.update();\n        if (this.spawnTimer.tick) {\n            this.scene.addEntity(new _entities_block_entity__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                position: { x: Math.random() * this.game.canvas.width, y: 0 },\n            }));\n        }\n    };\n    return SpawnSystem;\n}(_system__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpawnSystem);\n\n\n//# sourceURL=webpack:///./src/systems/spawn.system.ts?");

/***/ }),

/***/ "./src/systems/system.ts":
/*!*******************************!*\
  !*** ./src/systems/system.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types_system_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/system.types */ \"./src/types/system.types.ts\");\n\nvar System = /** @class */ (function () {\n    function System(scene) {\n        this.scene = scene;\n        this.initialized = false;\n    }\n    System.prototype.initialize = function () {\n        this.initialized = true;\n    };\n    System.prototype.query = function (queryKey) {\n        var query = this.constructor.queries[queryKey];\n        if (query.components) {\n            return this.entityManager.findByComponents(query.components);\n        }\n        if (query.tags) {\n            return this.entityManager.findByTags(query.tags);\n        }\n        return [];\n    };\n    Object.defineProperty(System.prototype, \"game\", {\n        get: function () {\n            return this.scene.game;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(System.prototype, \"entityManager\", {\n        get: function () {\n            return this.scene.entityManager;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    System.type = _types_system_types__WEBPACK_IMPORTED_MODULE_0__[\"SystemTypeEnum\"].LOGIC;\n    return System;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (System);\n\n\n//# sourceURL=webpack:///./src/systems/system.ts?");

/***/ }),

/***/ "./src/types/system.types.ts":
/*!***********************************!*\
  !*** ./src/types/system.types.ts ***!
  \***********************************/
/*! exports provided: SystemTypes, SystemTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SystemTypes\", function() { return SystemTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SystemTypeEnum\", function() { return SystemTypeEnum; });\nvar SystemTypes = {\n    LOGIC: 'logic',\n    RENDER: 'render'\n};\nvar SystemTypeEnum;\n(function (SystemTypeEnum) {\n    SystemTypeEnum[\"LOGIC\"] = \"logic\";\n    SystemTypeEnum[\"RENDER\"] = \"render\";\n})(SystemTypeEnum || (SystemTypeEnum = {}));\n\n\n//# sourceURL=webpack:///./src/types/system.types.ts?");

/***/ }),

/***/ "./src/utils/quad-tree.ts":
/*!********************************!*\
  !*** ./src/utils/quad-tree.ts ***!
  \********************************/
/*! exports provided: QuadTree, Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QuadTree\", function() { return QuadTree; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Node\", function() { return Node; });\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar PositionIndex;\n(function (PositionIndex) {\n    PositionIndex[PositionIndex[\"UNDEFINED\"] = -1] = \"UNDEFINED\";\n    PositionIndex[PositionIndex[\"TOP_LEFT\"] = 0] = \"TOP_LEFT\";\n    PositionIndex[PositionIndex[\"BOTTOM_LEFT\"] = 1] = \"BOTTOM_LEFT\";\n    PositionIndex[PositionIndex[\"TOP_RIGHT\"] = 2] = \"TOP_RIGHT\";\n    PositionIndex[PositionIndex[\"BOTTOM_RIGHT\"] = 3] = \"BOTTOM_RIGHT\";\n})(PositionIndex || (PositionIndex = {}));\nvar DEFAULT_MAX_CHILDREN = 4;\nvar DEFAULT_MAX_DEPTH = 2;\nvar DEBUG_DEPTH_COLORS = ['#bbe1fa', '#3282b8', '#0f4c75', '#1b262c'];\nvar QuadTree = /** @class */ (function () {\n    function QuadTree(bounds, maxChildren) {\n        this.root = new Node(bounds);\n    }\n    QuadTree.prototype.insert = function (bounds, id) {\n        this.root.insert(bounds, id);\n    };\n    QuadTree.prototype.retrieve = function (bounds) {\n        return this.root.retrieve(bounds);\n    };\n    QuadTree.prototype.findNodeById = function (id) {\n        return this.root.findNodeById(id);\n    };\n    QuadTree.prototype.render = function (ctx) {\n        this.root.renderBounds(ctx);\n    };\n    return QuadTree;\n}());\n\nvar Node = /** @class */ (function () {\n    function Node(bounds, depth, maxDepth, maxChildren) {\n        this.bounds = bounds;\n        this.nodes = [];\n        this.children = {};\n        this.depth = depth || 0;\n        this.maxDepth = maxDepth || DEFAULT_MAX_DEPTH;\n        this.maxChildren = maxChildren || DEFAULT_MAX_CHILDREN;\n    }\n    Node.prototype.insert = function (bounds, id) {\n        if (this.nodes.length) {\n            var index = this.getIndex(bounds);\n            if (index !== PositionIndex.UNDEFINED) {\n                this.nodes[index].insert(bounds, id);\n                return;\n            }\n        }\n        this.children[id] = bounds;\n        var keys = Object.keys(this.children);\n        if (keys.length > this.maxChildren && this.depth < this.maxDepth) {\n            if (this.nodes.length === 0) {\n                this.divide();\n            }\n            for (var i = 0; i < keys.length; ++i) {\n                var bounds_1 = this.children[keys[i]];\n                var index = this.getIndex(bounds_1);\n                if (index !== PositionIndex.UNDEFINED) {\n                    this.nodes[index].insert(bounds_1, keys[i]);\n                    delete this.children[keys[i]];\n                }\n            }\n        }\n    };\n    Node.prototype.retrieve = function (bounds) {\n        var index = this.getIndex(bounds);\n        var results = __assign({}, this.children);\n        if (this.nodes.length) {\n            if (index !== PositionIndex.UNDEFINED) {\n                results = __assign(__assign({}, results), this.nodes[index].retrieve(bounds));\n            }\n            else {\n                for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {\n                    var node = _a[_i];\n                    results = __assign(__assign({}, results), node.retrieve(bounds));\n                }\n            }\n        }\n        return results;\n    };\n    Node.prototype.findNodeById = function (id) {\n        if (this.children[id]) {\n            return this;\n        }\n        if (this.nodes.length > 0) {\n            for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {\n                var node = _a[_i];\n                var subNode = node.findNodeById(id);\n                if (subNode != null) {\n                    return subNode;\n                }\n            }\n        }\n        return null;\n    };\n    Node.prototype.getIndex = function (bounds) {\n        var middleWidth = this.bounds.x + this.bounds.width / 2;\n        var middleHeight = this.bounds.y + this.bounds.height / 2;\n        var left = bounds.x <= middleWidth && bounds.x + bounds.width <= middleWidth;\n        var top = bounds.y <= middleHeight && bounds.y + bounds.height <= middleHeight;\n        if (left) {\n            if (top) {\n                return PositionIndex.TOP_LEFT;\n            }\n            return PositionIndex.BOTTOM_LEFT;\n        }\n        if (bounds.x >= middleWidth) {\n            if (top) {\n                return PositionIndex.TOP_RIGHT;\n            }\n            return PositionIndex.BOTTOM_RIGHT;\n        }\n        // If doesn't fit\n        return PositionIndex.UNDEFINED;\n    };\n    Node.prototype.divide = function () {\n        var _a = this.bounds, x = _a.x, y = _a.y, originalWidth = _a.width, originalHeight = _a.height;\n        var width = originalWidth / 2;\n        var height = originalHeight / 2;\n        // Top-left\n        this.nodes.push(new Node({ x: x, y: y, width: width, height: height }, this.depth + 1, this.maxDepth, this.maxChildren));\n        // Bottom-left\n        this.nodes.push(new Node({ x: x, y: y + height, width: width, height: height }, this.depth + 1, this.maxDepth, this.maxChildren));\n        // Top-right\n        this.nodes.push(new Node({ x: x + width, y: y, width: width, height: height }, this.depth + 1, this.maxDepth, this.maxChildren));\n        // Bottom-right\n        this.nodes.push(new Node({ x: x + width, y: y + height, width: width, height: height }, this.depth + 1, this.maxDepth, this.maxChildren));\n    };\n    Node.prototype.renderBounds = function (ctx) {\n        var _a = this.bounds, x = _a.x, y = _a.y, width = _a.width, height = _a.height;\n        ctx.strokeStyle =\n            this.depth < DEBUG_DEPTH_COLORS.length\n                ? DEBUG_DEPTH_COLORS[this.depth]\n                : 'black';\n        ctx.strokeRect(x, y, width, height);\n        this.nodes.forEach(function (node) {\n            node.renderBounds(ctx);\n        });\n    };\n    return Node;\n}());\n\n\n\n//# sourceURL=webpack:///./src/utils/quad-tree.ts?");

/***/ }),

/***/ "./src/utils/timer.ts":
/*!****************************!*\
  !*** ./src/utils/timer.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Timer = /** @class */ (function () {\n    function Timer(interval) {\n        this.interval = interval;\n        this.now = 0;\n        this.dt = 0;\n        this.counter = 0;\n        this.last = 0;\n        this.tick = false;\n    }\n    Timer.prototype.start = function () {\n        this.now = this.last = performance.now();\n    };\n    Timer.prototype.update = function () {\n        if (this.last <= 0) {\n            this.start();\n        }\n        this.now = performance.now();\n        this.dt = this.now - this.last;\n        this.last = performance.now();\n        this.counter += this.dt;\n        if (this.counter >= this.interval) {\n            this.tick = true;\n            this.counter = 0;\n        }\n        else {\n            this.tick = false;\n        }\n    };\n    Timer.prototype.reset = function () {\n        this.counter = 0;\n        this.tick = false;\n    };\n    return Timer;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\n\n\n//# sourceURL=webpack:///./src/utils/timer.ts?");

/***/ }),

/***/ "./src/utils/uuid.ts":
/*!***************************!*\
  !*** ./src/utils/uuid.ts ***!
  \***************************/
/*! exports provided: uuidv4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uuidv4\", function() { return uuidv4; });\n/**\n * See https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript\n *\n * @export\n * @returns {string}\n */\nfunction uuidv4() {\n    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n        var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;\n        return v.toString(16);\n    });\n}\n\n\n//# sourceURL=webpack:///./src/utils/uuid.ts?");

/***/ })

/******/ });