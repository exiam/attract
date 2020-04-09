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

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _managers_scene_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./managers/scene.manager */ \"./src/managers/scene.manager.ts\");\n/* harmony import */ var _inputs_mouse_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs/mouse.controller */ \"./src/inputs/mouse.controller.ts\");\n\n\nvar Game = /** @class */ (function () {\n    function Game(options) {\n        this.options = options;\n        this.canvas = document.getElementById(options.canvas);\n        this.ctx = this.canvas.getContext('2d');\n        this.canvas.width = options.width;\n        this.canvas.height = options.height;\n        // Initialize inputs\n        this.mouseController = new _inputs_mouse_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.canvas);\n        // Initialize scene manager\n        this.sceneManager = new _managers_scene_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, options.scenes);\n        this.sceneManager.run(Object.keys(this.sceneManager.scenes)[0]);\n    }\n    Game.prototype.switchScene = function (sceneKey) {\n        this.sceneManager.run(sceneKey);\n    };\n    return Game;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/Game.ts?");

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

/***/ "./src/components/transform.component.ts":
/*!***********************************************!*\
  !*** ./src/components/transform.component.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Transform = /** @class */ (function () {\n    function Transform() {\n    }\n    return Transform;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transform);\n\n\n//# sourceURL=webpack:///./src/components/transform.component.ts?");

/***/ }),

/***/ "./src/entities/block.entity.ts":
/*!**************************************!*\
  !*** ./src/entities/block.entity.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/entities/entity.ts\");\n/* harmony import */ var _components_renderable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/renderable.component */ \"./src/components/renderable.component.ts\");\n/* harmony import */ var _components_movable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/movable.component */ \"./src/components/movable.component.ts\");\n/* harmony import */ var _components_transform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/transform.component */ \"./src/components/transform.component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\nvar Block = /** @class */ (function (_super) {\n    __extends(Block, _super);\n    function Block(initialValues) {\n        var _this = _super.call(this) || this;\n        _this.addComponent(_components_transform_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], __assign({ position: { x: 0, y: 0 } }, initialValues));\n        _this.addComponent(_components_movable_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            latency: 16,\n            velocity: { x: Math.random() > 0.5 ? 1 : -1, y: 1 },\n            moving: true,\n        });\n        _this.addComponent(_components_renderable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            width: 32,\n            height: 32,\n            color: '#000000',\n        });\n        return _this;\n    }\n    return Block;\n}(_entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\nBlock.tags = ['block'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Block);\n\n\n//# sourceURL=webpack:///./src/entities/block.entity.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_renderable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/renderable.component */ \"./src/components/renderable.component.ts\");\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity */ \"./src/entities/entity.ts\");\n/* harmony import */ var _components_movable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/movable.component */ \"./src/components/movable.component.ts\");\n/* harmony import */ var _components_transform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/transform.component */ \"./src/components/transform.component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\nvar Player = /** @class */ (function (_super) {\n    __extends(Player, _super);\n    function Player() {\n        var _this = _super.call(this) || this;\n        _this.addComponent(_components_transform_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { position: { x: 0, y: 0 } });\n        _this.addComponent(_components_renderable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n            width: 32,\n            height: 32,\n            color: '#69D2F5',\n        });\n        _this.addComponent(_components_movable_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { latency: 16, moving: false });\n        return _this;\n    }\n    return Player;\n}(_entity__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\nPlayer.tags = ['player'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n\n//# sourceURL=webpack:///./src/entities/player.entity.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n/* harmony import */ var _scenes_game_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/game.scene */ \"./src/scenes/game.scene.ts\");\n/* harmony import */ var _scenes_menu_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/menu.scene */ \"./src/scenes/menu.scene.ts\");\n\n\n\nnew _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    canvas: 'game',\n    width: 480,\n    height: 800,\n    scenes: [_scenes_menu_scene__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _scenes_game_scene__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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

