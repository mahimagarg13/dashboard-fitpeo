import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import OrderTable from "./OrderTable";
import Feedback from "./Feedback";
import { useMediaQuery } from "react-responsive";

import {
  ArrowDropDown,
  ArrowDropUp,
  Autorenew,
  CancelPresentation,
  LocalShipping,
  ShoppingBag,
} from "@mui/icons-material";
import NetProfit from "./NetProfit";
import Menus from "./Menus";
import ActivityChart from "./ActivityChart";

const Dashboard = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const styles = {
    leftContainer: {
      width: isMobileOrTablet ? "100%" : "66%",
      padding: "5px",
    },
    rightContainer: {
      width: isMobileOrTablet ? "100%" : "34%",
      padding: "5px",
    },
    dropdown: {
      padding: "8px",
      fontSize: "12px",
      border: "1px solid #ccc",
      borderRadius: "18px",
      outline: "none",
      transition: "border-color 0.3s",
      backgroundColor: "rgb(80,80,86)",
      color: "white",
      option: {
        backgroundColor: "#1c1c1e",
        color: "white",
        border: "1px solid #ccc",
        borderRadius: "18px",
        outline: "none",
      },
    },
  };

  const Dropdown = ({ selectedOption, handleChange }) => {
    return (
      <div>
        <select
          id="time-period"
          style={styles.dropdown}
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
    );
  };

  const [selectedOption, setSelectedOption] = useState("Weekly");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      style={{ backgroundColor: "black", minHeight: "100vh", padding: "16px" }}
    >
      <Typography variant="h4" style={{ color: "white", marginBottom: "16px" }}>
        Dashboard
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: isMobileOrTablet ? "column" : "row",
        }}
      >
        <div style={styles.leftContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper
                style={{
                  padding: "16px",
                  backgroundColor: "#1c1c1e",
                  color: "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(85, 85, 201, 0.29)",
                  }}
                >
                  <LocalShipping
                    style={{
                      color: "white",
                      fontSize: "30px",
                    }}
                  />
                </div>

                <Typography variant="h6">Total Orders</Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                  }}
                >
                  <Typography variant="h4">75</Typography>
                  <div style={{ color: "#00b359" }}>
                    <ArrowDropUp
                      style={{ fontSize: 40, verticalAlign: "middle" }}
                    />
                    <Typography variant="body">3%</Typography>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper
                style={{
                  padding: "16px",
                  backgroundColor: "#1c1c1e",
                  color: "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(51, 255, 89, 0.5)",
                  }}
                >
                  <ShoppingBag
                    style={{
                      color: "white",
                      fontSize: "30px",
                    }}
                  />
                </div>
                <Typography variant="h6">Total Delivered</Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                  }}
                >
                  <Typography variant="h4">75</Typography>
                  <div style={{ color: "red" }}>
                    <ArrowDropDown
                      style={{ fontSize: 40, verticalAlign: "middle" }}
                    />
                    <Typography variant="body">2%</Typography>
                  </div>
                </div>{" "}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper
                style={{
                  padding: "16px",
                  backgroundColor: "#1c1c1e",
                  color: "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(253, 33, 59, 0.3)",
                  }}
                >
                  <CancelPresentation
                    style={{
                      color: "white",
                      fontSize: "30px",
                    }}
                  />
                </div>
                <Typography variant="h6">Total Cancelled</Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                  }}
                >
                  <Typography variant="h4">05</Typography>
                  <div style={{ color: "#00b359" }}>
                    <ArrowDropUp
                      style={{ fontSize: 40, verticalAlign: "middle" }}
                    />
                    <Typography variant="body">2%</Typography>
                  </div>
                </div>{" "}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper
                style={{
                  padding: "16px",
                  backgroundColor: "#1c1c1e",
                  color: "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(236, 13, 209, 0.4)",
                  }}
                >
                  <Autorenew
                    style={{
                      color: "white",
                      fontSize: "30px",
                    }}
                  />
                </div>
                <Typography variant="h6">Total Revenue</Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                  }}
                >
                  <Typography variant="h4">$12k</Typography>
                  <div style={{ color: "red" }}>
                    <ArrowDropDown
                      style={{ fontSize: 40, verticalAlign: "middle" }}
                    />
                    <Typography variant="body">2%</Typography>
                  </div>
                </div>{" "}
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3} style={{ marginTop: "20px" }}>
            <Grid item xs={12}>
              <Paper
                style={{
                  padding: "16px",
                  backgroundColor: "#1c1c1e",
                  color: "white",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6">Activity</Typography>
                  <Dropdown
                    selectedOption={selectedOption}
                    handleChange={handleChange}
                  />
                </div>

                <ActivityChart />
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3} style={{ marginTop: "20px" }}>
            <Grid item xs={12}>
              <Paper
                style={{
                  padding: "16px",
                  backgroundColor: "#1c1c1e",
                  color: "white",
                }}
              >
                <Typography variant="h6">Recent Orders</Typography>

                <OrderTable />
              </Paper>
            </Grid>
          </Grid>
        </div>
        <div style={styles.rightContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper
                style={{
                  backgroundColor: "#1c1c1e",
                  color: "white",
                }}
              >
                <NetProfit />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ marginTop: "20px" }}>
            <Grid item xs={12}>
              <Paper
                style={{
                  backgroundColor: "#1c1c1e",
                  color: "white",
                  padding: "16px",
                }}
              >
                <Menus />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ marginTop: "20px" }}>
            <Grid item xs={12}>
              <Paper
                style={{
                  padding: "16px",
                  backgroundColor: "#1c1c1e",
                  color: "white",
                }}
              >
                <Typography variant="h6">Customer Feedbacks</Typography>

                <Feedback />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
