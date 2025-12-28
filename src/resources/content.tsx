import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Frank Sebastian",
  lastName: "Cayaco",
  name: `Frank Sebastian Cayaco`,
  role: "Data Analyst/Full Stack Developer",
  avatar: "/images/avatar-v2.jpg",
  email: "cayacofranksebastian@gmail.com",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about infrastructure and technology in the Philippines</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/glamosky",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/frank-sebastian-gapas/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/gallery/djose.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Data is just a story waiting to be written.</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Frank, a student at <Text as="span" size="xl" weight="strong">MFI Polytechnic Institute Inc.</Text> passionate about <br />
      <Text as="span" size="xl" weight="strong" onBackground="accent-medium">turning data into stories</Text> and building web applications that solve real-world problems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        My endeavors overlap with data analysis, web development, and public transportation. I'm passionate about
        building projects that help streamline the quirky and complex public transport system of the Philippines.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Railfans of the Philippines",
        timeframe: "Jul 2024 - Present",
        role: "Volunteer",
        achievements: [
          <>
            Supported the small NGO in creating a complete suite of a web application for Special Edition Beep Card orders.
          </>,
          <>
            Helped registering the NGO to the Securities and Exchange Commission (SEC) for a formal Philippine Council for NGO Certification (PCNC).
          </>,
          <>
            Helped bridge the gap between commuters and key public transport agencies such as LTO, LRTA, DOTr, etc.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/gallery/horizontal-2.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Philippine Business for Social Progress",
        timeframe: "Jul 2024 - Sep 2024",
        role: "Intern",
        employmentType: "Part-time",
        locationType: "On-site",
        achievements: [
          <>
            Supply chain clerk, organized purchased orders.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Appen",
        timeframe: "Jun 2022 - Jan 2023",
        role: "Search Engine Evaluator",
        employmentType: "Freelance",
        locationType: "Remote",
        achievements: [
          <>
            Categorized curated Meta ads.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "MFI Polytechnic Institute Inc.",
        description: <>Studied Diploma in Information Technology</>,
      },
      {
        name: "Rizal Technological University",
        description: <>Studied BS in Industrial Engineering</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Data Science & Analytics",
        description: (
          <>Statistical analysis and data visualization using R and Python ecosystems.</>
        ),
        tags: [
          { name: "R", icon: "r" },
          { name: "Tidyverse", icon: "r" },
          { name: "Pandas", icon: "pandas" },
          { name: "NumPy", icon: "numpy" },
          { name: "Plotly", icon: "plotly" },
          { name: "Seaborn", icon: "python" },
          { name: "Streamlit", icon: "streamlit" },
          { name: "Scikit-learn", icon: "scikitlearn" },
          { name: "SciPy", icon: "python" },
          { name: "TensorFlow", icon: "tensorflow" },
          { name: "Statsmodels", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Backend Development",
        description: (
          <>Building robust server-side applications with Python and PHP frameworks.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Django", icon: "django" },
          { name: "Flask", icon: "flask" },
          { name: "PHP", icon: "php" },
          { name: "Laravel", icon: "laravel" },
          { name: "Jinja", icon: "python" },
          { name: "AJAX", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "Frontend & Mobile",
        description: (
          <>Creating responsive web and mobile applications with modern JavaScript frameworks.</>
        ),
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "React", icon: "react" },
          { name: "React Native", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
        ],
        images: [],
      },
      {
        title: "Visualization Tools",
        description: (
          <>Creating interactive dashboards and data visualizations for business intelligence.</>
        ),
        tags: [
          { name: "Tableau", icon: "tableau" },
        ],
        images: [],
      },
      {
        title: "Database & Storage",
        description: (
          <>Managing relational databases and data persistence.</>
        ),
        tags: [
          { name: "MySQL", icon: "mysql" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Microsoft SQL Server", icon: "mysql" },
          { name: "Google BigQuery", icon: "bigquery" },
          { name: "HeidiSQL", icon: "mysql" },
        ],
        images: [],
      },
      {
        title: "DevOps & Tools",
        description: (
          <>Version control, networking fundamentals, and development workflows.</>
        ),
        tags: [
          { name: "Git", icon: "git" },
          { name: "Bash" },
          { name: "Networking" },
        ],
        images: [],
      },
      {
        title: "Programming Languages",
        description: (
          <>Proficient in multiple programming paradigms and compiled languages.</>
        ),
        tags: [
          { name: "C#", icon: "csharp" },
          { name: "C++", icon: "cplusplus" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about latest transportation news",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/exterior.jpg",
      alt: "MRT External Lighting Inauguration",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/exterior-2.jpg",
      alt: "MRT External Lighting Inauguration credit: Roberto Go",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/assemble.jpeg",
      alt: "PC Assembly credit: Josh Bu",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/bambang.png",
      alt: "Bambang SP",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/djose.jpg",
      alt: "Bambang SP 2",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/exteriorlighting.jpg",
      alt: "MRT External Lighting Inauguration",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/linux1.jpg",
      alt: "Linux on an SSD",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/linux2.jpg",
      alt: "Linux on an SSD",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/lrta.jpg",
      alt: "MRT External Lighting Inauguration w/ LRTA Spokesperson",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/road.png",
      alt: "Baguio vs Zurich",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/streamlit.png",
      alt: "MRT Streamlit Dashboard",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
