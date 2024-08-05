import React from "react";
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrderTable = () => {
  const orders = [
    {
      customer: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      customer: "Jane Cooper",
      orderNo: "48967586",
      amount: "$305.02",
      status: "Delivered",
    },
    {
      customer: "Alle Jipper",
      orderNo: "48973586",
      amount: "$23.02",
      status: "Cancelled",
    },
    {
      customer: "Bob Jak",
      orderNo: "88367586",
      amount: "$55.02",
      status: "Pending",
    },
    {
      customer: "Jane Rock",
      orderNo: "368967586",
      amount: "$625.02",
      status: "Delivered",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return {
          backgroundColor: "rgb(240 161 16 / 78%)",
          color: "white",
          borderRadius: "15px",
          padding: "5px 10px",
          textAlign: "center",
          fontWeight: "bold",
        };
      case "Cancelled":
        return {
          backgroundColor: "rgb(224 28 28 / 80%)",
          color: "white",
          borderRadius: "15px",
          padding: "5px 10px",
          textAlign: "center",
          fontWeight: "bold",
        };
      case "Delivered":
        return {
          backgroundColor: "rgba(0, 128, 0, 0.5)",
          color: "white",
          borderRadius: "15px",
          padding: "5px 10px",
          textAlign: "center",
          fontWeight: "bold",
        };
      default:
        return {
          backgroundColor: "gray",
          color: "white",
          borderRadius: "15px",
          padding: "5px 10px",
          textAlign: "center",
          fontWeight: "bold",
        };
    }
  };

  const stringToColor = (string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += ("00" + value.toString(16)).substr(-2);
    }
    return color;
  };

  const stringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
        marginRight: "10px",
        fontSize: "1.10rem",
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  return (
    <TableContainer
      component={Paper}
      style={{ backgroundColor: "#1c1c1e", color: "white" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "white" }}>Customer</TableCell>
            <TableCell style={{ color: "white" }}>Order No.</TableCell>
            <TableCell style={{ color: "white" }}>Amount</TableCell>
            <TableCell style={{ color: "white" }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell style={{ display: "flex", alignItems: "center", color: "white" }}>
                <Avatar {...stringAvatar(order.customer)} />
                {order.customer}
              </TableCell>
              <TableCell style={{ color: "white" }}>{order.orderNo}</TableCell>
              <TableCell style={{ color: "white" }}>{order.amount}</TableCell>
              <TableCell>
                <div style={getStatusStyle(order.status)}>{order.status}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
