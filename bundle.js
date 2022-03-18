/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/js/business/index.js":
/*!**********************************!*\
  !*** ./src/js/business/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_stateStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/stateStore */ "./src/js/constants/stateStore.js");
/* harmony import */ var _modules_stateStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/stateStore */ "./src/js/modules/stateStore.js");
/* harmony import */ var _modules_fetcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/fetcher */ "./src/js/modules/fetcher.js");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/validation */ "./src/js/utils/validation.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/util */ "./src/js/utils/util.js");
/* harmony import */ var _modules_video__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modules/video */ "./src/js/modules/video.js");
/* harmony import */ var _constants_fetcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants/fetcher */ "./src/js/constants/fetcher.js");
/* harmony import */ var _modules_webStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../modules/webStore */ "./src/js/modules/webStore.js");
/* harmony import */ var _modules_eventFactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modules/eventFactory */ "./src/js/modules/eventFactory.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constants/events */ "./src/js/constants/events.js");
/* harmony import */ var _constants_webStore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constants/webStore */ "./src/js/constants/webStore.js");
/* harmony import */ var _constants_errorMessage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../constants/errorMessage */ "./src/js/constants/errorMessage.js");
/* harmony import */ var _modules_cacheStore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../modules/cacheStore */ "./src/js/modules/cacheStore.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
















var AppBusiness = /*#__PURE__*/function () {
  function AppBusiness() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AppBusiness);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "onClickSearchModalButton", function (_ref) {
      var targetId = _ref.detail.targetId;

      if (targetId === 'search-modal-button') {
        (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.IS_MODAL_SHOW, true);
        return;
      }

      if (targetId === 'watch-video-section-button' || targetId === 'watched-video-section-button') {
        (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.CURRENT_APP_SECTION, targetId);
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "onClickOutsideModal", function () {
      (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.IS_MODAL_SHOW, false);
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "onSubmitSearchKeyword", /*#__PURE__*/function () {
      var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(_ref2) {
        var keyword, searchResult, _this$extractSearchRe, nextPageToken, videoList, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                keyword = _ref2.detail.keyword;
                _context.prev = 1;
                _context.next = 4;
                return _this.requestSearchVideoList(keyword);

              case 4:
                searchResult = _context.sent;

                if (!(0,_utils_validation__WEBPACK_IMPORTED_MODULE_10__.isNoneSearchResult)(searchResult)) {
                  _context.next = 8;
                  break;
                }

                (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.SEARCH_RESULT, {
                  keyword: null,
                  nextPageToken: null,
                  videoList: null,
                  prevVideoListLength: 0
                });
                return _context.abrupt("return");

              case 8:
                _this$extractSearchRe = _this.extractSearchResult(searchResult), nextPageToken = _this$extractSearchRe.nextPageToken, videoList = _this$extractSearchRe.videoList;
                (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.SEARCH_RESULT, {
                  keyword: keyword,
                  nextPageToken: nextPageToken,
                  videoList: videoList,
                  prevVideoListLength: 0
                });
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                message = _context.t0.message;
                alert(message);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 12]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "onLoadNewVideoList", /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee2() {
      var _getState, keyword, currentPageToken, searchResult, _this$extractSearchRe2, nextPageToken, videoList, message;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _getState = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.getState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.SEARCH_RESULT), keyword = _getState.keyword, currentPageToken = _getState.nextPageToken;
              _context2.prev = 1;
              _context2.next = 4;
              return _this.requestSearchVideoList(keyword, currentPageToken);

            case 4:
              searchResult = _context2.sent;
              _this$extractSearchRe2 = _this.extractSearchResult(searchResult), nextPageToken = _this$extractSearchRe2.nextPageToken, videoList = _this$extractSearchRe2.videoList;
              (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.SEARCH_RESULT, function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  keyword: keyword,
                  nextPageToken: nextPageToken,
                  videoList: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.videoList), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(videoList)),
                  prevVideoListLength: prevState.videoList.length
                });
              });
              _context2.next = 13;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              message = _context2.t0.message;
              alert(message);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9]]);
    })));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "onClickSaveButton", /*#__PURE__*/function () {
      var _ref8 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee3(_ref7) {
        var saveVideoId, videoIdList, savedVideo, message;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                saveVideoId = _ref7.detail.saveVideoId;
                videoIdList = _modules_webStore__WEBPACK_IMPORTED_MODULE_14__["default"].getArrayData(_constants_webStore__WEBPACK_IMPORTED_MODULE_17__.WEB_STORE_KEY.SAVED_VIDEO_LIST_KEY);

                if (!(0,_utils_validation__WEBPACK_IMPORTED_MODULE_10__.isMoreThanMaxVideoCount)(videoIdList)) {
                  _context3.next = 5;
                  break;
                }

                alert(_constants_errorMessage__WEBPACK_IMPORTED_MODULE_18__.ERROR_MESSAGE.SAVE_VIDEO_COUNT_OVER);
                return _context3.abrupt("return");

              case 5:
                _context3.prev = 5;
                _context3.next = 8;
                return _this.requestVideoById(saveVideoId);

              case 8:
                savedVideo = _context3.sent;

                /** webStore, stateStore에 정보를 set해준다. */
                _modules_webStore__WEBPACK_IMPORTED_MODULE_14__["default"].setData(_constants_webStore__WEBPACK_IMPORTED_MODULE_17__.WEB_STORE_KEY.SAVED_VIDEO_LIST_KEY, function (prev) {
                  return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [saveVideoId]);
                });
                (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.SAVED_VIDEO, function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    videoList: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevState.videoList), [savedVideo]),
                    prevVideoListLength: prevState.videoList.length
                  });
                });
                _context3.next = 17;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](5);
                message = _context3.t0.message;
                alert(message);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 13]]);
      }));

      return function (_x2) {
        return _ref8.apply(this, arguments);
      };
    }());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "onLoadTopLevelComponent", /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee4() {
      var _webStore$getArrayDat;

      var savedVideoIdList, savedVideoList, message;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              savedVideoIdList = (_webStore$getArrayDat = _modules_webStore__WEBPACK_IMPORTED_MODULE_14__["default"].getArrayData(_constants_webStore__WEBPACK_IMPORTED_MODULE_17__.WEB_STORE_KEY.SAVED_VIDEO_LIST_KEY)) !== null && _webStore$getArrayDat !== void 0 ? _webStore$getArrayDat : [];
              _context4.prev = 1;
              (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.IS_SAVED_VIDEO_WAITING, true);
              _context4.next = 5;
              return Promise.all(savedVideoIdList.map(function (savedVideoId) {
                return _this.requestVideoById(savedVideoId);
              }));

            case 5:
              savedVideoList = _context4.sent;
              (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.IS_SAVED_VIDEO_WAITING, false);
              (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.SAVED_VIDEO, function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  videoList: savedVideoList,
                  prevVideoListLength: 0
                });
              });
              _context4.next = 14;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](1);
              message = _context4.t0.message;
              alert(message);

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 10]]);
    })));

    (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_15__.bind)(_constants_events__WEBPACK_IMPORTED_MODULE_16__.CUSTOM_EVENT_KEY.CLICK_SEARCH_MODAL_BUTTON, this.onClickSearchModalButton);
    (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_15__.bind)(_constants_events__WEBPACK_IMPORTED_MODULE_16__.CUSTOM_EVENT_KEY.CLICK_OUTSIDE_MODAL, this.onClickOutsideModal);
    (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_15__.bind)(_constants_events__WEBPACK_IMPORTED_MODULE_16__.CUSTOM_EVENT_KEY.SUBMIT_SEARCH_KEYWORD, this.onSubmitSearchKeyword);
    (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_15__.bind)(_constants_events__WEBPACK_IMPORTED_MODULE_16__.CUSTOM_EVENT_KEY.LOAD_NEW_VIDEO_LIST, this.onLoadNewVideoList);
    (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_15__.bind)(_constants_events__WEBPACK_IMPORTED_MODULE_16__.CUSTOM_EVENT_KEY.CLICK_SAVE_BUTTON, this.onClickSaveButton);
    (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_15__.bind)(_constants_events__WEBPACK_IMPORTED_MODULE_16__.CUSTOM_EVENT_KEY.CLICK_SAVED_DELETE_BUTTON, this.onClickSavedDeleteButton);
    (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_15__.bind)(_constants_events__WEBPACK_IMPORTED_MODULE_16__.CUSTOM_EVENT_KEY.CLICK_SAVED_CHECK_BUTTON, this.onClickSavedCheckButton);
    (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_15__.bind)(_constants_events__WEBPACK_IMPORTED_MODULE_16__.CUSTOM_EVENT_KEY.INITIALIZE_SAVED_VIDEO_STATE, this.onLoadTopLevelComponent);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AppBusiness, [{
    key: "onClickSavedDeleteButton",
    value: function onClickSavedDeleteButton(_ref12) {
      var savedVideoId = _ref12.detail.savedVideoId;

      if (confirm('정말로 삭제하시겠습니까?')) {
        var _getState2 = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.getState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.SAVED_VIDEO),
            savedVideoList = _getState2.videoList;

        var newSavedVideoList = savedVideoList.filter(function (video) {
          var _video$getVideoInfo = video.getVideoInfo(),
              videoId = _video$getVideoInfo.videoId;

          return videoId !== savedVideoId;
        });
        (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.SAVED_VIDEO, function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            videoList: newSavedVideoList,
            prevVideoListLength: 0
          });
        });
        var savedVideoIdList = _modules_webStore__WEBPACK_IMPORTED_MODULE_14__["default"].getArrayData(_constants_webStore__WEBPACK_IMPORTED_MODULE_17__.WEB_STORE_KEY.SAVED_VIDEO_LIST_KEY);
        var newSavedVideoIdList = savedVideoIdList.filter(function (videoId) {
          return videoId !== savedVideoId;
        });
        _modules_webStore__WEBPACK_IMPORTED_MODULE_14__["default"].setData(_constants_webStore__WEBPACK_IMPORTED_MODULE_17__.WEB_STORE_KEY.SAVED_VIDEO_LIST_KEY, newSavedVideoIdList);
      }
    }
  }, {
    key: "onClickSavedCheckButton",
    value: function onClickSavedCheckButton(_ref13) {
      var _ref13$detail = _ref13.detail,
          savedVideoId = _ref13$detail.savedVideoId,
          element = _ref13$detail.element;
      var className = element.className;

      if (className.includes('checked')) {
        _modules_webStore__WEBPACK_IMPORTED_MODULE_14__["default"].setData(_constants_webStore__WEBPACK_IMPORTED_MODULE_17__.WEB_STORE_KEY.WATCHED_VIDEO_LIST_KEY, function (prev) {
          return prev.filter(function (videoId) {
            return savedVideoId !== videoId;
          });
        });
        (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.WATCHED_VIDEO, _modules_webStore__WEBPACK_IMPORTED_MODULE_14__["default"].getArrayData(_constants_webStore__WEBPACK_IMPORTED_MODULE_17__.WEB_STORE_KEY.WATCHED_VIDEO_LIST_KEY));
        return;
      }

      _modules_webStore__WEBPACK_IMPORTED_MODULE_14__["default"].setData(_constants_webStore__WEBPACK_IMPORTED_MODULE_17__.WEB_STORE_KEY.WATCHED_VIDEO_LIST_KEY, function (prev) {
        return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prev), [savedVideoId]);
      });
      (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.WATCHED_VIDEO, _modules_webStore__WEBPACK_IMPORTED_MODULE_14__["default"].getArrayData(_constants_webStore__WEBPACK_IMPORTED_MODULE_17__.WEB_STORE_KEY.WATCHED_VIDEO_LIST_KEY));
    }
  }, {
    key: "requestSearchVideoList",
    value: function () {
      var _requestSearchVideoList = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee5(keyword, pageToken) {
        var alreadyData, searchResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.IS_SEARCH_VIDEO_WAITING, true);
                alreadyData = (0,_modules_cacheStore__WEBPACK_IMPORTED_MODULE_19__.getCacheData)("".concat(keyword, "-").concat(pageToken));

                if (!alreadyData) {
                  _context5.next = 5;
                  break;
                }

                (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.IS_SEARCH_VIDEO_WAITING, false);
                return _context5.abrupt("return", alreadyData);

              case 5:
                _context5.next = 7;
                return (0,_modules_fetcher__WEBPACK_IMPORTED_MODULE_9__.youtubeAPIFetcher)({
                  path: _constants_fetcher__WEBPACK_IMPORTED_MODULE_13__.API_PATHS.SEARCH,
                  params: {
                    q: keyword,
                    part: 'snippet',
                    maxResults: 10,
                    type: 'video',
                    pageToken: pageToken !== null && pageToken !== void 0 ? pageToken : ''
                  }
                });

              case 7:
                searchResult = _context5.sent;
                (0,_modules_cacheStore__WEBPACK_IMPORTED_MODULE_19__.setCacheData)("".concat(keyword, "-").concat(pageToken), searchResult);
                (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_8__.setState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.IS_SEARCH_VIDEO_WAITING, false);
                return _context5.abrupt("return", searchResult);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function requestSearchVideoList(_x3, _x4) {
        return _requestSearchVideoList.apply(this, arguments);
      }

      return requestSearchVideoList;
    }()
    /** 한 가지일만 하도록 구현한다. */

  }, {
    key: "requestVideoById",
    value: function () {
      var _requestVideoById = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee6(id) {
        var videoResult, _parserVideos, _parserVideos$items, videoInfos;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0,_modules_fetcher__WEBPACK_IMPORTED_MODULE_9__.youtubeAPIFetcher)({
                  path: _constants_fetcher__WEBPACK_IMPORTED_MODULE_13__.API_PATHS.GET_VIDEO,
                  params: {
                    id: id,
                    part: 'snippet'
                  }
                });

              case 2:
                videoResult = _context6.sent;
                _parserVideos = (0,_utils_util__WEBPACK_IMPORTED_MODULE_11__.parserVideos)(videoResult), _parserVideos$items = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_parserVideos.items, 1), videoInfos = _parserVideos$items[0];
                return _context6.abrupt("return", _modules_video__WEBPACK_IMPORTED_MODULE_12__["default"].create(_objectSpread(_objectSpread({}, videoInfos), {}, {
                  videoId: id
                })));

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function requestVideoById(_x5) {
        return _requestVideoById.apply(this, arguments);
      }

      return requestVideoById;
    }()
    /** 검색 API 결과로 부터, videoList - nextPageToken 값을 추출한다. */

  }, {
    key: "extractSearchResult",
    value: function extractSearchResult(searchResult) {
      var _parserVideos2 = (0,_utils_util__WEBPACK_IMPORTED_MODULE_11__.parserVideos)(searchResult),
          videoInfos = _parserVideos2.items,
          nextPageToken = _parserVideos2.nextPageToken;

      var videoList = videoInfos.map(function (videoInfo) {
        return _modules_video__WEBPACK_IMPORTED_MODULE_12__["default"].create(videoInfo);
      });
      return {
        nextPageToken: nextPageToken,
        videoList: videoList
      };
    }
  }]);

  return AppBusiness;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppBusiness);

