import React from "react";
import Sidebar from "../components/Sidebar";
import waiterImage from "../../../assets/waiter.png";
import { Box, Grid } from "@mui/material";

const Waiter = () => {
  return (
    <Grid container spacing={1}>
      <Grid item lg={3}>
        <Sidebar
          image={waiterImage}
          name={"Ahmad Rehawi"}
          position={"Waiter"}
        />
      </Grid>
      <Grid item sm={9}>
        <Box>Content</Box>
      </Grid>
    </Grid>
  );
};

export default Waiter;
