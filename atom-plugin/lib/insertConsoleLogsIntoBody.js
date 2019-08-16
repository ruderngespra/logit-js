const consoleLogNode = require('./consoleLogNode.js');

module.exports = function insertConsoleLogsIntoBody(container, t, options) {
    return container.unshiftContainer('body', consoleLogNode(t, options));
};