/***/ }),

/***/ "./src/js/components/SearchFormComponent.js":
/*!**************************************************!*\
  !*** ./src/js/components/SearchFormComponent.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _constants_errorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/errorMessage */ "./src/js/constants/errorMessage.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/events */ "./src/js/constants/events.js");
/* harmony import */ var _modules_eventFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/eventFactory */ "./src/js/modules/eventFactory.js");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/validation */ "./src/js/utils/validation.js");






function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }






var _parentElement = /*#__PURE__*/new WeakMap();

var _mount = /*#__PURE__*/new WeakSet();

var _initDOM = /*#__PURE__*/new WeakSet();

var _bindEventHandler = /*#__PURE__*/new WeakSet();

var _dispatchSubmitSearchKeyword = /*#__PURE__*/new WeakSet();

var _generateTemplate = /*#__PURE__*/new WeakSet();

var SearchFormComponent = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function SearchFormComponent(parentElement) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SearchFormComponent);

  _classPrivateMethodInitSpec(this, _generateTemplate);

  _classPrivateMethodInitSpec(this, _dispatchSubmitSearchKeyword);

  _classPrivateMethodInitSpec(this, _bindEventHandler);

  _classPrivateMethodInitSpec(this, _initDOM);

  _classPrivateMethodInitSpec(this, _mount);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "$searchButton", null);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "$searchInput", null);

  _classPrivateFieldInitSpec(this, _parentElement, {
    writable: true,
    value: void 0
  });

  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _parentElement, parentElement);

  _classPrivateMethodGet(this, _mount, _mount2).call(this);

  _classPrivateMethodGet(this, _initDOM, _initDOM2).call(this);

  _classPrivateMethodGet(this, _bindEventHandler, _bindEventHandler2).call(this);
});

function _mount2() {
  var template = _classPrivateMethodGet(this, _generateTemplate, _generateTemplate2).call(this);

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _parentElement).insertAdjacentHTML('beforeend', template);
}

function _initDOM2() {
  this.$searchButton = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _parentElement).querySelector('#search-button');
  this.$searchInput = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _parentElement).querySelector('#search-input-keyword');
}

function _bindEventHandler2() {
  var _this = this;

  this.$searchButton.addEventListener('click', function () {
    _classPrivateMethodGet(_this, _dispatchSubmitSearchKeyword, _dispatchSubmitSearchKeyword2).call(_this);
  });
  this.$searchInput.addEventListener('keypress', function (e) {
    if (e.key !== 'Enter') {
      return;
    }

    _classPrivateMethodGet(_this, _dispatchSubmitSearchKeyword, _dispatchSubmitSearchKeyword2).call(_this);
  });
}

function _dispatchSubmitSearchKeyword2() {
  var value = this.$searchInput.value;

  if ((0,_utils_validation__WEBPACK_IMPORTED_MODULE_8__.isEmptyKeyword)(value)) {
    alert(_constants_errorMessage__WEBPACK_IMPORTED_MODULE_5__.ERROR_MESSAGE.EMPTY_KEYWORD);
    return;
  }

  (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_7__.dispatch)(_constants_events__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_EVENT_KEY.SUBMIT_SEARCH_KEYWORD, {
    detail: {
      keyword: value
    }
  });
}

function _generateTemplate2() {
  return "\n        <section class=\"search-input\">\n            <h3 hidden>\uAC80\uC0C9\uC5B4 \uC785\uB825</h3>\n            <input id=\"search-input-keyword\" type=\"text\" placeholder=\"\uAC80\uC0C9\" class=\"search-input__keyword\">\n            <button id=\"search-button\" class=\"search-input__search-button button\">\uAC80\uC0C9</button>\n        </section>\n    ";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchFormComponent);

/***/ }),

/***/ "./src/js/components/SearchModalComponent.js":
/*!***************************************************!*\
  !*** ./src/js/components/SearchModalComponent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _SearchFormComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchFormComponent */ "./src/js/components/SearchFormComponent.js");
/* harmony import */ var _modules_stateStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/stateStore */ "./src/js/modules/stateStore.js");
/* harmony import */ var _constants_stateStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/stateStore */ "./src/js/constants/stateStore.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/events */ "./src/js/constants/events.js");
/* harmony import */ var _modules_eventFactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/eventFactory */ "./src/js/modules/eventFactory.js");
/* harmony import */ var _SearchResultComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SearchResultComponent */ "./src/js/components/SearchResultComponent.js");






function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }








var _parentElement = /*#__PURE__*/new WeakMap();

var _mount = /*#__PURE__*/new WeakSet();

var _initDOM = /*#__PURE__*/new WeakSet();

var _initChildrenComponent = /*#__PURE__*/new WeakSet();

var _bindEventHandler = /*#__PURE__*/new WeakSet();

var _subscribeStore = /*#__PURE__*/new WeakSet();

var _render = /*#__PURE__*/new WeakSet();

var _generateTemplate = /*#__PURE__*/new WeakSet();

var SearchModalComponent = /*#__PURE__*/function () {
  function SearchModalComponent(parentElement) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchModalComponent);

    _classPrivateMethodInitSpec(this, _generateTemplate);

    _classPrivateMethodInitSpec(this, _render);

    _classPrivateMethodInitSpec(this, _subscribeStore);

    _classPrivateMethodInitSpec(this, _bindEventHandler);

    _classPrivateMethodInitSpec(this, _initChildrenComponent);

    _classPrivateMethodInitSpec(this, _initDOM);

    _classPrivateMethodInitSpec(this, _mount);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "searchFormComponent", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "videoContainerComponent", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "$searchModal", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "$modalContainer", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "$dimmer", null);

    _classPrivateFieldInitSpec(this, _parentElement, {
      writable: true,
      value: null
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _parentElement, parentElement);

    _classPrivateMethodGet(this, _mount, _mount2).call(this);

    _classPrivateMethodGet(this, _initDOM, _initDOM2).call(this);

    _classPrivateMethodGet(this, _initChildrenComponent, _initChildrenComponent2).call(this);

    _classPrivateMethodGet(this, _bindEventHandler, _bindEventHandler2).call(this);

    _classPrivateMethodGet(this, _subscribeStore, _subscribeStore2).call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchModalComponent, [{
    key: "wakeUp",
    value: function wakeUp(stateKey) {
      var stateValue = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_6__.getState)(stateKey);

      _classPrivateMethodGet(this, _render, _render2).call(this, stateValue);
    }
  }]);

  return SearchModalComponent;
}();

function _mount2() {
  var template = _classPrivateMethodGet(this, _generateTemplate, _generateTemplate2).call(this);

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _parentElement).insertAdjacentHTML('beforeend', template);
}

function _initDOM2() {
  this.$modalContainer = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _parentElement).querySelector('.modal-container');
  this.$searchModal = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _parentElement).querySelector('.search-modal');
  this.$dimmer = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _parentElement).querySelector('.dimmer');
}

