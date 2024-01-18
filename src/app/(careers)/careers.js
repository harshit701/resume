import { careerData } from "../../data";
import TimeLine from "@/app/(chrono)/timeline.js";

const Carrer = () => {
  return (
    <div className="container mx-auto max-w-4xl items-center">
      <div>
        <h2 className="text-5xl text-center">Professional Experience</h2>
      </div>
      <div>{<TimeLine items={careerData} />}</div>
    </div>
  );
};

export default Carrer;
