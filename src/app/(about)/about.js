"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto flex max-w-4xl items-center h-screen columns-2 gap-8">
      <motion.div
        className="box-border w-1/3"
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}>
        <Image
          className="rounded-xl"
          alt="harshit"
          src="/harshit.JPG"
          width={400}
          height={400}
          priority={true}
        />
      </motion.div>
      <motion.div
        className="box-border w-2/3"
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 20, opacity: 1 }}>
        <h2 className="text-5xl">About Me</h2>
        <p className="text-justify">
          Hi, My name is Harshit Dave. I&apos;m a <b>Software Engineer</b> from
          the United Kingdom. Experienced software engineer with over 5 years of
          proven expertise in software development and a strong understanding of
          agile methodologies. Passionate about conceiving and delivering
          innovative projects that enhance organizational efficiency and drive
          success.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