function _initChildrenComponent2() {
  this.searchFormComponent = new _SearchFormComponent__WEBPACK_IMPORTED_MODULE_5__["default"](this.$searchModal);
  this.videoContainerComponent = new _SearchResultComponent__WEBPACK_IMPORTED_MODULE_10__["default"](this.$searchModal);
}

function _bindEventHandler2() {
  this.$dimmer.addEventListener('click', function () {
    (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_9__.dispatch)(_constants_events__WEBPACK_IMPORTED_MODULE_8__.CUSTOM_EVENT_KEY.CLICK_OUTSIDE_MODAL);
  });
}

function _subscribeStore2() {
  var initalIsModalShow = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_6__.subscribe)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_7__.STATE_STORE_KEY.IS_MODAL_SHOW, this);

  _classPrivateMethodGet(this, _render, _render2).call(this, initalIsModalShow);
}

function _render2(isModalShow) {
  if (isModalShow) {
    this.$modalContainer.classList.remove('hide');
    return;
  }

  this.$modalContainer.classList.add('hide');
}

function _generateTemplate2() {
  return "\n    <div class=\"modal-container\">\n    <div class=\"dimmer\"></div>\n    <div class=\"search-modal\" role=\"dialog\" aria-labelledby=\"search-modal-title\">\n      <h2 id=\"search-modal-title\" class=\"search-modal__title\">\uD83D\uDD0D \uBCF4\uACE0\uC2F6\uC740 \uC601\uC0C1 \uCC3E\uAE30 \uD83D\uDD0D</h2>\n    </div>\n  </div>\n        ";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchModalComponent);

/***/ }),

/***/ "./src/js/components/SearchResultComponent.js":
/*!****************************************************!*\
  !*** ./src/js/components/SearchResultComponent.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/components */ "./src/js/constants/components.js");
/* harmony import */ var _constants_stateStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/stateStore */ "./src/js/constants/stateStore.js");
/* harmony import */ var _modules_stateStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/stateStore */ "./src/js/modules/stateStore.js");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/validation */ "./src/js/utils/validation.js");
/* harmony import */ var _VideoListComponent_SearchVideoListComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VideoListComponent/SearchVideoListComponent */ "./src/js/components/VideoListComponent/SearchVideoListComponent.js");





function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }







var _parentElement = /*#__PURE__*/new WeakMap();

var _videoListComponent = /*#__PURE__*/new WeakMap();

var _mount = /*#__PURE__*/new WeakSet();

var _initDOM = /*#__PURE__*/new WeakSet();

var _initChildrenComponent = /*#__PURE__*/new WeakSet();

var _subscribeStore = /*#__PURE__*/new WeakSet();

var _renderSearchResult = /*#__PURE__*/new WeakSet();

var _renderSkeletonVideoList = /*#__PURE__*/new WeakSet();

var _generateTemplate = /*#__PURE__*/new WeakSet();

var SearchResultComponent = /*#__PURE__*/function () {
  function SearchResultComponent(parentElement) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchResultComponent);

    _classPrivateMethodInitSpec(this, _generateTemplate);

    _classPrivateMethodInitSpec(this, _renderSkeletonVideoList);

    _classPrivateMethodInitSpec(this, _renderSearchResult);

    _classPrivateMethodInitSpec(this, _subscribeStore);

    _classPrivateMethodInitSpec(this, _initChildrenComponent);

    _classPrivateMethodInitSpec(this, _initDOM);

    _classPrivateMethodInitSpec(this, _mount);

    _classPrivateFieldInitSpec(this, _parentElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _videoListComponent, {
      writable: true,
      value: null
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _parentElement, parentElement);

    _classPrivateMethodGet(this, _mount, _mount2).call(this);

    _classPrivateMethodGet(this, _initDOM, _initDOM2).call(this);

    _classPrivateMethodGet(this, _initChildrenComponent, _initChildrenComponent2).call(this);

    _classPrivateMethodGet(this, _subscribeStore, _subscribeStore2).call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchResultComponent, [{
    key: "wakeUp",
    value: function wakeUp(stateKey) {
      var stateValue = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_6__.getState)(stateKey);

      if (stateKey === _constants_stateStore__WEBPACK_IMPORTED_MODULE_5__.STATE_STORE_KEY.IS_SEARCH_VIDEO_WAITING) {
        _classPrivateMethodGet(this, _renderSkeletonVideoList, _renderSkeletonVideoList2).call(this, stateValue);
      }

      if (stateKey === _constants_stateStore__WEBPACK_IMPORTED_MODULE_5__.STATE_STORE_KEY.SEARCH_RESULT) {
        _classPrivateMethodGet(this, _renderSearchResult, _renderSearchResult2).call(this, stateValue);
      }
    }
  }]);

  return SearchResultComponent;
}();

function _mount2() {
  var template = _classPrivateMethodGet(this, _generateTemplate, _generateTemplate2).call(this);

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _parentElement).insertAdjacentHTML('beforeend', template);
}

function _initDOM2() {
  this.$searchResult = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _parentElement).querySelector('.search-result');
  this.$noResult = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _parentElement).querySelector('.no-result');
}

function _initChildrenComponent2() {
  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _videoListComponent, new _VideoListComponent_SearchVideoListComponent__WEBPACK_IMPORTED_MODULE_8__["default"](this.$searchResult, _constants_components__WEBPACK_IMPORTED_MODULE_4__.VIDEO_COMPONENT_TYPE.SEARCH));
}

function _subscribeStore2() {
  var initialSearchResult = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_6__.subscribe)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_5__.STATE_STORE_KEY.SEARCH_RESULT, this);

  _classPrivateMethodGet(this, _renderSearchResult, _renderSearchResult2).call(this, initialSearchResult);

  var initialIsSearchVideoWaiting = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_6__.subscribe)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_5__.STATE_STORE_KEY.IS_SEARCH_VIDEO_WAITING, this);

  _classPrivateMethodGet(this, _renderSkeletonVideoList, _renderSkeletonVideoList2).call(this, initialIsSearchVideoWaiting);
}

function _renderSearchResult2(searchResult) {
  var videoList = searchResult.videoList;
  /** 검색 결과가 없다면 */

  if ((0,_utils_validation__WEBPACK_IMPORTED_MODULE_7__.isNullVideoList)(videoList)) {
    this.$noResult.classList.remove('hide');

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _videoListComponent).unmount();

    return;
  }
  /** 검색 결과가 있다면 */


  this.$noResult.classList.add('hide');

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _videoListComponent).render(searchResult);
}

function _renderSkeletonVideoList2(isWaitingResponse) {
  this.$noResult.classList.add('hide');

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _videoListComponent).renderSkeletonVideoList(isWaitingResponse);
}

function _generateTemplate2() {
  return "\n    <section class=\"search-result\">\n    <h3 hidden>\uAC80\uC0C9 \uACB0\uACFC</h3>\n    <div class=\"no-result\">\n      <img src=\"./not_found.png\" alt=\"no result image\" class=\"no-result__image\">\n      <p class=\"no-result__description\">\n        \uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4<br />\n        \uB2E4\uB978 \uD0A4\uC6CC\uB4DC\uB85C \uAC80\uC0C9\uD574\uBCF4\uC138\uC694\n      </p>\n    </div>\n    </section>\n    ";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchResultComponent);

/***/ }),

/***/ "./src/js/components/VideoComponent/SavedVideoComponent.js":
/*!*****************************************************************!*\
  !*** ./src/js/components/VideoComponent/SavedVideoComponent.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! . */ "./src/js/components/VideoComponent/index.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/components */ "./src/js/constants/components.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }




var _mount = /*#__PURE__*/new WeakSet();

var _generateButtonTemplate = /*#__PURE__*/new WeakSet();

var SavedVideoComponent = /*#__PURE__*/function (_VideoComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(SavedVideoComponent, _VideoComponent);

  var _super = _createSuper(SavedVideoComponent);

  function SavedVideoComponent(parentElement, props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SavedVideoComponent);

    _this = _super.call(this, parentElement, props);

    _classPrivateMethodInitSpec((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), _generateButtonTemplate);

    _classPrivateMethodInitSpec((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), _mount);

    _classPrivateMethodGet((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), _mount, _mount2).call((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));

    return _this;
  }

  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(SavedVideoComponent);
}(___WEBPACK_IMPORTED_MODULE_6__["default"]);

function _mount2() {
  this.$videoItem.insertAdjacentHTML('beforeend', _classPrivateMethodGet(this, _generateButtonTemplate, _generateButtonTemplate2).call(this));
}

function _generateButtonTemplate2() {
  return "\n        <div class=\"video-item__button_container\">\n          <button class=\"video-item__check-button button ".concat(this.componentType === _constants_components__WEBPACK_IMPORTED_MODULE_7__.VIDEO_COMPONENT_TYPE.WATCHED ? 'checked' : '', "\">\u2705</button>\n          <button class=\"video-item__delete-button button\">\uD83D\uDDD1</button>\n        </div>\n          ");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SavedVideoComponent);

/***/ }),

/***/ "./src/js/components/VideoComponent/SearchVideoComponent.js":
/*!******************************************************************!*\
  !*** ./src/js/components/VideoComponent/SearchVideoComponent.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! . */ "./src/js/components/VideoComponent/index.js");
/* harmony import */ var _modules_stateStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/stateStore */ "./src/js/modules/stateStore.js");
/* harmony import */ var _constants_stateStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/stateStore */ "./src/js/constants/stateStore.js");








