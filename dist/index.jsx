"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const core_1 = require("@material-ui/core");
const clsx_1 = require("clsx");
const useStyle = core_1.makeStyles((theme) => ({
    root: {
        outline: "1px solid #00f",
        "& *": {
            outline: "1px solid #00f",
        },
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
            width: theme.breakpoints.values.sm,
        },
        "&.md": {
            width: theme.breakpoints.values.md,
        },
        "&.lg": {
            width: theme.breakpoints.values.lg,
        },
        "&.xl": {
            width: theme.breakpoints.values.xl,
        },
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
        pointerEvents: "none",
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
            bottom: 0,
        },
        "&.sm": {
            width: theme.breakpoints.values.sm,
            backgroundColor: "#444",
            "&::after": {
                content: `"sm-${theme.breakpoints.values.sm}"`,
            },
        },
        "&.md": {
            width: theme.breakpoints.values.md,
            backgroundColor: "#333",
            "&::after": {
                content: `"md-${theme.breakpoints.values.md}"`,
            },
        },
        "&.lg": {
            backgroundColor: "#222",
            width: theme.breakpoints.values.lg,
            "&::after": {
                content: `"lg-${theme.breakpoints.values.lg}"`,
            },
        },
        "&.xl": {
            bottom: 0,
            backgroundColor: "#000",
            width: theme.breakpoints.values.xl,
            "&::after": {
                content: `"xl-${theme.breakpoints.values.xl}"`,
            },
        },
        "&.full": {
            bottom: 0,
            backgroundColor: "#000",
            width: "100%",
            "&::after": {
                content: `"full"`,
            },
        },
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
        "&::before": {
            color: "#fff",
            display: "block",
            [theme.breakpoints.only("xs")]: {
                content: "'xs'",
            },
            [theme.breakpoints.only("sm")]: {
                content: "'sm'",
            },
            [theme.breakpoints.only("md")]: {
                content: "'md'",
            },
            [theme.breakpoints.only("lg")]: {
                content: "'lg'",
            },
            [theme.breakpoints.only("xl")]: {
                content: "'xl'",
            },
        },
    },
}));
exports.default = ({ children, disable = false }) => {
    const classes = useStyle();
    const [screenSize, setScreenSize] = react_1.useState(0);
    react_1.useEffect(() => {
        window.addEventListener("resize", (args) => setScreenSize(window.innerWidth));
    }, []);
    return (<>
      {disable ? (children) : (<>
          <core_1.Box className={classes.root}>{children}</core_1.Box>
          <core_1.Box className={clsx_1.default(classes.ruler, "sm")}/>
          <core_1.Box className={clsx_1.default(classes.ruler, "md")}/>
          <core_1.Box className={clsx_1.default(classes.ruler, "lg")}/>
          <core_1.Box className={clsx_1.default(classes.ruler, "xl")}/>
          <core_1.Box className={clsx_1.default(classes.monitorWrap)}>
            <core_1.Box className={clsx_1.default(classes.monitor, "sm")}/>
            <core_1.Box className={clsx_1.default(classes.monitor, "md")}/>
            <core_1.Box className={clsx_1.default(classes.monitor, "lg")}/>
            <core_1.Box className={clsx_1.default(classes.monitor, "xl")}/>
            <core_1.Box className={clsx_1.default(classes.monitor, "full")}/>
          </core_1.Box>
          <core_1.Box className={clsx_1.default(classes.screenSize)}>{screenSize}</core_1.Box>
        </>)}
    </>);
};
