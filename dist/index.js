"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var clsx_1 = __importDefault(require("clsx"));
var useStyle = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        root: {
            outline: "1px solid #00f",
            "& *": {
                outline: "1px solid #00f"
            }
        },
        ruler: {
            position: "fixed",
            bottom: 0,
            top: 0,
            left: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "translateX(-50%)",
            zIndex: 1000,
            outline: "1px solid #00f",
            pointerEvents: "none",
            "&.sm": {
                width: theme.breakpoints.values.sm
            },
            "&.md": {
                width: theme.breakpoints.values.md
            },
            "&.lg": {
                width: theme.breakpoints.values.lg
            },
            "&.xl": {
                width: theme.breakpoints.values.xl
            }
        },
        monitorWrap: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            zIndex: 1000,
            pointerEvents: "none"
        },
        monitor: {
            height: "1rem",
            color: "#fff",
            display: "flex",
            fontSize: theme.typography.pxToRem(10),
            justifyContent: "center",
            fontWeight: "bold",
            alignItems: "center",
            maxWidth: "100%",
            position: "relative",
            "&::before": {
                content: "''",
                position: "absolute",
                borderLeft: "1px solid #fff",
                borderRight: "1px solid #fff",
                top: 0,
                left: theme.spacing(3),
                right: theme.spacing(3),
                bottom: 0
            },
            "&.sm": {
                width: theme.breakpoints.values.sm,
                backgroundColor: "#444",
                "&::after": {
                    content: "\"sm-" + theme.breakpoints.values.sm + "\""
                }
            },
            "&.md": {
                width: theme.breakpoints.values.md,
                backgroundColor: "#333",
                "&::after": {
                    content: "\"md-" + theme.breakpoints.values.md + "\""
                }
            },
            "&.lg": {
                backgroundColor: "#222",
                width: theme.breakpoints.values.lg,
                "&::after": {
                    content: "\"lg-" + theme.breakpoints.values.lg + "\""
                }
            },
            "&.xl": {
                bottom: 0,
                backgroundColor: "#000",
                width: theme.breakpoints.values.xl,
                "&::after": {
                    content: "\"xl-" + theme.breakpoints.values.xl + "\""
                }
            },
            "&.full": {
                bottom: 0,
                backgroundColor: "#000",
                width: "100%",
                "&::after": {
                    content: "\"full\""
                }
            }
        },
        screenSize: {
            position: "fixed",
            top: "90%",
            right: 0,
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: theme.typography.pxToRem(10),
            width: "3rem",
            height: "3rem",
            background: "#000",
            color: "#fff",
            "&::before": (_a = {
                    color: "#fff",
                    display: "block"
                },
                _a[theme.breakpoints.only("xs")] = {
                    content: "'xs'"
                },
                _a[theme.breakpoints.only("sm")] = {
                    content: "'sm'"
                },
                _a[theme.breakpoints.only("md")] = {
                    content: "'md'"
                },
                _a[theme.breakpoints.only("lg")] = {
                    content: "'lg'"
                },
                _a[theme.breakpoints.only("xl")] = {
                    content: "'xl'"
                },
                _a)
        }
    });
});
function Guide(_a) {
    var children = _a.children, _b = _a.disable, disable = _b === void 0 ? false : _b;
    var classes = useStyle();
    var _c = react_1.useState(0), screenSize = _c[0], setScreenSize = _c[1];
    react_1.useEffect(function () {
        window.addEventListener("resize", function (args) {
            return setScreenSize(window.innerWidth);
        });
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, disable ? (children) : (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(core_1.Box, { className: classes.root }, children),
        react_1["default"].createElement(core_1.Box, { className: clsx_1["default"](classes.ruler, "sm") }),
        react_1["default"].createElement(core_1.Box, { className: clsx_1["default"](classes.ruler, "md") }),
        react_1["default"].createElement(core_1.Box, { className: clsx_1["default"](classes.ruler, "lg") }),
        react_1["default"].createElement(core_1.Box, { className: clsx_1["default"](classes.ruler, "xl") }),
        react_1["default"].createElement(core_1.Box, { className: clsx_1["default"](classes.monitorWrap) },
            react_1["default"].createElement(core_1.Box, { className: clsx_1["default"](classes.monitor, "sm") }),
            react_1["default"].createElement(core_1.Box, { className: clsx_1["default"](classes.monitor, "md") }),
            react_1["default"].createElement(core_1.Box, { className: clsx_1["default"](classes.monitor, "lg") }),
            react_1["default"].createElement(core_1.Box, { className: clsx_1["default"](classes.monitor, "xl") }),
            react_1["default"].createElement(core_1.Box, { className: clsx_1["default"](classes.monitor, "full") })),
        react_1["default"].createElement(core_1.Box, { className: clsx_1["default"](classes.screenSize) }, screenSize)))));
}
exports["default"] = Guide;