/***/ "./src/managers/entity.manager.ts":
/*!****************************************!*\
  !*** ./src/managers/entity.manager.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/uuid */ \"./src/utils/uuid.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\n\nvar EntityManager = /** @class */ (function () {\n    function EntityManager() {\n        this.entities = {};\n        this.index = {};\n        this.tagIndex = {};\n    }\n    /**\n     * Add entity.\n     *\n     * @param {Entity} entity\n     * @memberof EntityManager\n     */\n    EntityManager.prototype.addEntity = function (entity) {\n        var _this = this;\n        var id;\n        do {\n            id = Object(_utils_uuid__WEBPACK_IMPORTED_MODULE_0__[\"uuidv4\"])();\n        } while (this.entities[id]);\n        entity.id = id;\n        this.entities[entity.id] = entity;\n        Object.keys(entity.components).forEach(function (component) {\n            if (!_this.index[component]) {\n                _this.index[component] = [];\n            }\n            _this.index[component].push(entity.id);\n        });\n        if (entity.constructor.tags) {\n            entity.constructor.tags.forEach(function (tag) {\n                if (!_this.tagIndex[tag]) {\n                    _this.tagIndex[tag] = [];\n                }\n                _this.tagIndex[tag].push(entity.id);\n            });\n        }\n    };\n    /**\n     * Remove entity.\n     *\n     * @param {Entity} entity\n     * @memberof EntityManager\n     */\n    EntityManager.prototype.removeEntity = function (entity) {\n        var _this = this;\n        Object.keys(entity.components).forEach(function (component) {\n            var index = _this.index[component].indexOf(entity.id);\n            _this.index[component].splice(index, 1);\n        });\n        if (entity.constructor.tags) {\n            entity.constructor.tags.forEach(function (tag) {\n                var index = _this.tagIndex[tag].indexOf(entity.id);\n                _this.tagIndex[tag].splice(index, 1);\n            });\n        }\n        delete this.entities[entity.id];\n    };\n    /**\n     * Return entities filtered by components.\n     *\n     * @param {IComponentConstructor<any>[]} components\n     * @returns {Entity[]}\n     * @memberof EntityManager\n     */\n    EntityManager.prototype.findByComponents = function (components) {\n        var _this = this;\n        var firstComponent = components[0].name;\n        return this.index[firstComponent].reduce(function (results, entityId) {\n            var entity = _this.entities[entityId];\n            if (components.every(function (_a) {\n                var name = _a.name;\n                return entity.hasComponent(name);\n            })) {\n                results.push(entity);\n            }\n            return results;\n        }, []);\n    };\n    /**\n     * Return entities filtered by tags.\n     *\n     * @param {string[]} tags\n     * @returns {Entity[]}\n     * @memberof EntityManager\n     */\n    EntityManager.prototype.findByTags = function (tags) {\n        var _this = this;\n        var entitiesIds = tags.reduce(function (results, tag) {\n            if (_this.tagIndex[tag]) {\n                results = __spreadArrays(results, _this.tagIndex[tag]);\n            }\n            return results;\n        }, []);\n        return entitiesIds.map(function (entityId) { return _this.entities[entityId]; });\n    };\n    return EntityManager;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (EntityManager);\n\n\n//# sourceURL=webpack:///./src/managers/entity.manager.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\nvar SceneManager = /** @class */ (function () {\n    function SceneManager(game, Scenes) {\n        this.game = game;\n        this.scenes = {};\n        this.load(Scenes);\n        this.lastTime = 0;\n    }\n    SceneManager.prototype.load = function (Scenes) {\n        for (var _i = 0, Scenes_1 = Scenes; _i < Scenes_1.length; _i++) {\n            var Scene = Scenes_1[_i];\n            var instance = new Scene(this.game);\n            this.scenes[instance.sceneKey] = instance;\n        }\n    };\n    SceneManager.prototype.run = function (scene) {\n        if (this.currentScene != null &&\n            typeof this.currentScene.end !== 'undefined') {\n            this.currentScene.end();\n        }\n        this.currentScene = this.scenes[scene];\n        this.currentScene.start();\n        this.loop();\n    };\n    SceneManager.prototype.loop = function () {\n        var _this = this;\n        var now = performance.now();\n        // Render\n        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);\n        var delta = now - this.lastTime;\n        this.currentScene.update(delta / 1000);\n        this.lastTime = now;\n        requestAnimationFrame(function () {\n            _this.loop();\n        });\n    };\n    return SceneManager;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (SceneManager);\n\n\n//# sourceURL=webpack:///./src/managers/scene.manager.ts?");

/***/ }),

/***/ "./src/managers/system.manager.ts":
/*!****************************************!*\
  !*** ./src/managers/system.manager.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar SystemManager = /** @class */ (function () {\n    function SystemManager() {\n        this.systems = [];\n    }\n    SystemManager.prototype.registerSystem = function (system) {\n        this.systems.push(system);\n    };\n    return SystemManager;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (SystemManager);\n\n\n//# sourceURL=webpack:///./src/managers/system.manager.ts?");

/***/ }),

/***/ "./src/scenes/game.scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/game.scene.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _entities_player_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/player.entity */ \"./src/entities/player.entity.ts\");\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene */ \"./src/scenes/scene.ts\");\n/* harmony import */ var _systems_render_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../systems/render.system */ \"./src/systems/render.system.ts\");\n/* harmony import */ var _systems_spawn_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../systems/spawn.system */ \"./src/systems/spawn.system.ts\");\n/* harmony import */ var _systems_movement_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../systems/movement.system */ \"./src/systems/movement.system.ts\");\n/* harmony import */ var _systems_player_control_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../systems/player-control.system */ \"./src/systems/player-control.system.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\n\n\nvar GameScene = /** @class */ (function (_super) {\n    __extends(GameScene, _super);\n    function GameScene() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.sceneKey = 'game';\n        return _this;\n    }\n    GameScene.prototype.start = function () {\n        this.addEntity(new _entities_player_entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n    };\n    return GameScene;\n}(_scene__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\nGameScene.systems = [_systems_render_system__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _systems_spawn_system__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _systems_movement_system__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _systems_player_control_system__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameScene);\n\n\n//# sourceURL=webpack:///./src/scenes/game.scene.ts?");

