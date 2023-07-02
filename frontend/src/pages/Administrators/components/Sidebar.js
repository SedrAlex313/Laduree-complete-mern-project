import { Box } from "@mui/material";
import React from "react";
import { appColor } from "../../../assets/Color";
import Logo from "../../../components/header/Logo";

const Sidebar = ({ name, image, position, links }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        position: "sticky",
        background: `linear-gradient(to bottom, #333, ${appColor.yellow})`,
      }}
    >
      <Box
        sx={{
          margin: "10px auto",
          display: "inline-block",
          textAlign: "center",
          transform: "scale(0.8)",
        }}
      >
        <Logo />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            width: "130px",
            borderRadius: "50%",
            border: `1px solid ${appColor.yellow}`,
          }}
        >
          <img style={{ maxWidth: "95%" }} src={image} />
        </Box>
        <Box
          sx={{ fontWeight: "600", margin: "10px 0 3px 0", fontSize: "1.2rem" }}
        >
          {name}
        </Box>
        <Box sx={{ fontWeight: "600", color: "#C1C1C1", fontSize: "1rem" }}>
          {position}
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Sidebar;
