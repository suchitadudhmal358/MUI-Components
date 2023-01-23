import React, { useState } from "react";
import { Tab, Box, Button, TextField } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { TabPanelUI } from "../Components/TabPanelUI";
import { spacing } from "@mui/system";

const TabScreen = () => {
  const tabs = [
    "nature",
    "flowers",
    "technology",
    "happy",
    "sky",
    "success",
    "money",
    "meditation",
    "fashion",
  ];
  const [value, setValue] = useState("nature");
  const [catValue, setCatValue] = useState("");
  const [tabArray, setTabArray] = useState([...tabs]);
  console.log(tabArray);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    // tabs.push(catValue);
    setTabArray([...tabArray, catValue]);
    setCatValue("");
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", mt: 2 }}>
      <Box spacing={2}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          sx={{ mx: 2 }}
          defaultValue={catValue}
          onChange={(e) => setCatValue(e.target.value)}
        />
        <Button variant="outlined" onClick={handleClick}>
          Add New Category
        </Button>
      </Box>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {tabArray.map((tab, i) => (
              <Tab label={tab} value={tab} key={i} />
            ))}
            {/* <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" /> */}
          </TabList>
        </Box>
        {tabArray.map((tab, i) => (
          <TabPanel value={tab} key={i}>
            <TabPanelUI tabName={tab} key={i} />
          </TabPanel>
        ))}
        {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  );
};

export default TabScreen;
