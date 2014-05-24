if ('undefined' !== typeof(require)) {
    var buster = require('buster');
}

buster.coverage = buster.coverage || {};

if (typeof module === "object" && typeof require === "function") {
    module.exports = require("./extension");
}
