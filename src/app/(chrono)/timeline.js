"use client";
import { Chrono } from "react-chrono";

const TimeLine = ({ children, ...props }) => {
  return (
    <Chrono
      {...props}
      mode="VERTICAL"
      hideControls
      theme={{
        primary: "black",
        secondary: "none",
        cardBgColor: "none",
        cardForeColor: "black",
        titleColor: "black",
        titleColorActive: "black",
      }}>
      {children}
    </Chrono>
  );
};

export default TimeLine;
