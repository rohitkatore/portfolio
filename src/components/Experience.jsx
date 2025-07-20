import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  Users,
  Code,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      id: 1,
      type: "internship",
      title: "Software Development Intern",
      company: "Clinix Sphere",
      location: "Remote",
      period: "April 2025 - Present",
      description:
        "Developed and maintained web applications using React.js and Node.js, collaborated with cross-functional teams to deliver high-quality software solutions.",
      longDescription:
        "During my internship at Clinix Sphere, I worked on developing modern web applications for healthcare management systems. I collaborated with a team of experienced developers to build scalable solutions using React.js for the frontend and Node.js for the backend. My responsibilities included implementing new features, optimizing existing code, and ensuring responsive design across different devices.",
      responsibilities: [
        "Developed responsive web interfaces using React.js and modern CSS frameworks",
        "Built RESTful APIs using Node.js and Express.js for data management",
        "Collaborated with UI/UX designers to implement pixel-perfect designs",
        "Participated in code reviews and followed best practices for clean code",
        "Worked with databases to store and retrieve application data efficiently",
        "Implemented user authentication and authorization systems",
        "Optimized application performance and reduced load times by 30%",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Git",
      ],
      achievements: [
        "Successfully delivered 3 major features ahead of schedule",
        "Improved code quality by implementing automated testing",
        "Received positive feedback from senior developers and project managers",
      ],
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      type: "education",
      title: "Bachelor of Engineering - Information Technology",
      company: "Sinhgad College of Engineering (SCOE)",
      location: "Pune, Maharashtra",
      period: "2022 - 2026",
      description:
        "Pursuing BE in Information Technology with aggregate CGPA 8.2 and focus on software development, data structures, algorithms, and modern web technologies.",
      longDescription:
        "Currently pursuing Bachelor of Engineering in Information Technology from Sinhgad College of Engineering, one of the premier engineering institutes in Pune. My academic journey has provided me with a strong foundation in computer science fundamentals, software engineering principles, and practical programming skills. I have consistently maintained excellent academic performance while actively participating in various technical and extracurricular activities.",
      responsibilities: [
        "Maintained excellent academic performance with consistent high grades",
        "Completed coursework in Data Structures, Algorithms, and Database Management",
        "Developed multiple projects using various programming languages and frameworks",
        "Participated in technical workshops and seminars to enhance learning",
        "Collaborated with peers on group projects and assignments",
        "Engaged in practical lab sessions for hands-on learning experience",
      ],
      technologies: [
        "C++",
        "Java",
        "Python",
        "JavaScript",
        "SQL",
        "Data Structures",
        "Algorithms",
        "Software Engineering",
      ],
      achievements: [
        "Maintained excellent academic record throughout the program",
        "Completed 10+ technical projects during coursework",
        "Actively participated in coding competitions and hackathons",
      ],
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      type: "leadership",
      title: "Team Leader & Active Member",
      company: "E-Cell SCOE",
      location: "Pune, Maharashtra",
      period: "2024 - Present",
      description:
        "Led a startup project development team while actively organizing entrepreneurship events, workshops and hackathons within the college ecosystem.",
      longDescription:
        "As a team leader at the Entrepreneurship Cell at SCOE, I spearheaded the development of a startup project from concept to implementation. I managed a cross-functional team, coordinated development cycles, and ensured project milestones were met. Additionally, I played a key role in organizing various entrepreneurial events, workshops, and hackathons that fostered innovation and startup culture among students.",
      responsibilities: [
        "Led a team of developers to build and launch a startup project",
        "Managed project timelines, resources, and technical requirements",
        "Organized entrepreneurship workshops, hackathons, and pitch competitions",
        "Coordinated with industry experts and successful entrepreneurs for guest lectures",
        "Facilitated team communication and resolved technical challenges",
        "Managed event logistics and promotional activities",
        "Mentored junior team members in technical and entrepreneurial skills",
      ],
      technologies: [
        "Project Management",
        "Team Leadership",
        "Event Management",
        "Product Development",
        "Agile Methodologies",
        "Public Speaking",
        "Strategic Planning",
      ],
      achievements: [
        "Successfully led startup project from ideation to MVP stage",
        "Organized 5+ major entrepreneurship events with 200+ participants",
        "Improved team productivity by implementing agile development practices",
        "Received recognition from college administration for leadership excellence",
      ],
      icon: Users,
      color: "from-green-500 to-teal-500",
    },
    {
      id: 4,
      type: "project",
      title: "Full Stack Developer",
      company: "Personal Projects",
      location: "Self-Directed",
      period: "2022 - Present",
      description:
        "Developed 10+ full-stack applications using MERN stack, focusing on real-time applications, e-commerce platforms, and productivity tools.",
      longDescription:
        "Over the past two years, I have dedicated significant time to building various full-stack applications that solve real-world problems. My project portfolio includes applications ranging from real-time chat applications to complex e-commerce platforms and productivity tools. Each project has been an opportunity to learn new technologies, implement best practices, and push the boundaries of what I can create.",
      responsibilities: [
        "Designed and developed full-stack applications from concept to deployment",
        "Implemented responsive user interfaces using React.js and modern CSS frameworks",
        "Built scalable backend APIs using Node.js, Express.js, and various databases",
        "Integrated third-party services and APIs for enhanced functionality",
        "Deployed applications to cloud platforms like Vercel, Netlify, and AWS",
        "Implemented user authentication, authorization, and security best practices",
        "Optimized applications for performance and scalability",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Socket.IO",
        "AWS",
        "Git",
        "Docker",
      ],
      achievements: [
        "Successfully completed 10+ full-stack projects",
        "Gained expertise in modern web development technologies",
        "Built applications serving real users with positive feedback",
      ],
      icon: Code,
      color: "from-orange-500 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "internship":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "education":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "leadership":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "project":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case "internship":
        return "Internship";
      case "education":
        return "Education";
      case "leadership":
        return "Leadership";
      case "project":
        return "Projects";
      default:
        return "Experience";
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
          >
            Experience & Education
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            My professional journey, educational background, and key milestones
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} transform md:-translate-x-1/2 flex items-center justify-center shadow-lg z-10`}
                >
                  <exp.icon className="h-4 w-4 text-white" />
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-8 ml-12 md:ml-0"
                      : "md:pl-8 ml-12 md:ml-0"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 cursor-pointer"
                    onClick={() => setSelectedExperience(exp)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                              exp.type
                            )}`}
                          >
                            {getTypeLabel(exp.type)}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="mr-4">{exp.location}</span>
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md">
                          +{exp.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                      <span>View Details</span>
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Experience Details Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${selectedExperience.color} flex items-center justify-center mr-4`}
                  >
                    <selectedExperience.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedExperience.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {selectedExperience.company}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
                >
                  <ExternalLink className="h-6 w-6 text-gray-500 transform rotate-45" />
                </button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Overview
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {selectedExperience.longDescription}
                    </p>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="mr-6">
                        {selectedExperience.location}
                      </span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{selectedExperience.period}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {selectedExperience.responsibilities.map(
                        (responsibility, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300">
                              {responsibility}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedExperience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedExperience.achievements.map(
                      (achievement, index) => (
                        <li key={index} className="flex items-start">
                          <Award className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {achievement}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
