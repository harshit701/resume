"use client";
import { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import { careerData } from "../../data";

const Carrer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="container mx-auto max-w-4xl items-center">
      <div>
        <h2 className="text-5xl text-center">Professional Experience</h2>
      </div>
      <div>
        {isClient && <Chrono items={careerData} mode="VERTICAL" hideControls />}
      </div>
    </div>
  );
};

export default Carrer;
