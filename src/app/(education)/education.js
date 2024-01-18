import TimeLine from "../(chrono)/timeline";
import { educationData } from "../../data";

const Education = () => {
  return (
    <div className="container mx-auto max-w-4xl items-center">
      <div>
        <h2 className="text-5xl text-center">Education</h2>
      </div>
      <div>{<TimeLine items={educationData} />}</div>
    </div>
  );
};

export default Education;
