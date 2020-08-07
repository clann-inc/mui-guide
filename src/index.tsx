import * as React from "react";
import { Box } from "@material-ui/core";

type Props = {
  children: React.ReactNode;
};

export default ({ children }: Props) => <Box>{children}</Box>;
