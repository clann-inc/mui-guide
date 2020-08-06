import { ReactNode, useEffect, useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyle = makeStyles((theme) => ({
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

type Props = {
  children?: ReactNode;
  disable?: boolean;
};

export default ({ children, disable = false }: Props) => {
  const classes = useStyle();
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", (args) =>
      setScreenSize(window.innerWidth)
    );
  }, []);

  return (
    <>
      {disable ? (
        children
      ) : (
        <>
          <Box className={classes.root}>{children}</Box>
          <Box className={clsx(classes.ruler, "sm")} />
          <Box className={clsx(classes.ruler, "md")} />
          <Box className={clsx(classes.ruler, "lg")} />
          <Box className={clsx(classes.ruler, "xl")} />
          <Box className={clsx(classes.monitorWrap)}>
            <Box className={clsx(classes.monitor, "sm")} />
            <Box className={clsx(classes.monitor, "md")} />
            <Box className={clsx(classes.monitor, "lg")} />
            <Box className={clsx(classes.monitor, "xl")} />
            <Box className={clsx(classes.monitor, "full")} />
          </Box>
          <Box className={clsx(classes.screenSize)}>{screenSize}</Box>
        </>
      )}
    </>
  );
};