var _excluded = ["observer"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _mount = /*#__PURE__*/new WeakSet();

var _initDOM = /*#__PURE__*/new WeakSet();

var _subscribeStore = /*#__PURE__*/new WeakSet();

var _render = /*#__PURE__*/new WeakSet();

var _generateButtonTemplate = /*#__PURE__*/new WeakSet();

var _isSavedVideo = /*#__PURE__*/new WeakSet();

var SearchVideoComponent = /*#__PURE__*/function (_VideoComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchVideoComponent, _VideoComponent);

  var _super = _createSuper(SearchVideoComponent);

  function SearchVideoComponent(parentElement, _ref) {
    var _this;

    var observer = _ref.observer,
        restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SearchVideoComponent);

    _this = _super.call(this, parentElement, restProps);

    _classPrivateMethodInitSpec((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _isSavedVideo);

    _classPrivateMethodInitSpec((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _generateButtonTemplate);

    _classPrivateMethodInitSpec((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _render);

    _classPrivateMethodInitSpec((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _subscribeStore);

    _classPrivateMethodInitSpec((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _initDOM);

    _classPrivateMethodInitSpec((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _mount);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "$saveButton", null);

    _classPrivateMethodGet((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _mount, _mount2).call((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));

    _classPrivateMethodGet((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _initDOM, _initDOM2).call((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));

    _classPrivateMethodGet((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _subscribeStore, _subscribeStore2).call((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));

    observer === null || observer === void 0 ? void 0 : observer.observe(_this.$videoItem);
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SearchVideoComponent, [{
    key: "wakeUp",
    value: function wakeUp(stateKey) {
      var stateValue = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_9__.getState)(stateKey);

      _classPrivateMethodGet(this, _render, _render2).call(this, stateValue);
    }
  }]);

  return SearchVideoComponent;
}(___WEBPACK_IMPORTED_MODULE_8__["default"]);

function _mount2() {
  this.$videoItem.insertAdjacentHTML('beforeend', _classPrivateMethodGet(this, _generateButtonTemplate, _generateButtonTemplate2).call(this));
}

function _initDOM2() {
  this.$saveButton = this.$videoItem.querySelector('.video-item__save-button.button');
}

function _subscribeStore2() {
  var initialSavedVideo = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_9__.subscribe)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_10__.STATE_STORE_KEY.SAVED_VIDEO, this);

  _classPrivateMethodGet(this, _render, _render2).call(this, initialSavedVideo);
}

function _render2(_ref2) {
  var savedVideoList = _ref2.videoList;
  var video = this.props.video;

  var _video$getVideoInfo = video.getVideoInfo(),
      videoId = _video$getVideoInfo.videoId;

  if (_classPrivateMethodGet(this, _isSavedVideo, _isSavedVideo2).call(this, savedVideoList, videoId)) {
    this.$saveButton.setAttribute('hidden', true);
  }
}

function _generateButtonTemplate2() {
  return "\n    <button class=\"video-item__save-button button\">\u2B07 \uC800\uC7A5</button>\n      ";
}

function _isSavedVideo2(savedVideoList, videoId) {
  return savedVideoList.find(function (savedVideo) {
    var _savedVideo$getVideoI = savedVideo.getVideoInfo(),
        savedVideoId = _savedVideo$getVideoI.videoId;

    return savedVideoId === videoId;
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchVideoComponent);

/***/ }),

/***/ "./src/js/components/VideoComponent/index.js":
/*!***************************************************!*\
  !*** ./src/js/components/VideoComponent/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/components */ "./src/js/constants/components.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/util */ "./src/js/utils/util.js");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/validation */ "./src/js/utils/validation.js");






var _excluded = ["type"];

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _parentElement = /*#__PURE__*/new WeakMap();

var _mount = /*#__PURE__*/new WeakSet();

var _initDOM = /*#__PURE__*/new WeakSet();

var _generateTemplate = /*#__PURE__*/new WeakSet();

var VideoComponent = /*#__PURE__*/function () {
  function VideoComponent(parentElement, _ref) {
    var _ref$type = _ref.type,
        type = _ref$type === void 0 ? _constants_components__WEBPACK_IMPORTED_MODULE_6__.VIDEO_COMPONENT_TYPE.SEARCH : _ref$type,
        restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VideoComponent);

    _classPrivateMethodInitSpec(this, _generateTemplate);

    _classPrivateMethodInitSpec(this, _initDOM);

    _classPrivateMethodInitSpec(this, _mount);

    _classPrivateFieldInitSpec(this, _parentElement, {
      writable: true,
      value: null
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "componentType", _constants_components__WEBPACK_IMPORTED_MODULE_6__.VIDEO_COMPONENT_TYPE.SEARCH);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "$videoItem", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "$videoImg", null);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_5__["default"])(this, _parentElement, parentElement);

    this.componentType = type;
    this.props = restProps;

    _classPrivateMethodGet(this, _mount, _mount2).call(this);

    _classPrivateMethodGet(this, _initDOM, _initDOM2).call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(VideoComponent, [{
    key: "loadImg",
    value: function loadImg(showingCutline) {
      var _this$$videoImg$getBo = this.$videoImg.getBoundingClientRect(),
          top = _this$$videoImg$getBo.top;

      if ((0,_utils_validation__WEBPACK_IMPORTED_MODULE_8__.canLoadImage)(top, showingCutline) && (0,_utils_validation__WEBPACK_IMPORTED_MODULE_8__.hasNotSrcAttribute)(this.$videoImg)) {
        var src = this.$videoImg.dataset.src;
        this.$videoImg.src = src;
      }
    }
  }]);

  return VideoComponent;
}();

function _mount2() {
  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _parentElement).insertAdjacentHTML('beforeend', _classPrivateMethodGet(this, _generateTemplate, _generateTemplate2).call(this));
}

function _initDOM2() {
  var video = this.props.video;

  var _video$getVideoInfo = video.getVideoInfo(),
      videoId = _video$getVideoInfo.videoId;

  this.$videoItem = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _parentElement).querySelector("[data-video-id=\"".concat(videoId, "\"]"));
  this.$videoImg = this.$videoItem.querySelector('img');
}

function _generateTemplate2() {
  var video = this.props.video;

  var _video$getVideoInfo2 = video.getVideoInfo(),
      videoId = _video$getVideoInfo2.videoId,
      videoTitle = _video$getVideoInfo2.videoTitle,
      channelTitle = _video$getVideoInfo2.channelTitle,
      publishTime = _video$getVideoInfo2.publishTime,
      thumbnail = _video$getVideoInfo2.thumbnail;

  return "\n    <li class=\"video-item\" data-video-id=\"".concat(videoId, "\">\n    <img\n      data-src=\"").concat(thumbnail, "\" class=\"video-item__thumbnail\" ").concat(this.props.notLazyLoad ? "src=\"".concat(thumbnail, "\"") : '', ">\n    <h4 class=\"video-item__title\">").concat(videoTitle, "</h4>\n    <p class=\"video-item__channel-name\">").concat(channelTitle, "</p>\n    <p class=\"video-item__published-date\">").concat((0,_utils_util__WEBPACK_IMPORTED_MODULE_7__.parseTimeStamp)(publishTime), "</p>\n    </li>\n    ");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoComponent);

/***/ }),

/***/ "./src/js/components/VideoListComponent/SavedVideoListComponent.js":
/*!*************************************************************************!*\
  !*** ./src/js/components/VideoListComponent/SavedVideoListComponent.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! . */ "./src/js/components/VideoListComponent/index.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/components */ "./src/js/constants/components.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/events */ "./src/js/constants/events.js");
/* harmony import */ var _modules_eventFactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modules/eventFactory */ "./src/js/modules/eventFactory.js");
/* harmony import */ var _VideoComponent_SavedVideoComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../VideoComponent/SavedVideoComponent */ "./src/js/components/VideoComponent/SavedVideoComponent.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }







var _onClickVideoList = /*#__PURE__*/new WeakMap();

var _generateVideoComponents = /*#__PURE__*/new WeakSet();

var SavedVideoListComponent = /*#__PURE__*/function (_VideoListComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SavedVideoListComponent, _VideoListComponent);

  var _super = _createSuper(SavedVideoListComponent);

  /** 깜빡거림이 신경쓰인다. */
  function SavedVideoListComponent(parentElement, type) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SavedVideoListComponent);

    _this = _super.call(this, parentElement, type);

    _classPrivateMethodInitSpec((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _generateVideoComponents);

    _classPrivateFieldInitSpec((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _onClickVideoList, {
      writable: true,
      value: function value(e) {
        var className = e.target.className;

        var _e$target$closest = e.target.closest('.video-item'),
            dataset = _e$target$closest.dataset;

        if (className.includes('video-item__delete-button')) {
          (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_12__.dispatch)(_constants_events__WEBPACK_IMPORTED_MODULE_11__.CUSTOM_EVENT_KEY.CLICK_SAVED_DELETE_BUTTON, {
            detail: {
              savedVideoId: dataset.videoId
            }
          });
        }

        if (className.includes('video-item__check-button')) {
          (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_12__.dispatch)(_constants_events__WEBPACK_IMPORTED_MODULE_11__.CUSTOM_EVENT_KEY.CLICK_SAVED_CHECK_BUTTON, {
            detail: {
              savedVideoId: dataset.videoId,
              element: e.target
            }
          });
        }
      }
    });

    _this.$videoList.addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _onClickVideoList));

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SavedVideoListComponent, [{
    key: "render",
    value: function render(_ref, watchedVideoIdList) {
      var savedVideoList = _ref.videoList;
      this.$videoList.innerHTML = '';

      var _savedVideoList$reduc = savedVideoList.reduce(function (prev, savedVideo) {
        var _savedVideo$getVideoI = savedVideo.getVideoInfo(),
            videoId = _savedVideo$getVideoI.videoId;

        var isWatched = watchedVideoIdList.includes(videoId);
        return _objectSpread(_objectSpread({}, prev), {}, {
          watchVideoList: isWatched ? prev.watchVideoList : [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev.watchVideoList), [savedVideo]),
          watchedVideoList: isWatched ? [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev.watchedVideoList), [savedVideo]) : prev.watchedVideoList
        });
      }, {
        watchVideoList: [],
        watchedVideoList: []
      }),
          watchVideoList = _savedVideoList$reduc.watchVideoList,
          watchedVideoList = _savedVideoList$reduc.watchedVideoList;

      this.videoComponents = _classPrivateMethodGet(this, _generateVideoComponents, _generateVideoComponents2).call(this, this.componentType === _constants_components__WEBPACK_IMPORTED_MODULE_10__.VIDEO_COMPONENT_TYPE.WATCH ? watchVideoList : watchedVideoList);
    }
  }]);

  return SavedVideoListComponent;
}(___WEBPACK_IMPORTED_MODULE_9__["default"]);

function _generateVideoComponents2(savedVideoList) {
  var _this2 = this;

  return savedVideoList.map(function (savedVideo, idx) {
    return new _VideoComponent_SavedVideoComponent__WEBPACK_IMPORTED_MODULE_13__["default"](_this2.$videoList, {
      video: savedVideo,
      notLazyLoad: idx < 10,
      type: _this2.componentType
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SavedVideoListComponent);

/***/ }),

/***/ "./src/js/components/VideoListComponent/SearchVideoListComponent.js":
/*!**************************************************************************!*\
  !*** ./src/js/components/VideoListComponent/SearchVideoListComponent.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! . */ "./src/js/components/VideoListComponent/index.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/components */ "./src/js/constants/components.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/events */ "./src/js/constants/events.js");
/* harmony import */ var _modules_eventFactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../modules/eventFactory */ "./src/js/modules/eventFactory.js");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/validation */ "./src/js/utils/validation.js");
/* harmony import */ var _VideoComponent_SearchVideoComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../VideoComponent/SearchVideoComponent */ "./src/js/components/VideoComponent/SearchVideoComponent.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }








var _searchVideoObserver = /*#__PURE__*/new WeakMap();

var _observeEntries = /*#__PURE__*/new WeakSet();

var _onClickVideoList = /*#__PURE__*/new WeakMap();

var _generateVideoComponents = /*#__PURE__*/new WeakSet();

