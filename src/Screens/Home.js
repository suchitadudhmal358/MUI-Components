import React from "react";
import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import TabScreen from "./TabScreen";
const Home = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent={"center"}
      sx={{ mt: 10 }}
    >
      <Button variant="outlined" href="/tabScreen">
        Tabs in Material UI
      </Button>
      <Button variant="outlined">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
};

export default Home;
