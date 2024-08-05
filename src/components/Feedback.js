import React from "react";
import { Paper, List, ListItem, ListItemText } from "@mui/material";
import "../index.css";

const Feedback = () => {
  const feedbacks = [
    {
      customer: "Jenny Wilson",
      feedback: "The food was excellent and so was the service.",
      rating: 5,
    },
    {
      customer: "Dianne Russell",
      feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread.",
      rating: 4,
    },
    {
      customer: "Tom Williams",
      feedback: "Service was a bit slow, but the sushi was fresh and tasty. Worth the wait.",
      rating: 3,
    },
    {
      customer: "Emily Davis",
      feedback: "Loved the ambiance and the creativity in the dishes. However, the prices were a bit high for the portion sizes.",
      rating: 4,
    },
    {
      customer: "Jenny Wilson",
      feedback: "The food was excellent and so was the service.",
      rating: 5,
    },
    {
      customer: "Dianne Russell",
      feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread.",
      rating: 4,
    },
    {
      customer: "Tom Williams",
      feedback: "Service was a bit slow, but the sushi was fresh and tasty. Worth the wait.",
      rating: 3,
    },
    {
      customer: "Emily Davis",
      feedback: "Loved the ambiance and the creativity in the dishes. However, the prices were a bit high for the portion sizes.",
      rating: 4,
    },
    {
      customer: "Jenny Wilson",
      feedback: "The food was excellent and so was the service.",
      rating: 5,
    },
    {
      customer: "Dianne Russell",
      feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread.",
      rating: 4,
    },
    {
      customer: "Tom Williams",
      feedback: "Service was a bit slow, but the sushi was fresh and tasty. Worth the wait.",
      rating: 3,
    },
    {
      customer: "Emily Davis",
      feedback: "Loved the ambiance and the creativity in the dishes. However, the prices were a bit high for the portion sizes.",
      rating: 4,
    },
    {
      customer: "Jenny Wilson",
      feedback: "The food was excellent and so was the service.",
      rating: 5,
    },
    {
      customer: "Dianne Russell",
      feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread.",
      rating: 4,
    },
    {
      customer: "Tom Williams",
      feedback: "Service was a bit slow, but the sushi was fresh and tasty. Worth the wait.",
      rating: 3,
    },
    {
      customer: "Emily Davis",
      feedback: "Loved the ambiance and the creativity in the dishes. However, the prices were a bit high for the portion sizes.",
      rating: 4,
    },
    {
      customer: "Jenny Wilson",
      feedback: "The food was excellent and so was the service.",
      rating: 5,
    },
    {
      customer: "Dianne Russell",
      feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread.",
      rating: 4,
    },
    {
      customer: "Tom Williams",
      feedback: "Service was a bit slow, but the sushi was fresh and tasty. Worth the wait.",
      rating: 3,
    },
    {
      customer: "Emily Davis",
      feedback: "Loved the ambiance and the creativity in the dishes. However, the prices were a bit high for the portion sizes.",
      rating: 4,
    },
    {
      customer: "Jenny Wilson",
      feedback: "The food was excellent and so was the service.",
      rating: 5,
    },
    {
      customer: "Dianne Russell",
      feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread.",
      rating: 4,
    },
    {
      customer: "Tom Williams",
      feedback: "Service was a bit slow, but the sushi was fresh and tasty. Worth the wait.",
      rating: 3,
    },
    {
      customer: "Emily Davis",
      feedback: "Loved the ambiance and the creativity in the dishes. However, the prices were a bit high for the portion sizes.",
      rating: 4,
    },
  ];

  return (
    <Paper
      style={{backgroundColor: "#1c1c1e", color: "white" }}
    >
      <List className="custom-scrollbar" style={{ overflowY: 'scroll', height: '420px' }}>
        {feedbacks.map((feedback, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={feedback.customer}
              secondary={`${feedback.feedback} - ${"⭐".repeat(feedback.rating)}`}
              style={{ color: "white" }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Feedback;