var SearchVideoListComponent = /*#__PURE__*/function (_VideoListComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchVideoListComponent, _VideoListComponent);

  var _super = _createSuper(SearchVideoListComponent);

  function SearchVideoListComponent(parentElement) {
    var _this;

    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants_components__WEBPACK_IMPORTED_MODULE_10__.VIDEO_COMPONENT_TYPE.SEARCH;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SearchVideoListComponent);

    _this = _super.call(this, parentElement, type);

    _classPrivateMethodInitSpec((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _generateVideoComponents);

    _classPrivateMethodInitSpec((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _observeEntries);

    _classPrivateFieldInitSpec((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _searchVideoObserver, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _onClickVideoList, {
      writable: true,
      value: function value(e) {
        var className = e.target.className;

        var _e$target$closest = e.target.closest('.video-item'),
            dataset = _e$target$closest.dataset;

        if (className.includes('video-item__save-button')) {
          (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_12__.dispatch)(_constants_events__WEBPACK_IMPORTED_MODULE_11__.CUSTOM_EVENT_KEY.CLICK_SAVE_BUTTON, {
            detail: {
              saveVideoId: dataset.videoId
            }
          });
        }
      }
    });

    _this.$videoList.addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _onClickVideoList));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _searchVideoObserver, new IntersectionObserver(_classPrivateMethodGet((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), _observeEntries, _observeEntries2), {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    }));

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SearchVideoListComponent, [{
    key: "render",
    value: function render(_ref) {
      var videoList = _ref.videoList,
          prevVideoListLength = _ref.prevVideoListLength;

      if ((0,_utils_validation__WEBPACK_IMPORTED_MODULE_13__.isFirstSearchByKeyword)(prevVideoListLength)) {
        this.videoComponents = [];
        this.$videoList.innerHTML = '';
      }

      this.$videoList.classList.remove('hide');
      this.videoComponents = _classPrivateMethodGet(this, _generateVideoComponents, _generateVideoComponents2).call(this, videoList, prevVideoListLength);
    }
  }]);

  return SearchVideoListComponent;
}(___WEBPACK_IMPORTED_MODULE_9__["default"]);

function _observeEntries2(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_12__.dispatch)(_constants_events__WEBPACK_IMPORTED_MODULE_11__.CUSTOM_EVENT_KEY.LOAD_NEW_VIDEO_LIST);
    }
  });
}

function _generateVideoComponents2(videoList, prevVideoListLength) {
  var _this2 = this;

  return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.videoComponents), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(videoList.slice(prevVideoListLength).map(function (video, idx, arr) {
    return new _VideoComponent_SearchVideoComponent__WEBPACK_IMPORTED_MODULE_14__["default"](_this2.$videoList, {
      video: video,
      observer: idx === arr.length - 1 ? (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_8__["default"])(_this2, _searchVideoObserver) : null,
      notLazyLoad: prevVideoListLength === 0
    });
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchVideoListComponent);

/***/ }),

/***/ "./src/js/components/VideoListComponent/SkeletonListComponent.js":
/*!***********************************************************************!*\
  !*** ./src/js/components/VideoListComponent/SkeletonListComponent.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");






function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _parentElement = /*#__PURE__*/new WeakMap();

var _mount = /*#__PURE__*/new WeakSet();

var _initDOM = /*#__PURE__*/new WeakSet();

var _generateTemplate = /*#__PURE__*/new WeakSet();

var SkeletonListComponent = /*#__PURE__*/function () {
  function SkeletonListComponent(parentElement) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SkeletonListComponent);

    _classPrivateMethodInitSpec(this, _generateTemplate);

    _classPrivateMethodInitSpec(this, _initDOM);

    _classPrivateMethodInitSpec(this, _mount);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "$skeletonList", void 0);

    _classPrivateFieldInitSpec(this, _parentElement, {
      writable: true,
      value: null
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _parentElement, parentElement);

    _classPrivateMethodGet(this, _mount, _mount2).call(this);

    _classPrivateMethodGet(this, _initDOM, _initDOM2).call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SkeletonListComponent, [{
    key: "unmount",
    value: function unmount() {
      var _this = this;

      this.$skeletonList.forEach(function ($skeletonItem) {
        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _parentElement).removeChild($skeletonItem);
      });
    }
  }]);

  return SkeletonListComponent;
}();

function _mount2() {
  var template = _classPrivateMethodGet(this, _generateTemplate, _generateTemplate2).call(this);

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _parentElement).insertAdjacentHTML('beforeend', template);
}

function _initDOM2() {
  this.$skeletonList = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _parentElement).querySelectorAll('.skeleton-item');
}

function _generateTemplate2() {
  return "\n        <li class=\"skeleton-item\">\n            <div class=\"image\"></div>\n            <p class=\"line big\"></p>\n            <p class=\"line middle\"></p>\n            <p class=\"line small\"></p>\n            <div><p class=\"line thick\"></p></div>\n        </li>\n      ".repeat(10);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonListComponent);

/***/ }),

/***/ "./src/js/components/VideoListComponent/index.js":
/*!*******************************************************!*\
  !*** ./src/js/components/VideoListComponent/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _SkeletonListComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SkeletonListComponent */ "./src/js/components/VideoListComponent/SkeletonListComponent.js");





function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



var _mount = /*#__PURE__*/new WeakSet();

var _initDOM = /*#__PURE__*/new WeakSet();

var _generateTemplate = /*#__PURE__*/new WeakSet();

var _bindEventHandler = /*#__PURE__*/new WeakSet();

var _onScrollInVideoContainer = /*#__PURE__*/new WeakMap();

var VideoListComponent = /*#__PURE__*/function () {
  function VideoListComponent(parentElement, type) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VideoListComponent);

    _classPrivateMethodInitSpec(this, _bindEventHandler);

    _classPrivateMethodInitSpec(this, _generateTemplate);

    _classPrivateMethodInitSpec(this, _initDOM);

    _classPrivateMethodInitSpec(this, _mount);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "$videoList", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "parentElement", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "componentType", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "videoComponents", []);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "lazyLoadThrottleTimeout", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "skeletonListComponent", null);

    _classPrivateFieldInitSpec(this, _onScrollInVideoContainer, {
      writable: true,
      value: function value() {
        if (_this.lazyLoadThrottleTimeout) {
          clearTimeout(_this.lazyLoadThrottleTimeout);
        }

        _this.lazyLoadThrottleTimeout = setTimeout(function () {
          _this.videoComponents.forEach(function (videoComponent) {
            var _this$$videoList$getB = _this.$videoList.getBoundingClientRect(),
                bottom = _this$$videoList$getB.bottom;

            videoComponent.loadImg(bottom);
          });
        }, 100);
      }
    });

    this.parentElement = parentElement;
    this.componentType = type;

    _classPrivateMethodGet(this, _mount, _mount2).call(this);

    _classPrivateMethodGet(this, _initDOM, _initDOM2).call(this);

    _classPrivateMethodGet(this, _bindEventHandler, _bindEventHandler2).call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VideoListComponent, [{
    key: "renderSkeletonVideoList",
    value: function renderSkeletonVideoList(isWaitingResponse) {
      var _this$skeletonListCom;

      if (isWaitingResponse) {
        this.skeletonListComponent = new _SkeletonListComponent__WEBPACK_IMPORTED_MODULE_4__["default"](this.$videoList);
        return;
      }

      (_this$skeletonListCom = this.skeletonListComponent) === null || _this$skeletonListCom === void 0 ? void 0 : _this$skeletonListCom.unmount();
    }
  }, {
    key: "unmount",
    value: function unmount() {
      this.$videoList.innerHTML = '';
    }
  }]);

  return VideoListComponent;
}();

function _mount2() {
  var template = _classPrivateMethodGet(this, _generateTemplate, _generateTemplate2).call(this);

  this.parentElement.insertAdjacentHTML('beforeend', template);
}

function _initDOM2() {
  this.$videoList = this.parentElement.querySelector('.video-list');
}

function _generateTemplate2() {
  return "<ul class=\"video-list\"></ul>";
}

function _bindEventHandler2() {
  this.$videoList.addEventListener('scroll', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _onScrollInVideoContainer));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoListComponent);

/***/ }),

/***/ "./src/js/components/index.js":
/*!************************************!*\
  !*** ./src/js/components/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _SearchModalComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchModalComponent */ "./src/js/components/SearchModalComponent.js");
/* harmony import */ var _modules_eventFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/eventFactory */ "./src/js/modules/eventFactory.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/events */ "./src/js/constants/events.js");
/* harmony import */ var _constants_stateStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/stateStore */ "./src/js/constants/stateStore.js");
/* harmony import */ var _modules_stateStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/stateStore */ "./src/js/modules/stateStore.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants/components */ "./src/js/constants/components.js");
/* harmony import */ var _VideoListComponent_SavedVideoListComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VideoListComponent/SavedVideoListComponent */ "./src/js/components/VideoListComponent/SavedVideoListComponent.js");






function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }









var _parentElement = /*#__PURE__*/new WeakMap();

var _mount = /*#__PURE__*/new WeakSet();

var _initDOM = /*#__PURE__*/new WeakSet();

var _initChildrenComponent = /*#__PURE__*/new WeakSet();

var _bindEventHandler = /*#__PURE__*/new WeakSet();

var _subscribeStore = /*#__PURE__*/new WeakSet();

var _renderCurrentAppSection = /*#__PURE__*/new WeakSet();

var _renderSavedVideo = /*#__PURE__*/new WeakSet();

var _renderSkeletonUI = /*#__PURE__*/new WeakSet();

var _showWatchVideoSection = /*#__PURE__*/new WeakSet();

var _showWatchedVideoSection = /*#__PURE__*/new WeakSet();

var _generateTemplate = /*#__PURE__*/new WeakSet();

var AppComponent = /*#__PURE__*/function () {
  function AppComponent(parentElement) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    _classPrivateMethodInitSpec(this, _generateTemplate);

    _classPrivateMethodInitSpec(this, _showWatchedVideoSection);

    _classPrivateMethodInitSpec(this, _showWatchVideoSection);

    _classPrivateMethodInitSpec(this, _renderSkeletonUI);

    _classPrivateMethodInitSpec(this, _renderSavedVideo);

    _classPrivateMethodInitSpec(this, _renderCurrentAppSection);

    _classPrivateMethodInitSpec(this, _subscribeStore);

    _classPrivateMethodInitSpec(this, _bindEventHandler);

    _classPrivateMethodInitSpec(this, _initChildrenComponent);

    _classPrivateMethodInitSpec(this, _initDOM);

    _classPrivateMethodInitSpec(this, _mount);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "searchModalComponent", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "$searchModalButton", null);

    _classPrivateFieldInitSpec(this, _parentElement, {
      writable: true,
      value: null
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _parentElement, parentElement);

    _classPrivateMethodGet(this, _mount, _mount2).call(this);

    _classPrivateMethodGet(this, _initDOM, _initDOM2).call(this);

    _classPrivateMethodGet(this, _initChildrenComponent, _initChildrenComponent2).call(this);

    _classPrivateMethodGet(this, _bindEventHandler, _bindEventHandler2).call(this);

    _classPrivateMethodGet(this, _subscribeStore, _subscribeStore2).call(this);

    (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_6__.dispatch)(_constants_events__WEBPACK_IMPORTED_MODULE_7__.CUSTOM_EVENT_KEY.INITIALIZE_SAVED_VIDEO_STATE);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "wakeUp",
    value: function wakeUp(stateKey) {
      var stateValue = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_9__.getState)(stateKey);

      if (stateKey === _constants_stateStore__WEBPACK_IMPORTED_MODULE_8__.STATE_STORE_KEY.CURRENT_APP_SECTION) {
        _classPrivateMethodGet(this, _renderCurrentAppSection, _renderCurrentAppSection2).call(this, stateValue);
      }

      if (stateKey === _constants_stateStore__WEBPACK_IMPORTED_MODULE_8__.STATE_STORE_KEY.SAVED_VIDEO) {
        var watchedVideoList = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_9__.getState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_8__.STATE_STORE_KEY.WATCHED_VIDEO);

        _classPrivateMethodGet(this, _renderSavedVideo, _renderSavedVideo2).call(this, stateValue, watchedVideoList);
      }

      if (stateKey === _constants_stateStore__WEBPACK_IMPORTED_MODULE_8__.STATE_STORE_KEY.WATCHED_VIDEO) {
        var savedVideoResult = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_9__.getState)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_8__.STATE_STORE_KEY.SAVED_VIDEO);

        _classPrivateMethodGet(this, _renderSavedVideo, _renderSavedVideo2).call(this, savedVideoResult, stateValue);
      }

      if (stateKey === _constants_stateStore__WEBPACK_IMPORTED_MODULE_8__.STATE_STORE_KEY.IS_SAVED_VIDEO_WAITING) {
        _classPrivateMethodGet(this, _renderSkeletonUI, _renderSkeletonUI2).call(this, stateValue);
      }
    }
  }]);

  return AppComponent;
}();

