import * as React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
}));

type Props = {
  children: React.ReactNode;
};

export default ({ children }: Props) => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.root}>hoge</Box>
      {children}
    </Box>
  );
};
