import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Coffee, Users, Award, Clock, Heart } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Code,
      label: "Projects Completed",
      value: "30+",
      color: "text-blue-500",
    },
    {
      icon: Coffee,
      label: "Tea Cups",
      value: "500+",
      color: "text-amber-500",
    },
    {
      icon: Users,
      label: "Contributions",
      value: "150+",
      color: "text-green-500",
    },
    {
      icon: Clock,
      label: "Hours Coded",
      value: "2000+",
      color: "text-purple-500",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Socket.IO",
    "AWS",
    "Docker",
    "Git",
    "REST APIs",
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

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Passionate Full Stack Developer with a love for creating innovative
            digital solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  My Journey
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                I'm Rohit Katore, a passionate Full Stack Developer with a BE in
                Information Technology from SCOE. My journey in software
                development began with curiosity and has evolved into a deep
                love for creating scalable, efficient, and user-friendly
                applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                With expertise in the MERN stack and backend technologies, I
                specialize in building real-time applications, REST APIs, and
                modern web solutions. I thrive on challenges and am constantly
                learning new technologies to stay ahead in this dynamic field.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What I Do
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Full Stack Development",
                    desc: "Building complete web applications from frontend to backend",
                  },
                  {
                    title: "Real-time Applications",
                    desc: "Creating interactive apps with Socket.IO and WebSocket",
                  },
                  {
                    title: "API Development",
                    desc: "Designing and developing RESTful APIs and microservices",
                  },
                  {
                    title: "Database Design",
                    desc: "Optimizing database schemas and queries for performance",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats & Skills */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-xl border border-gray-200 dark:border-gray-700 group"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${
                      stat.color === "text-blue-500"
                        ? "from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800"
                        : stat.color === "text-amber-500"
                        ? "from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800"
                        : stat.color === "text-green-500"
                        ? "from-green-100 to-green-200 dark:from-green-900 dark:to-green-800"
                        : "from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800"
                    } mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Cloud */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Fun Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-3 text-yellow-300" />
                  <span>Active member of Clinix Sphere</span>
                </div>
                <div className="flex items-center">
                  <Code className="h-5 w-5 mr-3 text-green-300" />
                  <span>Love developing projects</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="h-5 w-5 mr-3 text-amber-300" />
                  <span>Powered by tea and curiosity</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