function _mount2() {
  var template = _classPrivateMethodGet(this, _generateTemplate, _generateTemplate2).call(this);

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _parentElement).insertAdjacentHTML('beforeend', template);
}

function _initDOM2() {
  this.$app = document.querySelector('#app');
  this.$buttonNav = document.querySelector('.nav');
  this.$watchVideoSection = document.querySelector('#watch-video-section');
  this.$watchedVideoSection = document.querySelector('#watched-video-section');
  this.$watchVideoButton = document.querySelector('#watch-video-section-button');
  this.$watchedVideoButton = document.querySelector('#watched-video-section-button');
}

function _initChildrenComponent2() {
  this.searchModalComponent = new _SearchModalComponent__WEBPACK_IMPORTED_MODULE_5__["default"]((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _parentElement));
  this.watchVideoComponent = new _VideoListComponent_SavedVideoListComponent__WEBPACK_IMPORTED_MODULE_11__["default"](this.$watchVideoSection, _constants_components__WEBPACK_IMPORTED_MODULE_10__.VIDEO_COMPONENT_TYPE.WATCH);
  this.watchedVideoComponent = new _VideoListComponent_SavedVideoListComponent__WEBPACK_IMPORTED_MODULE_11__["default"](this.$watchedVideoSection, _constants_components__WEBPACK_IMPORTED_MODULE_10__.VIDEO_COMPONENT_TYPE.WATCHED);
}

function _bindEventHandler2() {
  this.$buttonNav.addEventListener('click', function (_ref) {
    var id = _ref.target.id;
    (0,_modules_eventFactory__WEBPACK_IMPORTED_MODULE_6__.dispatch)(_constants_events__WEBPACK_IMPORTED_MODULE_7__.CUSTOM_EVENT_KEY.CLICK_SEARCH_MODAL_BUTTON, {
      detail: {
        targetId: id
      }
    });
  });
}

function _subscribeStore2() {
  var initialCurrentAppSection = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_9__.subscribe)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_8__.STATE_STORE_KEY.CURRENT_APP_SECTION, this);

  _classPrivateMethodGet(this, _renderCurrentAppSection, _renderCurrentAppSection2).call(this, initialCurrentAppSection);

  var initialSavedVideoIdList = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_9__.subscribe)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_8__.STATE_STORE_KEY.SAVED_VIDEO, this);
  var initialWatchedVideoList = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_9__.subscribe)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_8__.STATE_STORE_KEY.WATCHED_VIDEO, this);

  _classPrivateMethodGet(this, _renderSavedVideo, _renderSavedVideo2).call(this, initialSavedVideoIdList, initialWatchedVideoList);

  var initialIsSavedVideoWaiting = (0,_modules_stateStore__WEBPACK_IMPORTED_MODULE_9__.subscribe)(_constants_stateStore__WEBPACK_IMPORTED_MODULE_8__.STATE_STORE_KEY.IS_SAVED_VIDEO_WAITING, this);

  _classPrivateMethodGet(this, _renderSkeletonUI, _renderSkeletonUI2).call(this, initialIsSavedVideoWaiting);
}

function _renderCurrentAppSection2(currentAppSection) {
  if (currentAppSection === _constants_stateStore__WEBPACK_IMPORTED_MODULE_8__.CURRENT_APP_SECTION_VALUE.WATCH) {
    _classPrivateMethodGet(this, _showWatchVideoSection, _showWatchVideoSection2).call(this);
  }

  if (currentAppSection === _constants_stateStore__WEBPACK_IMPORTED_MODULE_8__.CURRENT_APP_SECTION_VALUE.WATCHED) {
    _classPrivateMethodGet(this, _showWatchedVideoSection, _showWatchedVideoSection2).call(this);
  }
}

function _renderSavedVideo2(savedVideoResult, initialWatchedVideoList) {
  this.watchVideoComponent.render(savedVideoResult, initialWatchedVideoList);
  this.watchedVideoComponent.render(savedVideoResult, initialWatchedVideoList);
}

function _renderSkeletonUI2(initialIsSavedVideoWaiting) {
  this.watchVideoComponent.renderSkeletonVideoList(initialIsSavedVideoWaiting);
  this.watchedVideoComponent.renderSkeletonVideoList(initialIsSavedVideoWaiting);
}

function _showWatchVideoSection2() {
  this.$watchVideoSection.classList.remove('hide');
  this.$watchedVideoSection.classList.add('hide');
  this.$watchVideoButton.classList.add('checked');
  this.$watchedVideoButton.classList.remove('checked');
}

function _showWatchedVideoSection2() {
  this.$watchVideoSection.classList.add('hide');
  this.$watchedVideoSection.classList.remove('hide');
  this.$watchedVideoButton.classList.add('checked');
  this.$watchVideoButton.classList.remove('checked');
}

function _generateTemplate2() {
  return "<main id=\"app\" class=\"classroom-container\">\n    <h1 class=\"classroom-container__title\">\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB \uB098\uB9CC\uC758 \uC720\uD29C\uBE0C \uAC15\uC758\uC2E4 \uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB</h1>\n    <nav class=\"nav\">\n    <div>\n    <button id=\"watch-video-section-button\" class=\"button nav__button\" type=\"button\">\uD83D\uDC41 \uBCFC \uC601\uC0C1</button>\n    <button id=\"watched-video-section-button\" class=\"button nav__button\" type=\"button\">\u2705 \uBCF8 \uC601\uC0C1</button>\n    </div>\n    <button id=\"search-modal-button\" class=\"button nav__button\" type=\"button\">\uD83D\uDD0D \uAC80\uC0C9</button>\n    </nav>\n    <div id=\"watch-video-section\" class=\"saved-video-section\"></div>\n    <div id=\"watched-video-section\" class=\"saved-video-section\"></div>\n    </main>";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppComponent);

/***/ }),

/***/ "./src/js/constants/cacheStore.js":
/*!****************************************!*\
  !*** ./src/js/constants/cacheStore.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REVALIDATION_TIME": () => (/* binding */ REVALIDATION_TIME)
/* harmony export */ });
var REVALIDATION_TIME = 60000;

/***/ }),

/***/ "./src/js/constants/components.js":
/*!****************************************!*\
  !*** ./src/js/constants/components.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VIDEO_COMPONENT_TYPE": () => (/* binding */ VIDEO_COMPONENT_TYPE)
/* harmony export */ });
var VIDEO_COMPONENT_TYPE = {
  SEARCH: 'search',
  WATCH: 'watch',
  WATCHED: 'watched'
};

/***/ }),

/***/ "./src/js/constants/errorMessage.js":
/*!******************************************!*\
  !*** ./src/js/constants/errorMessage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE)
/* harmony export */ });
var ERROR_MESSAGE = {
  VIDEO_MISSING_PROPERTY: '누락된 데이터가 있습니다.',
  SAVE_VIDEO_COUNT_OVER: '100개까지만 저장이 가능합니다.',
  ALREADY_SAVED_VIDEO: '이미 저장한 비디오입니다.',
  EMPTY_KEYWORD: '키워드를 입력해주세요'
};

/***/ }),

/***/ "./src/js/constants/events.js":
/*!************************************!*\
  !*** ./src/js/constants/events.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CUSTOM_EVENT_KEY": () => (/* binding */ CUSTOM_EVENT_KEY)
/* harmony export */ });
var CUSTOM_EVENT_KEY = {
  CLICK_SEARCH_MODAL_BUTTON: 'click-search-modal-button',
  CLICK_OUTSIDE_MODAL: 'click-outside-modal',
  SUBMIT_SEARCH_KEYWORD: 'submit-search-keyword',
  LOAD_NEW_VIDEO_LIST: 'load-new-video-list',
  CLICK_SAVE_BUTTON: 'click-save-button',
  CLICK_SAVED_DELETE_BUTTON: 'click-saved-delete-button',
  CLICK_SAVED_CHECK_BUTTON: 'click-saved-check-button',
  INITIALIZE_SAVED_VIDEO_STATE: 'initializeSavedVideoState'
};

/***/ }),

/***/ "./src/js/constants/fetcher.js":
/*!*************************************!*\
  !*** ./src/js/constants/fetcher.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_PATHS": () => (/* binding */ API_PATHS)
/* harmony export */ });
var API_PATHS = {
  SEARCH: 'youtube/v3/search',
  GET_VIDEO: 'youtube/v3/videos'
};

/***/ }),

/***/ "./src/js/constants/stateStore.js":
/*!****************************************!*\
  !*** ./src/js/constants/stateStore.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CURRENT_APP_SECTION_VALUE": () => (/* binding */ CURRENT_APP_SECTION_VALUE),
/* harmony export */   "STATE_STORE_KEY": () => (/* binding */ STATE_STORE_KEY)
/* harmony export */ });
var STATE_STORE_KEY = {
  IS_MODAL_SHOW: 'isModalShow',
  SEARCH_RESULT: 'searchResult',
  IS_SEARCH_VIDEO_WAITING: 'isSearchVideoWaiting',
  SAVED_VIDEO: 'savedVideo',
  CURRENT_APP_SECTION: 'currentAppSection',
  IS_SAVED_VIDEO_WAITING: 'isSavedVideoWaiting',
  WATCHED_VIDEO: 'watchedVideo'
};
var CURRENT_APP_SECTION_VALUE = {
  WATCH: 'watch-video-section-button',
  WATCHED: 'watched-video-section-button'
};

/***/ }),

