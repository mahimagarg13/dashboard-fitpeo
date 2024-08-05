import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { Settings, Home, ListAlt, BarChart, ExitToApp, SpaceDashboard } from "@mui/icons-material";
import Dashboard from "./Dashboard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Tabss = () => {
  const { tabName } = useParams();
  const [value, setValue] = useState(0);

  const tabNameMapping = {
    profile: 0,
    subscriptions: 1,
    demo: 2,
    reports: 3,
    settings: 4,
  };

  useEffect(() => {
    if (tabName) {
      setValue(tabNameMapping[tabName.toLowerCase()]);
    }
  }, [tabName]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const overflowStyle = {
    width: "100%",
    backgroundColor: "black",
    overflowY: "auto",
  };

  return (
    <Box
      id="profile-side-options"
      sx={{
        flexGrow: 1,
        bgcolor: "#1c1c1e",
        display: "flex",
        height: "80vh",
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          ".MuiTabs-flexContainer": {
            alignItems: "center",
            height: "100%",
          },
          ".MuiTabs-scroller": {
            height: "100%",
          },
          ".MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        {[
          { icon: <Home />, index: 0 },
          { icon: <SpaceDashboard />, index: 1 },
          { icon: <ListAlt />, index: 2 },
          { icon: <BarChart />, index: 3 },
          { icon: <Settings />, index: 4 },
        ].map(({ icon, index }) => (
          <Tab
            key={index}
            icon={icon}
            {...a11yProps(index)}
            sx={{
              color: value === index ? "primary.main" : "gray",
              "&.Mui-selected": {
                color: "primary.main",
              },
            }}
          />
        ))}
        <Box sx={{ flexGrow: 1 }} />
        <Tab
          icon={<ExitToApp />}
          onClick={() => alert("Logging out")}
          sx={{
            color: "gray",
            marginTop: "auto",
            "&.Mui-selected": {
              color: "primary.main", 
            },
          }}
        />
      </Tabs>
      <TabPanel style={overflowStyle} value={value} index={0}>
        <Dashboard />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={1}>
        <h5 style={{ fontWeight: "bold", color: "white" }}>Home</h5>
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={2}>
        <h5 style={{ fontWeight: "bold", color: "white" }}>Demo</h5>
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={3}>
        <h5 style={{ fontWeight: "bold", color: "white" }}>Reports</h5>
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={4}>
        <h5 style={{ fontWeight: "bold", color: "white" }}>Settings</h5>
      </TabPanel>
    </Box>
  );
};

export default Tabss;
