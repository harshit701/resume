"use client";
import { skills } from "@/data";
import SkillCard from "./skillCard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="container mx-auto max-w-4xl items-center">
      <div>
        <h2 className="text-5xl text-center">Tech Stack</h2>
      </div>
      <div className="flex">
        {skills.map((skill) => {
          return (
            <motion.div className={`flex-1`} key={skill.type}>
              <h2
                className={`columns-${skills.length} text-3xl underline mb-4`}>
                {skill.type}
              </h2>
              {skill.list.map((item) => (
                <SkillCard skill={item} key={item.title} />
              ))}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
