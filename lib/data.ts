export const skills = {
    backend: [
      { name: "Node.js", logo: "/placeholder.svg?height=40&width=40&text=Node", color: "from-green-400 to-green-600" },
      { name: "Python", logo: "/placeholder.svg?height=40&width=40&text=Python", color: "from-blue-400 to-blue-600" },
      { name: "Java", logo: "/placeholder.svg?height=40&width=40&text=Java", color: "from-orange-400 to-red-600" },
      {
        name: "Express.js",
        logo: "/placeholder.svg?height=40&width=40&text=Express",
        color: "from-gray-400 to-gray-600",
      },
      { name: "FastAPI", logo: "/placeholder.svg?height=40&width=40&text=FastAPI", color: "from-teal-400 to-teal-600" },
      {
        name: "Spring Boot",
        logo: "/placeholder.svg?height=40&width=40&text=Spring",
        color: "from-green-400 to-green-600",
      },
      {
        name: "PostgreSQL",
        logo: "/placeholder.svg?height=40&width=40&text=PostgreSQL",
        color: "from-blue-400 to-indigo-600",
      },
      {
        name: "MongoDB",
        logo: "/placeholder.svg?height=40&width=40&text=MongoDB",
        color: "from-green-400 to-green-600",
      },
      { name: "Redis", logo: "/placeholder.svg?height=40&width=40&text=Redis", color: "from-red-400 to-red-600" },
      { name: "Docker", logo: "/placeholder.svg?height=40&width=40&text=Docker", color: "from-blue-400 to-blue-600" },
    ],
    ai: [
      {
        name: "TensorFlow",
        logo: "/placeholder.svg?height=40&width=40&text=TF",
        color: "from-orange-400 to-orange-600",
      },
      {
        name: "PyTorch",
        logo: "/placeholder.svg?height=40&width=40&text=PyTorch",
        color: "from-red-400 to-orange-600",
      },
      { name: "OpenAI", logo: "/placeholder.svg?height=40&width=40&text=OpenAI", color: "from-green-400 to-teal-600" },
      {
        name: "Langchain",
        logo: "/placeholder.svg?height=40&width=40&text=LC",
        color: "from-purple-400 to-purple-600",
      },
      {
        name: "Hugging Face",
        logo: "/placeholder.svg?height=40&width=40&text=HF",
        color: "from-yellow-400 to-orange-600",
      },
      {
        name: "Scikit-learn",
        logo: "/placeholder.svg?height=40&width=40&text=sklearn",
        color: "from-blue-400 to-blue-600",
      },
      {
        name: "Pandas",
        logo: "/placeholder.svg?height=40&width=40&text=Pandas",
        color: "from-indigo-400 to-purple-600",
      },
      { name: "NumPy", logo: "/placeholder.svg?height=40&width=40&text=NumPy", color: "from-blue-400 to-indigo-600" },
    ],
    tools: [
      { name: "Git", logo: "/placeholder.svg?height=40&width=40&text=Git", color: "from-orange-400 to-red-600" },
      { name: "AWS", logo: "/placeholder.svg?height=40&width=40&text=AWS", color: "from-orange-400 to-yellow-600" },
      { name: "Linux", logo: "/placeholder.svg?height=40&width=40&text=Linux", color: "from-yellow-400 to-orange-600" },
      { name: "Kubernetes", logo: "/placeholder.svg?height=40&width=40&text=K8s", color: "from-blue-400 to-blue-600" },
      {
        name: "GraphQL",
        logo: "/placeholder.svg?height=40&width=40&text=GraphQL",
        color: "from-pink-400 to-purple-600",
      },
      {
        name: "Postman",
        logo: "/placeholder.svg?height=40&width=40&text=Postman",
        color: "from-orange-400 to-red-600",
      },
    ],
  }

  export const experiences = [
    {
      title: "Backend Developer Intern",
      company: "Tech Startup Inc.",
      website: "https://techstartup.com",
      duration: "Jun 2024 - Present",
      description:
        "Developed RESTful APIs using Node.js and Express.js, implemented database optimization strategies, and worked on microservices architecture.",
    },
    {
      title: "AI Research Assistant",
      company: "University AI Lab",
      website: "https://university.edu/ai-lab",
      duration: "Jan 2024 - May 2024",
      description:
        "Conducted research on natural language processing, implemented machine learning models using PyTorch, and contributed to academic publications.",
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      website: null,
      duration: "Sep 2023 - Dec 2023",
      description:
        "Built web applications for small businesses, integrated AI chatbots, and deployed applications on cloud platforms.",
    },
  ]

  export const projects = [
    {
      title: "AI-Powered Chat Application",
      description:
        "A real-time chat application with AI-powered responses using OpenAI API, built with Node.js, Socket.io, and React.",
      technologies: ["Node.js", "OpenAI API", "Socket.io", "React", "MongoDB"],
      github: "https://github.com/username/ai-chat-app",
      demo: "https://ai-chat-demo.vercel.app",
    },
    {
      title: "Microservices E-commerce Backend",
      description:
        "Scalable e-commerce backend with microservices architecture, API gateway, and containerized deployment.",
      technologies: ["Python", "FastAPI", "Docker", "PostgreSQL", "Redis", "Kubernetes"],
      github: "https://github.com/username/ecommerce-microservices",
      demo: null,
    },
    {
      title: "Document Analysis AI",
      description:
        "Machine learning model for document classification and information extraction using NLP techniques.",
      technologies: ["Python", "TensorFlow", "spaCy", "Flask", "PostgreSQL"],
      github: "https://github.com/username/document-ai",
      demo: "https://document-ai-demo.herokuapp.com",
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Backend system for processing and visualizing real-time data streams with WebSocket connections.",
      technologies: ["Node.js", "Express.js", "WebSocket", "InfluxDB", "Grafana"],
      github: "https://github.com/username/analytics-dashboard",
      demo: null,
    },
  ]

  export const modalData = {
    certificates: [
      {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2024",
        description: "Professional level certification for designing distributed systems on AWS",
        image: "/placeholder.svg?height=200&width=300&text=AWS+Cert",
      },
      {
        title: "Google Cloud Professional Developer",
        issuer: "Google Cloud",
        date: "2023",
        description: "Certification for building scalable applications on Google Cloud Platform",
        image: "/placeholder.svg?height=200&width=300&text=GCP+Cert",
      },
      {
        title: "MongoDB Certified Developer",
        issuer: "MongoDB Inc.",
        date: "2023",
        description: "Database development and administration certification",
        image: "/placeholder.svg?height=200&width=300&text=MongoDB+Cert",
      },
      {
        title: "Microsoft Azure Fundamentals",
        issuer: "Microsoft",
        date: "2023",
        description: "Foundational knowledge of cloud services and Microsoft Azure",
        image: "/placeholder.svg?height=200&width=300&text=Azure+Cert",
      },
      {
        title: "Docker Certified Associate",
        issuer: "Docker Inc.",
        date: "2022",
        description: "Container orchestration and Docker ecosystem expertise",
        image: "/placeholder.svg?height=200&width=300&text=Docker+Cert",
      },
      {
        title: "Kubernetes Administrator",
        issuer: "Cloud Native Computing Foundation",
        date: "2022",
        description: "Certified Kubernetes Administrator (CKA) for cluster management",
        image: "/placeholder.svg?height=200&width=300&text=K8s+Cert",
      },
    ],
    hackathons: [
      {
        title: "TechCrunch Disrupt Hackathon",
        position: "1st Place",
        date: "2024",
        description: "Built an AI-powered sustainability tracker that won first place among 200+ teams",
        image: "/placeholder.svg?height=200&width=300&text=TechCrunch+Win",
      },
      {
        title: "Google Developer Student Club Hackathon",
        position: "2nd Place",
        date: "2023",
        description: "Developed a machine learning model for predicting crop yields",
        image: "/placeholder.svg?height=200&width=300&text=GDSC+Hackathon",
      },
      {
        title: "Meta AI Hackathon",
        position: "Top 10",
        date: "2023",
        description: "Created an innovative chatbot using Meta's latest AI technologies",
        image: "/placeholder.svg?height=200&width=300&text=Meta+AI",
      },
      {
        title: "NASA Space Apps Challenge",
        position: "Regional Winner",
        date: "2023",
        description: "Developed a space debris tracking system using satellite data",
        image: "/placeholder.svg?height=200&width=300&text=NASA+Space",
      },
      {
        title: "Microsoft Imagine Cup",
        position: "3rd Place",
        date: "2022",
        description: "Created an accessibility app for visually impaired users",
        image: "/placeholder.svg?height=200&width=300&text=MS+Imagine",
      },
      {
        title: "GitHub Global Campus Hackathon",
        position: "Top 20",
        date: "2022",
        description: "Built a collaborative coding platform with real-time features",
        image: "/placeholder.svg?height=200&width=300&text=GitHub+Hack",
      },
      {
        title: "AngelHack Global",
        position: "Finalist",
        date: "2022",
        description: "Developed a fintech solution for micro-investments",
        image: "/placeholder.svg?height=200&width=300&text=AngelHack",
      },
    ],
    clubs: [
      {
        title: "Google Developer Student Club",
        role: "Technical Lead",
        duration: "2023 - Present",
        description: "Leading workshops on cloud technologies and organizing hackathons for 200+ members",
        image: "/placeholder.svg?height=200&width=300&text=GDSC+Lead",
      },
      {
        title: "AI/ML Research Club",
        role: "Vice President",
        duration: "2022 - 2024",
        description: "Coordinating research projects and mentoring junior students in machine learning",
        image: "/placeholder.svg?height=200&width=300&text=AI+Club",
      },
      {
        title: "Competitive Programming Club",
        role: "Member",
        duration: "2021 - Present",
        description: "Regular participant in coding competitions and algorithm challenges",
        image: "/placeholder.svg?height=200&width=300&text=CP+Club",
      },
      {
        title: "Open Source Contributors Society",
        role: "Core Member",
        duration: "2022 - Present",
        description: "Contributing to major open source projects and mentoring new contributors",
        image: "/placeholder.svg?height=200&width=300&text=OSS+Club",
      },
      {
        title: "Cybersecurity Club",
        role: "Security Researcher",
        duration: "2021 - 2023",
        description: "Participated in CTF competitions and security vulnerability research",
        image: "/placeholder.svg?height=200&width=300&text=Cyber+Club",
      },
      {
        title: "Robotics and Automation Club",
        role: "Software Team Lead",
        duration: "2020 - 2022",
        description: "Led software development for autonomous robots in competitions",
        image: "/placeholder.svg?height=200&width=300&text=Robotics",
      },
    ],
    coffee: [
      {
        title: "Ethiopian Yirgacheffe",
        type: "Single Origin",
        notes: "Floral, citrusy, bright acidity",
        description: "My current favorite for morning coding sessions. The bright acidity keeps me alert!",
        image: "/placeholder.svg?height=200&width=300&text=Ethiopian+Coffee",
      },
      {
        title: "Colombian Supremo",
        type: "Medium Roast",
        notes: "Balanced, nutty, chocolate undertones",
        description: "Perfect for afternoon debugging sessions. Smooth and comforting.",
        image: "/placeholder.svg?height=200&width=300&text=Colombian+Coffee",
      },
      {
        title: "Blue Mountain Jamaica",
        type: "Premium",
        notes: "Mild, sweet, well-balanced",
        description: "Reserved for those late-night coding marathons and project deadlines.",
        image: "/placeholder.svg?height=200&width=300&text=Blue+Mountain",
      },
      {
        title: "Guatemala Antigua",
        type: "Medium-Dark Roast",
        notes: "Smoky, spicy, full-bodied",
        description: "Great for intense problem-solving sessions. The bold flavor matches the complexity.",
        image: "/placeholder.svg?height=200&width=300&text=Guatemala+Coffee",
      },
      {
        title: "Kenya AA",
        type: "Light-Medium Roast",
        notes: "Wine-like, blackcurrant, bright",
        description: "Perfect for creative coding sessions. The unique flavor sparks innovation.",
        image: "/placeholder.svg?height=200&width=300&text=Kenya+Coffee",
      },
      {
        title: "Brazilian Santos",
        type: "Dark Roast",
        notes: "Low acidity, nutty, chocolatey",
        description: "My go-to for long coding sessions. Smooth and doesn't cause jitters.",
        image: "/placeholder.svg?height=200&width=300&text=Brazil+Coffee",
      },
      {
        title: "Costa Rican Tarrazú",
        type: "Medium Roast",
        notes: "Bright, citrusy, clean finish",
        description: "Ideal for morning stand-ups and code reviews. Clean taste, clear thinking.",
        image: "/placeholder.svg?height=200&width=300&text=Costa+Rica+Coffee",
      },
      {
        title: "Hawaiian Kona",
        type: "Medium Roast",
        notes: "Smooth, rich, low acidity",
        description: "Special occasion coffee for celebrating successful deployments and releases.",
        image: "/placeholder.svg?height=200&width=300&text=Kona+Coffee",
      },
    ],
  }