/***/ }),

/***/ "./src/scenes/menu.scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/menu.scene.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ \"./src/scenes/scene.ts\");\n/* harmony import */ var _systems_hud_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../systems/hud.system */ \"./src/systems/hud.system.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar MenuScene = /** @class */ (function (_super) {\n    __extends(MenuScene, _super);\n    function MenuScene() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.sceneKey = 'menu';\n        _this.clickCallback = function () {\n            _this.game.switchScene('game');\n        };\n        return _this;\n    }\n    MenuScene.prototype.start = function () {\n        this.game.canvas.addEventListener('click', this.clickCallback);\n    };\n    MenuScene.prototype.end = function () {\n        this.game.canvas.removeEventListener('click', this.clickCallback);\n    };\n    return MenuScene;\n}(_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\nMenuScene.systems = [_systems_hud_system__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuScene);\n\n\n//# sourceURL=webpack:///./src/scenes/menu.scene.ts?");

/***/ }),

/***/ "./src/scenes/scene.ts":
/*!*****************************!*\
  !*** ./src/scenes/scene.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _managers_entity_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../managers/entity.manager */ \"./src/managers/entity.manager.ts\");\n/* harmony import */ var _managers_system_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../managers/system.manager */ \"./src/managers/system.manager.ts\");\n\n\nvar Scene = /** @class */ (function () {\n    function Scene(game) {\n        var _this = this;\n        this.game = game;\n        this.entityManager = new _managers_entity_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.systemManager = new _managers_system_manager__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.constructor.systems.forEach(function (SystemClass) {\n            _this.systemManager.registerSystem(new SystemClass(_this));\n        });\n    }\n    /**\n     * Add entity to scene.\n     *\n     * @param {Entity} entity\n     * @returns\n     * @memberof Scene\n     */\n    Scene.prototype.addEntity = function (entity) {\n        this.entityManager.addEntity(entity);\n        return this;\n    };\n    /**\n     * Update scene by executing systems.\n     *\n     * @param {number} dt\n     * @memberof Scene\n     */\n    Scene.prototype.update = function (dt) {\n        this.systemManager.systems.forEach(function (system) {\n            if (!system.initialized) {\n                system.initialize();\n            }\n            system.execute(dt);\n        });\n    };\n    return Scene;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n\n//# sourceURL=webpack:///./src/scenes/scene.ts?");

/***/ }),

/***/ "./src/systems/hud.system.ts":
/*!***********************************!*\
  !*** ./src/systems/hud.system.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system */ \"./src/systems/system.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar HudSystem = /** @class */ (function (_super) {\n    __extends(HudSystem, _super);\n    function HudSystem() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    HudSystem.prototype.execute = function () {\n        // Title\n        this.game.ctx.fillStyle = '#444444';\n        this.game.ctx.font = '32px Georgia';\n        this.game.ctx.fillText('Attract', this.game.canvas.width / 2 - 100, this.game.canvas.height / 2);\n        // Indication\n        this.game.ctx.font = '16px Georgia';\n        this.game.ctx.fillText('Click to play', this.game.canvas.width / 2 + 10, this.game.canvas.height / 2);\n    };\n    return HudSystem;\n}(_system__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (HudSystem);\n\n\n//# sourceURL=webpack:///./src/systems/hud.system.ts?");

/***/ }),

/***/ "./src/systems/movement.system.ts":
/*!****************************************!*\
  !*** ./src/systems/movement.system.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system */ \"./src/systems/system.ts\");\n/* harmony import */ var _components_movable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/movable.component */ \"./src/components/movable.component.ts\");\n/* harmony import */ var _components_transform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/transform.component */ \"./src/components/transform.component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\nvar MovementSystem = /** @class */ (function (_super) {\n    __extends(MovementSystem, _super);\n    function MovementSystem() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    MovementSystem.prototype.execute = function (dt) {\n        var _this = this;\n        var entities = this.query('movable');\n        entities.forEach(function (entity) {\n            var movement = entity.getComponent(_components_movable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n            var position = entity.getComponent(_components_transform_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).position;\n            if (movement.destination) {\n                var toPointX = movement.destination.x - position.x;\n                var toPointY = movement.destination.y - position.y;\n                position.x += toPointX / movement.latency;\n                position.y += toPointY / movement.latency;\n            }\n            if (movement.velocity) {\n                position.x += movement.velocity.x;\n                position.y += movement.velocity.y;\n            }\n            // Check boundaries\n            if (position.y > _this.game.canvas.height) {\n                if (!entity.hasTag('player')) {\n                    _this.entityManager.removeEntity(entity);\n                    return;\n                }\n            }\n            if (position.x > _this.game.canvas.width) {\n                position.x = 0;\n            }\n            else if (position.x < 0) {\n                position.x = _this.game.canvas.width;\n            }\n        });\n    };\n    return MovementSystem;\n}(_system__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\nMovementSystem.queries = {\n    movable: {\n        components: [_components_movable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _components_transform_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]],\n    },\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovementSystem);\n\n\n//# sourceURL=webpack:///./src/systems/movement.system.ts?");

