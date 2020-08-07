"use strict";
exports.__esModule = true;
var React = require("react");
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles(function (theme) { return ({
    root: {
        color: theme.palette.primary.main
    }
}); });
exports["default"] = (function (_a) {
    var children = _a.children;
    var classes = useStyles();
    return (React.createElement(core_1.Box, null,
        React.createElement(core_1.Box, { className: classes.root }, "hoge"),
        children));
});
