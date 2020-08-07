"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles(function (theme) { return ({
    root: {
        color: theme.palette.primary.main
    }
}); });
exports["default"] = (function (_a) {
    var children = _a.children;
    var classes = useStyles();
    return (react_1["default"].createElement(core_1.Box, null,
        react_1["default"].createElement(core_1.Box, { className: classes.root }, "hoge"),
        children));
});
