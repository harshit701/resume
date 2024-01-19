"use client";
import { useEffect, useState } from "react";
import { Chrono } from "react-chrono";

const TimeLine = ({ children, ...props }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
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
      )}
    </>
  );
};

export default TimeLine;
