import { ArrowDropUp } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import React from "react";
import DoughnutChart from "./Doughnut";

const NetProfit = () => {
  return (
    <div>
      <Paper
        style={{
          padding: "16px",
          backgroundColor: "#1c1c1e",
          color: "white",
          display:'flex',
          justifyContent:'space-between',
          flexWrap:'wrap'
        }}
      >
        <div>
          <Typography variant="body">Net Profit</Typography>
          <Typography style={{fontSize:'2.5rem' }}>
            $ 4859.7
          </Typography>
          <div style={{ color: "#00b359" }}>
            <ArrowDropUp style={{ fontSize: 40, verticalAlign: "middle" }} />
            <Typography variant="body">3%</Typography>
          </div>
        </div>
        <div>
          <DoughnutChart />
        </div>
      </Paper>
    </div>
  );
};

export default NetProfit;