/***/ "./src/js/constants/video.js":
/*!***********************************!*\
  !*** ./src/js/constants/video.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAX_SAVE_VIDEO_COUNT": () => (/* binding */ MAX_SAVE_VIDEO_COUNT),
/* harmony export */   "VIDEO_PROPERTY": () => (/* binding */ VIDEO_PROPERTY)
/* harmony export */ });
var VIDEO_PROPERTY = ['videoId', 'videoTitle', 'channelTitle', 'publishTime', 'thumbnail'];
var MAX_SAVE_VIDEO_COUNT = 100;

/***/ }),

/***/ "./src/js/constants/webStore.js":
/*!**************************************!*\
  !*** ./src/js/constants/webStore.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WEB_STORE_KEY": () => (/* binding */ WEB_STORE_KEY)
/* harmony export */ });
var WEB_STORE_KEY = {
  SAVED_VIDEO_LIST_KEY: 'saved-video-list',
  WATCHED_VIDEO_LIST_KEY: 'watched-video-list'
};

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _business__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business */ "./src/js/business/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/js/components/index.js");



function runApp() {
  new _business__WEBPACK_IMPORTED_MODULE_0__["default"]();
  new _components__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector('body'));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (runApp);

/***/ }),

/***/ "./src/js/modules/cacheStore.js":
/*!**************************************!*\
  !*** ./src/js/modules/cacheStore.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheData": () => (/* binding */ getCacheData),
/* harmony export */   "setCacheData": () => (/* binding */ setCacheData)
/* harmony export */ });
/* harmony import */ var _constants_cacheStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/cacheStore */ "./src/js/constants/cacheStore.js");


var _ref = function () {
  var cacheStore = {};
  return {
    getCacheData: function getCacheData(cacheKey) {
      return cacheStore[cacheKey];
    },
    setCacheData: function setCacheData(cacheKey, data) {
      /** revalidation을 위한 */
      setTimeout(function () {
        cacheStore[cacheKey] = undefined;
      }, _constants_cacheStore__WEBPACK_IMPORTED_MODULE_0__.REVALIDATION_TIME);
      cacheStore[cacheKey] = data;
    }
  };
}(),
    getCacheData = _ref.getCacheData,
    setCacheData = _ref.setCacheData;



/***/ }),

/***/ "./src/js/modules/eventFactory.js":
/*!****************************************!*\
  !*** ./src/js/modules/eventFactory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bind": () => (/* binding */ bind),
/* harmony export */   "dispatch": () => (/* binding */ dispatch)
/* harmony export */ });
// window에 커스텀 이벤트를 바인딩하고 있는데, 이 부분에서 문제가 발생하지 않는지..?
var _bind$dispatch = {
  bind: function bind(eventName, handler) {
    addEventListener(eventName, handler);
  },
  dispatch: function dispatch(eventName) {
    var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var customEvent = new CustomEvent(eventName, detail);
    dispatchEvent(customEvent);
  }
},
    bind = _bind$dispatch.bind,
    dispatch = _bind$dispatch.dispatch;


/***/ }),

/***/ "./src/js/modules/fetcher.js":
/*!***********************************!*\
  !*** ./src/js/modules/fetcher.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "youtubeAPIFetcher": () => (/* binding */ youtubeAPIFetcher)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/util */ "./src/js/utils/util.js");




var generateFetcher = function generateFetcher(API_URL) {
  return /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref) {
      var path, params, url, response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              path = _ref.path, params = _ref.params;
              url = (0,_utils_util__WEBPACK_IMPORTED_MODULE_2__.createUrl)(API_URL, path, params);
              _context.next = 4;
              return fetch(url, {
                method: 'GET'
              });

            case 4:
              response = _context.sent;

              if (response.ok) {
                _context.next = 7;
                break;
              }

              throw new Error("api \uC694\uCCAD \uC911 \uC5D0\uB7EC \uBC1C\uC0DD: ".concat(response.status));

            case 7:
              _context.next = 9;
              return response.json();

            case 9:
              data = _context.sent;
              return _context.abrupt("return", data);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var youtubeAPIFetcher = generateFetcher('https://jolly-agnesi-fe3944.netlify.app');

/***/ }),

/***/ "./src/js/modules/stateStore.js":
/*!**************************************!*\
  !*** ./src/js/modules/stateStore.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "setState": () => (/* binding */ setState),
/* harmony export */   "subscribe": () => (/* binding */ subscribe)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/stateStore */ "./src/js/constants/stateStore.js");
/* harmony import */ var _constants_webStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/webStore */ "./src/js/constants/webStore.js");
/* harmony import */ var _webStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webStore */ "./src/js/modules/webStore.js");





var getInitialState = function getInitialState() {
  var _ref;

  return _ref = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__.STATE_STORE_KEY.IS_MODAL_SHOW, false), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__.STATE_STORE_KEY.SEARCH_RESULT, {
    videoList: [],
    keyword: null,
    prevVideoListLength: 0,
    nextPageToken: null
  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__.STATE_STORE_KEY.IS_SEARCH_VIDEO_WAITING, false), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__.STATE_STORE_KEY.SAVED_VIDEO, {
    videoList: [],
    prevVideoListLength: 0
  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__.STATE_STORE_KEY.CURRENT_APP_SECTION, _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__.CURRENT_APP_SECTION_VALUE.WATCH), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__.STATE_STORE_KEY.IS_SAVED_VIDEO_WAITING, false), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__.STATE_STORE_KEY.WATCHED_VIDEO, _webStore__WEBPACK_IMPORTED_MODULE_3__["default"].getArrayData(_constants_webStore__WEBPACK_IMPORTED_MODULE_2__.WEB_STORE_KEY.WATCHED_VIDEO_LIST_KEY)), _ref;
};

var getInitialSubcribeList = function getInitialSubcribeList() {
  var _ref2;

  return _ref2 = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__.STATE_STORE_KEY.IS_MODAL_SHOW, new Set()), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__.STATE_STORE_KEY.SEARCH_RESULT, new Set()), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__.STATE_STORE_KEY.IS_SEARCH_VIDEO_WAITING, new Set()), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__.STATE_STORE_KEY.SAVED_VIDEO, new Set()), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__.STATE_STORE_KEY.CURRENT_APP_SECTION, new Set()), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__.STATE_STORE_KEY.IS_SAVED_VIDEO_WAITING, new Set()), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, _constants_stateStore__WEBPACK_IMPORTED_MODULE_1__.STATE_STORE_KEY.WATCHED_VIDEO, new Set()), _ref2;
};

var _ref3 = function () {
  var state = getInitialState();
  var subcribeList = getInitialSubcribeList();

  function notify(stateKey) {
    var subscribedComponents = subcribeList[stateKey];
    subscribedComponents.forEach(function (component) {
      return component.wakeUp(stateKey);
    });
  }

  return {
    subscribe: function subscribe(key, component) {
      subcribeList[key].add(component);
      return state[key];
    },
    setState: function setState(key, valueOrFunction) {
      if (typeof valueOrFunction === 'function') {
        state[key] = valueOrFunction(state[key]);
        notify(key);
      }

      if (typeof valueOrFunction !== 'function') {
        state[key] = valueOrFunction;
        notify(key);
      }
    },
    getState: function getState(key) {
      return state[key];
    }
  };
}(),
    subscribe = _ref3.subscribe,
    setState = _ref3.setState,
    getState = _ref3.getState;



/***/ }),

/***/ "./src/js/modules/video.js":
/*!*********************************!*\
  !*** ./src/js/modules/video.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _constants_errorMessage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/errorMessage.js */ "./src/js/constants/errorMessage.js");
/* harmony import */ var _constants_video_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/video.js */ "./src/js/constants/video.js");
/* harmony import */ var _utils_validation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/validation.js */ "./src/js/utils/validation.js");





function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _videoId = /*#__PURE__*/new WeakMap();

var _videoTitle = /*#__PURE__*/new WeakMap();

var _channelTitle = /*#__PURE__*/new WeakMap();

var _publishTime = /*#__PURE__*/new WeakMap();

var _thumbnail = /*#__PURE__*/new WeakMap();

var _init = /*#__PURE__*/new WeakSet();

var Video = /*#__PURE__*/function () {
  function Video(videoInfo) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Video);

    _classPrivateMethodInitSpec(this, _init);

    _classPrivateFieldInitSpec(this, _videoId, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _videoTitle, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _channelTitle, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _publishTime, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _thumbnail, {
      writable: true,
      value: null
    });

    _classPrivateMethodGet(this, _init, _init2).call(this, videoInfo);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Video, [{
    key: "getVideoInfo",
    value: function getVideoInfo() {
      return {
        videoId: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _videoId),
        videoTitle: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _videoTitle),
        channelTitle: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _channelTitle),
        publishTime: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _publishTime),
        thumbnail: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _thumbnail)
      };
    }
  }], [{
    key: "create",
    value: function create(videoInfo) {
      if ((0,_utils_validation_js__WEBPACK_IMPORTED_MODULE_6__.hasMissingProperty)(_constants_video_js__WEBPACK_IMPORTED_MODULE_5__.VIDEO_PROPERTY, videoInfo)) {
        throw new Error(_constants_errorMessage_js__WEBPACK_IMPORTED_MODULE_4__.ERROR_MESSAGE.VIDEO_MISSING_PROPERTY);
      }

      return new Video(videoInfo);
    }
  }]);

  return Video;
}();

function _init2(_ref) {
  var videoId = _ref.videoId,
      videoTitle = _ref.videoTitle,
      channelTitle = _ref.channelTitle,
      publishTime = _ref.publishTime,
      thumbnail = _ref.thumbnail;

  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _videoId, videoId);

  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _videoTitle, videoTitle);

  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _channelTitle, channelTitle);

  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _publishTime, publishTime);

  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _thumbnail, thumbnail);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);

/***/ }),

/***/ "./src/js/modules/webStore.js":
/*!************************************!*\
  !*** ./src/js/modules/webStore.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getArrayData: function getArrayData(key) {
    var _localStorage$getItem;

    return JSON.parse((_localStorage$getItem = localStorage.getItem(key)) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : '[]');
  },
  setData: function setData(key, dataOrFunction) {
    if (typeof dataOrFunction === 'function') {
      var currentData = this.getArrayData(key);
      localStorage.setItem(key, JSON.stringify(dataOrFunction(currentData)));
    }

    if (typeof dataOrFunction !== 'function') {
      localStorage.setItem(key, JSON.stringify(dataOrFunction));
    }
  }
});

/***/ }),

/***/ "./src/js/utils/util.js":
/*!******************************!*\
  !*** ./src/js/utils/util.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUrl": () => (/* binding */ createUrl),
