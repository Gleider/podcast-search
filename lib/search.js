'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.info = exports.tagName = exports.listTags = exports.top = exports.search = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = exports.search = function search(podcast) {
  if (podcast === undefined || podcast === null) {
    return [];
  }
  var str = podcast.split(' ').join('%20');
  return fetch(_config2.default + '/search.json?q=' + str).then(function (data) {
    return data.json();
  });
};

var top = exports.top = function top() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  return fetch(_config2.default + '/toplist/' + value + '.json').then(function (data) {
    return data.json();
  });
};

var listTags = exports.listTags = function listTags() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  return fetch(_config2.default + '/api/2/tags/' + value + '.json').then(function (data) {
    return data.json();
  });
};

var tagName = exports.tagName = function tagName(tag) {
  var quant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if (tag) {
    return fetch(_config2.default + '/api/2/tag/' + tag + '/' + quant + '.json').then(function (data) {
      return data.json();
    });
  }
  return [];
};

var info = exports.info = function info(url) {
  if (url) {
    return fetch(_config2.default + '/api/2/data/podcast.json?url=' + url).then(function (data) {
      return data.json();
    });
  }
  return [];
};