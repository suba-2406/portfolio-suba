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
    summary: "A dedicated Computer Science Engineering student specializing in Big Data Analytics. I have a strong foundation in both frontend and backend development, and a keen interest in Artificial Intelligence and Machine Learning. I thrive in hackathons, love building impactful projects, and am constantly learning new technologies.",
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
      year: "2023"
    },
    {
      name: "VIT Hackathon / Buildverse",
      role: "Frontend Developer",
      description: "Built scalable web applications under pressure. Focused on teamwork and delivery.",
      year: "2023"
    },
    {
      name: "Hackathon 3 (Placeholder)", // PLACEHOLDER: Update name
      role: "Developer", // PLACEHOLDER: Update role
      description: "Participated in an intense coding competition, building innovative solutions.", // PLACEHOLDER: Update description
      year: "2024" // PLACEHOLDER: Update year
    },
    {
      name: "Hackathon 4 (Placeholder)", // PLACEHOLDER: Update name
      role: "Developer", // PLACEHOLDER: Update role
      description: "Worked on an AI-powered project to solve real-world problems.", // PLACEHOLDER: Update description
      year: "2024" // PLACEHOLDER: Update year
    }
  ],
  internships: [
    {
      role: "AI Engineer Intern",
      company: "Upstride",
      duration: "Jan - Mar 2024",
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
      event: "DashCraft, TEXUS 2026",
      impact: "Organized and managed events, ensuring smooth execution and maximum participation."
    },
    {
      role: "Digital Marketing Head / Event Role",
      event: "College Fest",
      impact: "Led the digital marketing campaign, increasing event outreach and engagement significantly."
    },
    {
      role: "Volunteer",
      event: "Texus",
      impact: "Assisted in various operational tasks, contributing to the overall success of the event."
    },
    {
      role: "Organizer",
      event: "Datatrix",
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