/* harmony export */   "findVideoInVideoInfoList": () => (/* binding */ findVideoInVideoInfoList),
/* harmony export */   "findVideoInVideoList": () => (/* binding */ findVideoInVideoList),
/* harmony export */   "parseTimeStamp": () => (/* binding */ parseTimeStamp),
/* harmony export */   "parserVideos": () => (/* binding */ parserVideos)
/* harmony export */ });
var findVideoInVideoList = function findVideoInVideoList(videoList, targetVideoId) {
  return videoList.find(function (video) {
    var _video$getVideoInfo = video.getVideoInfo(),
        videoId = _video$getVideoInfo.videoId;

    return videoId === targetVideoId;
  });
};
var findVideoInVideoInfoList = function findVideoInVideoInfoList(videoInfoList, targetVideoId) {
  return videoInfoList.find(function (_ref) {
    var videoId = _ref.videoId;
    return videoId === targetVideoId;
  });
};
var parserVideos = function parserVideos(data) {
  var nextPageToken = data.nextPageToken;
  var items = data.items;
  return {
    nextPageToken: nextPageToken,
    items: items.map(function (item) {
      var _item$id, _item$snippet, _item$snippet$publish, _item$snippet2, _item$snippet3, _item$snippet4, _item$snippet5;

      return {
        videoId: (_item$id = item.id) === null || _item$id === void 0 ? void 0 : _item$id.videoId,
        thumbnail: (_item$snippet = item.snippet) === null || _item$snippet === void 0 ? void 0 : _item$snippet.thumbnails['default'].url,
        publishTime: (_item$snippet$publish = (_item$snippet2 = item.snippet) === null || _item$snippet2 === void 0 ? void 0 : _item$snippet2.publishTime) !== null && _item$snippet$publish !== void 0 ? _item$snippet$publish : (_item$snippet3 = item.snippet) === null || _item$snippet3 === void 0 ? void 0 : _item$snippet3.publishedAt,
        channelTitle: (_item$snippet4 = item.snippet) === null || _item$snippet4 === void 0 ? void 0 : _item$snippet4.channelTitle,
        videoTitle: (_item$snippet5 = item.snippet) === null || _item$snippet5 === void 0 ? void 0 : _item$snippet5.title
      };
    })
  };
};
var parseTimeStamp = function parseTimeStamp(time) {
  var date = new Date(time);
  var year = date.getUTCFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return "".concat(year, "\uB144 ").concat(month, "\uC6D4 ").concat(day, "\uC77C");
};
var createUrl = function createUrl(API_URL, path, params) {
  var url = new URL(path, API_URL);
  url.search = new URLSearchParams(params).toString();
  return url;
};

/***/ }),

/***/ "./src/js/utils/validation.js":
/*!************************************!*\
  !*** ./src/js/utils/validation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canLoadImage": () => (/* binding */ canLoadImage),
/* harmony export */   "hasMissingProperty": () => (/* binding */ hasMissingProperty),
/* harmony export */   "hasNotSrcAttribute": () => (/* binding */ hasNotSrcAttribute),
/* harmony export */   "isEmptyKeyword": () => (/* binding */ isEmptyKeyword),
/* harmony export */   "isFirstSearchByKeyword": () => (/* binding */ isFirstSearchByKeyword),
/* harmony export */   "isMoreThanMaxVideoCount": () => (/* binding */ isMoreThanMaxVideoCount),
/* harmony export */   "isNoneSearchResult": () => (/* binding */ isNoneSearchResult),
/* harmony export */   "isNullVideoList": () => (/* binding */ isNullVideoList)
/* harmony export */ });
/* harmony import */ var _constants_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/video */ "./src/js/constants/video.js");

var hasMissingProperty = function hasMissingProperty(properties, object) {
  return properties.some(function (key) {
    return object[key] === undefined;
  });
};
var isEmptyKeyword = function isEmptyKeyword(keyword) {
  return keyword.trim().length === 0;
};
var isNoneSearchResult = function isNoneSearchResult(searchResult) {
  return searchResult.items.filter(function (item) {
    return item.snippet;
  }).length === 0;
};
var isNullVideoList = function isNullVideoList(videoList) {
  return videoList === null;
};
var isFirstSearchByKeyword = function isFirstSearchByKeyword(prevVideoListLength) {
  return prevVideoListLength === 0;
};
var isMoreThanMaxVideoCount = function isMoreThanMaxVideoCount(videoList) {
  return videoList.length >= _constants_video__WEBPACK_IMPORTED_MODULE_0__.MAX_SAVE_VIDEO_COUNT;
};
var canLoadImage = function canLoadImage(showingPX, showingCutline) {
  return showingPX < showingCutline;
};
var hasNotSrcAttribute = function hasNotSrcAttribute(imgElement) {
  return !imgElement.src;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  min-width: 390px;\n  margin: 0 auto;\n  padding: 0 10px;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\n.nav__button {\n  width: 80px;\n  height: 36px;\n  background: #f5f5f5;\n}\n\n.nav__button:hover {\n  background: #ebebeb;\n}\n\n.button.checked {\n  background-color: rgba(0, 188, 212, 0.36);\n}\n\n.saved-video-section.hide {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,aAAa;AACf","sourcesContent":["body {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  min-width: 390px;\n  margin: 0 auto;\n  padding: 0 10px;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\n.nav__button {\n  width: 80px;\n  height: 36px;\n  background: #f5f5f5;\n}\n\n.nav__button:hover {\n  background: #ebebeb;\n}\n\n.button.checked {\n  background-color: rgba(0, 188, 212, 0.36);\n}\n\n.saved-video-section.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_video_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./video.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/video.css");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_video_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAIA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,mCAAmC;AACrC;;AAEA;;;;EAIE,aAAa;AACf","sourcesContent":["@import './app.css';\n@import './modal.css';\n@import './skeleton.css';\n@import './video.css';\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.modal-container.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  max-width: 1080px;\n  min-width: 420px;\n\n  width: 90%;\n  height: 80%;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n.search-result.search-result--no-result {\n  justify-content: center;\n  align-items: center;\n}\n\n.no-result.hide {\n  display: none;\n}\n.no-result {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;;EAEhB,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,qCAAqC;EACrC,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB","sourcesContent":[".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.modal-container.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  max-width: 1080px;\n  min-width: 420px;\n\n  width: 90%;\n  height: 80%;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n.search-result.search-result--no-result {\n  justify-content: center;\n  align-items: center;\n}\n\n.no-result.hide {\n  display: none;\n}\n.no-result {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".skeleton-item {\n  width: 236px;\n}\n\n.skeleton-item * {\n  margin-bottom: 10px;\n}\n\n.skeleton-item .image,\n.skeleton-item .line {\n  background-image: linear-gradient(90deg, #e0e0e0 0px, #ededed 30px, #e0e0e0 60px);\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton-item .image {\n  height: 135px;\n}\n\n.skeleton-item .line {\n  height: 16px;\n}\n\n.skeleton-item .line.big {\n  width: 100%;\n}\n\n.skeleton-item .line.middle {\n  width: 80%;\n}\n.skeleton-item .line.small {\n  width: 50%;\n}\n.skeleton-item div:last-child {\n  display: flex;\n  justify-content: flex-end;\n}\n.skeleton-item .line.thick {\n  width: 30%;\n  height: 30px;\n}\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/skeleton.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,iFAAiF;EACjF,uCAAuC;AACzC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;AACA;EACE,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,YAAY;AACd;AACA;EACE;IACE,iCAAiC;EACnC;EACA;;IAEE,0BAA0B;EAC5B;AACF","sourcesContent":[".skeleton-item {\n  width: 236px;\n}\n\n.skeleton-item * {\n  margin-bottom: 10px;\n}\n\n.skeleton-item .image,\n.skeleton-item .line {\n  background-image: linear-gradient(90deg, #e0e0e0 0px, #ededed 30px, #e0e0e0 60px);\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton-item .image {\n  height: 135px;\n}\n\n.skeleton-item .line {\n  height: 16px;\n}\n\n.skeleton-item .line.big {\n  width: 100%;\n}\n\n.skeleton-item .line.middle {\n  width: 80%;\n}\n.skeleton-item .line.small {\n  width: 50%;\n}\n.skeleton-item div:last-child {\n  display: flex;\n  justify-content: flex-end;\n}\n.skeleton-item .line.thick {\n  width: 30%;\n  height: 30px;\n}\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/video.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/video.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".video-list {\n  width: 100%;\n  height: 380px;\n  display: grid;\n  grid-template-columns: repeat(1, 250px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n\n  justify-content: center;\n  margin: 30px 0 0 0;\n}\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n\n  margin: 0 0 10px 0;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: #efefef;\n}\n\n@media (min-width: 600px) {\n  .video-list {\n    grid-template-columns: repeat(2, 250px);\n  }\n}\n@media (min-width: 960px) {\n  .video-list {\n    grid-template-columns: repeat(3, 250px);\n  }\n}\n\n@media (min-width: 1280px) {\n  .video-list {\n    grid-template-columns: repeat(4, 250px);\n  }\n}\n\n.video-list.hide {\n  display: none;\n}\n\n.video-item__button_container {\n  position: absolute;\n  right: 0;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__button_container button:first-child {\n  margin: 0 5px 0 0;\n}\n.video-item__button_container button:hover {\n  background-color: rgba(0, 188, 212, 0.36);\n}\n\n.video-item__button_container button {\n  padding: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/video.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,uCAAuC;EACvC,kBAAkB;EAClB,kBAAkB;;EAElB,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;;EAEb,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE;IACE,uCAAuC;EACzC;AACF;AACA;EACE;IACE,uCAAuC;EACzC;AACF;;AAEA;EACE;IACE,uCAAuC;EACzC;AACF;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,yCAAyC;AAC3C;;AAEA;EACE,YAAY;AACd","sourcesContent":[".video-list {\n  width: 100%;\n  height: 380px;\n  display: grid;\n  grid-template-columns: repeat(1, 250px);\n  overflow-y: scroll;\n  overflow-x: hidden;\n\n  justify-content: center;\n  margin: 30px 0 0 0;\n}\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n\n  margin: 0 0 10px 0;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: #efefef;\n}\n\n@media (min-width: 600px) {\n  .video-list {\n    grid-template-columns: repeat(2, 250px);\n  }\n}\n@media (min-width: 960px) {\n  .video-list {\n    grid-template-columns: repeat(3, 250px);\n  }\n}\n\n@media (min-width: 1280px) {\n  .video-list {\n    grid-template-columns: repeat(4, 250px);\n  }\n}\n\n.video-list.hide {\n  display: none;\n}\n\n.video-item__button_container {\n  position: absolute;\n  right: 0;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__button_container button:first-child {\n  margin: 0 5px 0 0;\n}\n.video-item__button_container button:hover {\n  background-color: rgba(0, 188, 212, 0.36);\n}\n\n.video-item__button_container button {\n  padding: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/images/not_found.png":
/*!*****************************************!*\
  !*** ./src/assets/images/not_found.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "not_found.png");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorGet)
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorSet)
/* harmony export */ });
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classExtractFieldDescriptor)
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldGet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldSet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorSet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "set");
  (0,_classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor, value);
  return value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _src_assets_images_not_found_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/assets/images/not_found.png */ "./src/assets/images/not_found.png");
/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/index */ "./src/js/index.js");



window.addEventListener('DOMContentLoaded', function () {
  (0,_js_index__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map