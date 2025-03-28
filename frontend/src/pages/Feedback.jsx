import React from "react";
// import FeedbackForm from "../components/FeedbackForm";
import FeedbackForm from "../components/Feedback/FeedbackForm";
// import FeedbackList from "../components/FeedbackList";
import FeedbackList from "../components/Feedback/FeedbackList";
import "./Feedback.css";
import Navbar from "../common/Navbar/Navbar";
const Feedback = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl">Please submit Your Feedback</h1>
      <FeedbackForm />
      <FeedbackList category="Product Features" />
      <FeedbackList category="Product Pricing" />
      <FeedbackList category="Product Usability" />
    </div>
  );
};

export default Feedback;
