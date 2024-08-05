import {
  AltRoute,
  AltRouteOutlined,
  ArrowForwardIos,
  GpsFixed,
  LunchDining,
  MenuOpen,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

export default function Menus() {
  return (
    <div style={{ marginTop: "4px" }}>
      {/* goals */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              backgroundColor: "rgb(238 113 113 / 29%)",
            }}
          >
            <GpsFixed
              style={{
                color: "white",
                fontSize: "30px",
              }}
            />
          </div>
          <Typography variant="h6" style={{ marginLeft: 20 }}>
            Goals
          </Typography>
        </div>
        <div>
          <ArrowForwardIos style={{ marginTop: "4px" }} />
        </div>
      </div>
      {/* dishes */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              backgroundColor: "rgb(121 131 224 / 29%)",
            }}
          >
            <LunchDining
              style={{
                color: "white",
                fontSize: "30px",
              }}
            />
          </div>
          <Typography variant="h6" style={{ marginLeft: 20 }}>
            Goals
          </Typography>
        </div>
        <div>
          <ArrowForwardIos style={{ marginTop: "4px" }} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              backgroundColor: "rgb(76 153 177 / 29%)",
            }}
          >
            <MenuOpen
              style={{
                color: "white",
                fontSize: "30px",
              }}
            />
          </div>
          <Typography variant="h6" style={{ marginLeft: 20 }}>
            Goals
          </Typography>
        </div>
        <div>
          <ArrowForwardIos style={{ marginTop: "4px" }} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              backgroundColor: "rgb(233 106 215 / 29%)",
            }}
          >
            <AltRouteOutlined
              style={{
                color: "white",
                fontSize: "30px",
              }}
            />
          </div>
          <Typography variant="h6" style={{ marginLeft: 20 }}>
            Others
          </Typography>
        </div>
        <div>
          <ArrowForwardIos style={{ marginTop: "4px" }} />
        </div>
      </div>
    </div>
  );
}
