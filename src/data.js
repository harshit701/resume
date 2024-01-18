import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiVuedotjs,
  SiQuasar,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiKoa,
  SiSequelize,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiMongoose,
  SiAmazonaws,
  SiGit,
  SiBitbucket,
  SiAtlassian,
  SiRedux,
  SiPostman,
  SiSwagger,
} from "react-icons/si";

const city = {
  india: "Ahemdabad, India",
  uk: "Manchester, UK",
};

const companies = {
  boohoo: "Boohoo PLC",
  arinspect: "ARInspect Software PVT. LTD",
  fastrax: "Fastrax Infotech Pvt. Ltd.",
  devit: "Dev Information Technology Ltd.",
};

const positions = {
  nodejs: "Node JS Developer",
  software: "Software Engineer",
};

export const careerData = [
  {
    title: "May 2023 - Dec 2023",
    cardTitle: `${companies.boohoo}, ${city.uk}`,
    cardSubtitle: `${positions.nodejs}`,
    cardDetailedText: `• Collaborated with cross-functional teams to ensure seamless
        integration of new features.
        • Participated in regular code reviews, ensuring high-quality
        standards were consistently met across all development efforts.
        • Implemented version control systems for effective collaboration
        among team members while maintaining code integrity.
        • Tech Stack: Node JS (Typescript), MongoDB, AWS Services (e.g.
        S3, SQS, SNS, CDK, Code Pipeline, Lambda, secret manager)`,
  },
  {
    title: "Jun 2021 - Nov 2023",
    cardTitle: `${companies.arinspect}, ${city.india}`,
    cardSubtitle: `${positions.software}`,
    cardDetailedText: `• Enhanced software functionality by identifying and resolving
    complex technical issues.
    • Optimized code performance for improved user experience and
    system efficiency.
    • Mentored junior developers, fostering professional growth and
    enhancing team productivity.
    • Developed scalable applications using agile methodologies for
    timely project delivery.
    • Conducted thorough testing to identify and resolve bugs,
    ensuring optimal software performance.
    • Regularly reviewed peers'' code contributions, offering
    constructive feedback to enhance overall product quality.
    • Tech Stack: Node JS, Koa Framework, Sequelize ORM,
    PostgreSQL, AWS (Lambda, S3, secret Manager etc.), REST API,
    Micro-Services, GIT, Bitbucket, Atlassian JIRA`,
  },
  {
    title: "Nov 2020 - May 2021",
    cardTitle: `${companies.fastrax}, ${city.india}`,
    cardSubtitle: `${positions.software}`,
    cardDetailedText: `• Enhanced user experience by developing and implementing
    responsive web designs.
    • Reduced development time by creating reusable code libraries
    for future projects.
    • Established best practices for secure coding, reducing
    vulnerability risks within the application.
    • Tech Stack: Vue 3, Quasar Framework, Redux, GIT`,
  },
  {
    title: "Nov 2019 - Nov 2020",
    cardTitle: `${companies.arinspect}, ${city.india}`,
    cardSubtitle: `${positions.nodejs}`,
    cardDetailedText: `• Contributed innovative ideas during brainstorming sessions,
    driving project success through creative problem-solving.
    • Created custom APIs for seamless integration with third-party
    services, expanding application functionality and compatibility.
    • Participated in regular code reviews, ensuring high-quality
    standards were consistently met across all development efforts.
    • Played a key role in establishing a cutting-edge microservices
    framework, paving the way for enhanced scalability and
    performance.`,
  },
  {
    title: "Sep 2016 - Oct 2019",
    cardTitle: `${companies.devit}, ${city.india}`,
    cardSubtitle: `${positions.software}`,
    cardDetailedText: `• Consistently met project deadlines by effectively managing time
    and prioritizing tasks according to importance.
    • Collaborated with clients to define solution requirements.
    • Collaborated with management, internal and development
    partners regarding software application design status and project
    progress.
    • Identified and documented project changes with proactive
    budget oversight.
    • Handled multiple projects with different technologies like Node
    JS, Sequelize ORM, MYSQL, MongoDB, Swagger, AWS EC2`,
  },
];

export const educationData = [
  {
    title: "May 2016",
    cardTitle: `Alpha College of Engineering and Technology, ${city.uk}`,
    cardSubtitle: `Bachelor of Computer Engineering`,
  },
];

export const skills = [
  {
    type: "Frontend",
    list: [
      {
        title: "JavaScript",
        icon: <SiJavascript />,
      },
      {
        title: "React JS",
        icon: <SiReact />,
      },
      {
        title: "Redux",
        icon: <SiRedux />,
      },
      {
        title: "Next JS",
        icon: <SiNextdotjs />,
      },
      {
        title: "Vue JS",
        icon: <SiVuedotjs />,
      },
      {
        title: "Quasar Framework",
        icon: <SiQuasar />,
      },
      {
        title: "HTML5",
        icon: <SiHtml5 />,
      },
      {
        title: "CSS3",
        icon: <SiCss3 />,
      },
    ],
  },
  {
    type: "Backend",
    list: [
      {
        title: "Node JS",
        icon: <SiNodedotjs />,
      },
      {
        title: "Express JS",
        icon: <SiExpress />,
      },
      {
        title: "Koa JS",
        icon: <SiKoa />,
      },
      {
        title: "Sequelize ORM",
        icon: <SiSequelize />,
      },
      {
        title: "Mongoose",
        icon: <SiMongoose />,
      },
      {
        title: "MongoDB",
        icon: <SiMongodb />,
      },
      {
        title: "PostgreSQL",
        icon: <SiPostgresql />,
      },
      {
        title: "MySQL",
        icon: <SiMysql />,
      },
    ],
  },
  {
    type: "Cloud",
    list: [
      {
        title: "AWS",
        icon: <SiAmazonaws />,
      },
    ],
  },
  {
    type: "Version Tool",
    list: [
      {
        title: "Git",
        icon: <SiGit />,
      },
      {
        title: "BitBucket",
        icon: <SiBitbucket />,
      },
      {
        title: "Atlassian JIRA",
        icon: <SiAtlassian />,
      },
    ],
  },
  {
    type: "API Documentation",
    list: [
      {
        title: "Postman",
        icon: <SiPostman />,
      },
      {
        title: "Swagger",
        icon: <SiSwagger />,
      },
    ],
  },
];