/***/ }),

/***/ "./src/systems/player-control.system.ts":
/*!**********************************************!*\
  !*** ./src/systems/player-control.system.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system */ \"./src/systems/system.ts\");\n/* harmony import */ var _components_renderable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/renderable.component */ \"./src/components/renderable.component.ts\");\n/* harmony import */ var _components_movable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/movable.component */ \"./src/components/movable.component.ts\");\n/* harmony import */ var _components_transform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/transform.component */ \"./src/components/transform.component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\nvar PlayerControlSystem = /** @class */ (function (_super) {\n    __extends(PlayerControlSystem, _super);\n    function PlayerControlSystem() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    PlayerControlSystem.prototype.initialize = function () {\n        var _this = this;\n        this.game.mouseController.on('click', function () {\n            console.warn('click');\n            _this.onClick();\n        });\n        _super.prototype.initialize.call(this);\n    };\n    PlayerControlSystem.prototype.onClick = function () {\n        var player = this.query('player')[0];\n        var movable = player.getComponent(_components_movable_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n        movable.destination = __assign({}, this.game.mouseController.click);\n    };\n    PlayerControlSystem.prototype.execute = function (dt) {\n        var player = this.query('player')[0];\n        var position = player.getComponent(_components_transform_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).position;\n        var render = player.getComponent(_components_renderable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        var posX = position.x + render.width / 2;\n        var posY = position.y + render.height / 2;\n        var toMouseX = this.game.mouseController.position.x - posX;\n        var toMouseY = this.game.mouseController.position.y - posY;\n        this.game.ctx.beginPath();\n        this.game.ctx.moveTo(posX, posY);\n        this.game.ctx.lineTo(posX + toMouseX, posY + toMouseY);\n        this.game.ctx.strokeStyle = '#ff0000';\n        this.game.ctx.stroke();\n    };\n    return PlayerControlSystem;\n}(_system__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\nPlayerControlSystem.queries = {\n    player: {\n        tags: ['player'],\n    },\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerControlSystem);\n\n\n//# sourceURL=webpack:///./src/systems/player-control.system.ts?");

/***/ }),

/***/ "./src/systems/render.system.ts":
/*!**************************************!*\
  !*** ./src/systems/render.system.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_renderable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/renderable.component */ \"./src/components/renderable.component.ts\");\n/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system */ \"./src/systems/system.ts\");\n/* harmony import */ var _components_transform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/transform.component */ \"./src/components/transform.component.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\nvar RenderSystem = /** @class */ (function (_super) {\n    __extends(RenderSystem, _super);\n    function RenderSystem() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    RenderSystem.prototype.execute = function () {\n        var _this = this;\n        var entities = this.query('renderable');\n        entities.forEach(function (entity) {\n            var render = entity.getComponent(_components_renderable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n            var position = entity.getComponent(_components_transform_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).position;\n            _this.game.ctx.fillStyle = render.color;\n            _this.game.ctx.fillRect(position.x, position.y, render.width, render.height);\n        });\n    };\n    return RenderSystem;\n}(_system__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\nRenderSystem.queries = {\n    renderable: {\n        components: [_components_renderable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _components_transform_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RenderSystem);\n\n\n//# sourceURL=webpack:///./src/systems/render.system.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\nvar System = /** @class */ (function () {\n    function System(scene) {\n        this.scene = scene;\n        this.initialized = false;\n    }\n    System.prototype.initialize = function () {\n        this.initialized = true;\n    };\n    System.prototype.query = function (queryKey) {\n        var query = this.constructor.queries[queryKey];\n        if (query.components) {\n            return this.entityManager.findByComponents(query.components);\n        }\n        if (query.tags) {\n            return this.entityManager.findByTags(query.tags);\n        }\n        return [];\n    };\n    Object.defineProperty(System.prototype, \"game\", {\n        get: function () {\n            return this.scene.game;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(System.prototype, \"entityManager\", {\n        get: function () {\n            return this.scene.entityManager;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return System;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (System);\n\n\n//# sourceURL=webpack:///./src/systems/system.ts?");

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