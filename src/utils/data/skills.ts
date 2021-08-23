const skills = [
  {
    name: "C++",
    tag: "languages",
    description:
      "Mother tounge, the first programming language I learned and still love.",
    aspects: [
      {
        name: "Standard Template Library",
        description: "Standard Template Library",
      },
      {
        name: "C++17",
        description: "ISO standard of C++17 and previous",
      },
      {
        name: "Object Oriented Programming",
        description: "Object Oriented Programming",
      },
    ],
    certifications: [
      {
        issuer: "LinkedIn",
        certification: "Top 5%",
        link: "https://www.linkedin.com/in/rathod-sahaab/skills/report/C%2B%2B",
      },
      {
        issuer: "HackerRank",
        certification: "C++(Basic)",
        link: "https://www.hackerrank.com/certificates/ee0741479896",
      },
    ],
  },
  {
    name: "Object Oriented Design",
    tag: "concepts",
    description:
      "The science of translating real-world complex problems, to solutions ritten in code which is easy making the software easy to make and reason about.",
    aspects: [
      {
        name: "Abstraction, Encapsulation, Inheritance, Polymorphism",
        description: "Core object oriented programming principles",
      },
      {
        name: "UML class, sequence and state diagrams",
        description: "Technical Design",
      },
    ],
    certifications: [
      {
        issuer: "Coursera",
        certification: "Object Oriented Design",
        link: "https://coursera.org/share/0e0932f0a9bbc733e8df666e9629acf1",
      },
      {
        issuer: "LinkedIn",
        certification: "Top 15%",
        link: "https://www.linkedin.com/in/rathod-sahaab/skills/report/C%2B%2B",
      },
    ],
  },
  {
    name: "Databases",
    tag: "concepts",
    description:
      "Most crucial data structue for majority of applications, almost always the bottle-neck.",
    aspects: [
      {
        name: "ER model & Relational models",
        description: "Database models",
      },
      {
        name: "Normalization",
        description: "DB Design",
      },
      {
        name: "SQL: Structured Query Language",
        description: "The language of RDBMSes",
      },
      {
        name: "Indexes, partitions, sharding",
        description: "Performance enhancement",
      },
      {
        name: "PostgreSQL, MongoDB, Redis",
        description: "Type of databases",
      },
    ],
  },
  {
    name: "Computer Networks",
    tag: "concepts",
    description: "Backbone of the world, how people lived before these?",
    aspects: [
      {
        name: "TCP, UDP, HTTP 1.1/2, websockets, NBD",
        description: "Protocols",
      },
      {
        name: "TLS/SSL and SSL ceritificates",
        description: "Encryption",
      },
      {
        name: "OSI and TCP/IP",
        description: "Layered Architecture",
      },
    ],
  },
  {
    name: "Operating Systems",
    tag: "concepts",
    description:
      "API for writing programs, utility to assure harmony between them.",
    aspects: [
      {
        name: "Memory management and scheduling",
        description: "Every program gets a fair share",
      },
      {
        name: "File systems and IO",
        description: "Everything is a file",
      },
      {
        name: "Deadlocks",
        description: "Causes and resolution of conflicts",
      },
    ],
  },
  {
    name: "JavaScript",
    tag: "languages",
    description: "Fast(enough), omnipresent, and fun; some gripes though...",
    aspects: [
      {
        name: "Event loop",
        description: "The event loop JS engines use to be non-blocking",
      },
      {
        name: "Asynchronus programming",
        description: "asycn/await and promises",
      },
      {
        name: "ES6+",
        description: "The recent additions to ECMA Script 2015",
      },
    ],
    certifications: [
      {
        issuer: "CutShort",
        certification: "JavaScript: Adbvanced",
        link: "https://cutshort.io/certificate/52587",
      },
    ],
  },
  {
    name: "TypeScript",
    tag: "languages",
    description: "The reason I write so many web apps, great language",
    aspects: [
      {
        name: "Classes and Interfaces",
        description: "Object Oriented Programming",
      },
    ],
  },
  {
    name: "React JS",
    tag: "frameworks",
    description: "Septeration of concerns & JSX, fast, small, does the job.",
    aspects: [
      {
        name: "Function and Class components",
        description: "Way to create components",
      },
      {
        name: "Hooks and Lifcycle methods",
        description: "Way to create components",
      },
      {
        name: "Redux",
        description: "State management",
      },
    ],
    certifications: [
      {
        issuer: "CutShort",
        certification: "React.js",
        link: "https://cutshort.io/certificate/36667",
      },
    ],
  },
  {
    name: "Node JS",
    tag: "frameworks",
    description:
      "Non blocking(async) I/O, servers in JS and TS, awesome community.",
    aspects: [
      {
        name: "Express",
        description: "",
      },
      {
        name: "Asynchronus I/O",
        description: "Non blocking I/0 i.e. performance++",
      },
      {
        name: "Yarn and NPM",
        description: "Package managers",
      },
    ],
    certifications: [
      {
        issuer: "CutShort",
        certification: "Node.js",
        link: "https://cutshort.io/certificate/51879",
      },
    ],
  },
  {
    name: "Git",
    tag: "tools",
    description: "Defacto source code manager",
    aspects: [
      {
        name: "Basics",
        description: "init, branches, push, pull, rebase etc.",
      },
      {
        name: "Merge Conflict resolution",
        description: "Inevitable",
      },
      {
        name: "Cherrypicking and tree traversal",
        description: "When history has to be dug up",
      },
    ],
  },
  {
    name: "Linux",
    tag: "tools",
    description: "The omnipresent operating system.",
    aspects: [
      {
        name: "Linux Programming",
        description: "How to use linux APIs to write apps.",
      },
      {
        name: "SSH into remote",
        description: "Virtual machine management in the cloud",
      },
      {
        name: "How to do things and CLI",
        description: "Manpages and cheat.sh",
      },
    ],
  },
  {
    name: "Docker",
    tag: "tools",
    description: "The answer to 'If it works on your machine, the bring your machine'",
    aspects: [
      {
        name: "Dockerfile and docker-compose",
        description: "How to write the language of gods.",
      },
      {
        name: "Depoyment experience",
        description: "I can use it.",
      },
      {
        name: "Deleting images and containers",
        description: "Clean your room.",
      },
    ],
  },
]

export default skills
