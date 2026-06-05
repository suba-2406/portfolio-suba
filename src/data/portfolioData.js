// portfolioData.js
// One central data file to edit all your details.

export const portfolioData = {
  hero: {
    name: "Subasree M",
    role: "CSE Student | Big Data Analytics | AI & Web Developer",
    intro: "I build modern web applications and AI-driven solutions. Passionate about problem-solving and exploring the depths of Big Data and intelligent systems.",
    linkedin: "https://www.linkedin.com/in/subasree-m-a445942a2",
    github: "https://github.com/suba-2406",
    resume: "/Subasree_Resume.pdf", // PLACEHOLDER: Put your actual resume PDF in the "public" folder and name it resume.pdf
    photo: "/profile.jpg", // PLACEHOLDER: Put your actual profile photo in the "public" folder and name it profile.jpg
  },
  about: {
    summary: "Tech enthusiast and Final Year CSE–Big Data Analytics student focused on Data Analytics, Web Development, and AI-driven solutions. Experienced in building projects, collaborating in hackathons, and adapting quickly to new technologies and industry trends.",
    education: "B.Tech in Computer Science and Engineering",
    specialization: "Big Data Analytics",
    interests: ["Artificial Intelligence", "Web Development", "Data Engineering", "Machine Learning"],
  },
  skills: {
    programming: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
    frontend: ["React.js", "Tailwind CSS", "HTML5/CSS3", "Framer Motion", "Vite"],
    backend: ["Node.js", "Express.js", "Python Flask/FastAPI"],
    databases: ["MongoDB", "MySQL", "PostgreSQL"],
    ai: ["OpenCV", "TensorFlow", "Scikit-Learn", "NLP", "LLMs"],
    tools: ["Git & GitHub", "Docker", "VS Code", "Postman", "Figma"]
  },
  projects: [
    {
      title: "Aviora / StudyMate AI",
      description: "Personalized Learning Intelligence system designed to adapt to student learning paces.",
      tech: ["React", "Python", "AI/ML"],
      github: "#", // PLACEHOLDER: Project GitHub Link
      demo: "#", // PLACEHOLDER: Live Demo Link
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800", // PLACEHOLDER: Project Image
    },
    {
      title: "ELARA",
      description: "AI-Powered Personalized Learning Platform (Shortlisted for SARAM ’26 Project Expo).",
      tech: ["React", "Node.js", "MongoDB", "AI"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Sportify",
      description: "A professional networking platform designed specifically for athletes (LinkedIn for Athletes).",
      tech: ["React", "Tailwind", "Firebase"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Law AI",
      description: "Legal Document Management and AI Assistant for analyzing legal documents.",
      tech: ["Python", "NLP", "React"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Visitor Management System",
      description: "A secure and efficient system for managing visitors in organizational premises.",
      tech: ["MERN Stack", "QR Codes"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "DocsAI",
      description: "Receipt and Invoice AI Extractor that digitizes and organizes physical documents.",
      tech: ["Computer Vision", "OCR", "React"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=800",
    }
  ],
  hackathons: [
    {
      name: "Smart India Hackathon (SIH)",
      role: "Full Stack Developer",
      description: "Collaborated with a team to solve complex problems. Gained experience in problem-solving and rapid project building.",
      year: "2024"
    },
    {
      name: "VIT Hackathon / Buildverse",
      role: "Frontend Developer",
      description: "Built scalable web applications under pressure. Focused on teamwork and delivery.",
      year: "2024"
    },
    {
      name: "SCALER NEW TECHNOLOGY [BANGLORE]",
      role: "Backend Developer",
      description: "Participated in an intense coding competition, building innovative solutions.",
      year: "2024"
    },
    {
      name: "SIMATS [CHENNAI]",
      role: "AI Developer",
      description: "Worked on an AI-powered project to solve real-world problems.",
      year: "2025"
    }
  ],
  internships: [
    {
      role: "MERN Stack Developer Intern",
      company: "Alfido Tech",
      duration: "May 2026 - Present",
      description: "Building modern full-stack web applications using MongoDB, Express.js, React, and Node.js. Designing clean user interfaces and integrating efficient APIs.",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
      role: "Data Analytics Intern",
      company: "ApexPlanet Software Pvt Ltd",
      duration: "June 2026 - July 2026",
      description: "Analyzing business datasets, discovering trends, and creating comprehensive dashboards. Developing analytical solutions to optimize operations.",
      skills: ["Data Analytics", "Python", "SQL", "Data Visualization"]
    },
    {
      role: "Data Science Intern",
      company: "Thiranex",
      duration: "May 2026 - June 2026",
      description: "Building and testing predictive models using statistical tools and machine learning libraries. Preprocessing dataset features for training.",
      skills: ["Data Science", "Machine Learning", "Python", "Pandas", "Scikit-Learn"]
    },
    {
      role: "AI Engineer Intern",
      company: "Upstride",
      duration: "Jan 2026 - March 2026",
      description: "Worked closely with the founder/team to develop AI models. Gained immense learning experience in production-level AI development.",
      skills: ["Machine Learning", "Python", "Data Processing", "Team Collaboration"]
    }
  ],
  certifications: [
    {
      title: "Machine Learning Specialization", // PLACEHOLDER
      issuer: "Coursera",
      date: "2023",
      link: "#", // PLACEHOLDER: Credential link
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", // PLACEHOLDER
    },
    {
      title: "Cloud Computing Fundamentals", // PLACEHOLDER
      issuer: "AWS",
      date: "2023",
      link: "#", // PLACEHOLDER
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", // PLACEHOLDER
    }
  ],
  volunteering: [
    {
      role: "Student Coordinator",
      event: "DASHCRAFT, TEXUS 2026",
      impact: "Organized and managed events, ensuring smooth execution and maximum participation."
    },
    {
      role: "Digital Marketing Head",
      event: "DATATRIX",
      impact: "Led the digital marketing campaign, increasing event outreach and engagement significantly."
    },
    {
      role: "Volunteer",
      event: "TEXUS",
      impact: "Assisted in various operational tasks, contributing to the overall success of the event."
    },
    {
      role: "Volunteer",
      event: "DATATRIX",
      impact: "Planned and coordinated data-centric hackathons and workshops."
    }
  ],
  achievements: [
    "Shortlisted for SARAM ’26 Project Expo (Project: ELARA).",
    "Ranked Top 137 out of 630 teams in National Level Hackathon.",
    "Multiple Hackathon participations with strong project deliveries.",
    "Successful completion of AI Engineering Internship at Upstride."
  ],
  contact: {
    email: "subbaaa02@gmail.com",
    phone: "+91 9344571578",
    location: "Chennai, India",
  }
};
