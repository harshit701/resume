"use client";
import { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import { educationData } from "../../data";

const Education = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="container mx-auto max-w-4xl items-center">
      <div>
        <h2 className="text-5xl text-center">Education</h2>
      </div>
      <div>
        {isClient && (
          <Chrono items={educationData} mode="VERTICAL" hideControls />
        )}
      </div>
    </div>
  );
};

export default Education;
