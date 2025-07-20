import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "Next.js", level: 90, color: "from-gray-700 to-gray-900" },
        { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-800" },
        {
          name: "JavaScript",
          level: 95,
          color: "from-yellow-400 to-yellow-600",
        },
        { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-teal-600" },
        { name: "HTML5/CSS3", level: 95, color: "from-orange-500 to-red-500" },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-500 to-green-700" },
        { name: "Express.js", level: 95, color: "from-gray-600 to-gray-800" },
        {
          name: "Socket.IO",
          level: 85,
          color: "from-purple-500 to-purple-700",
        },
        { name: "REST APIs", level: 90, color: "from-blue-500 to-blue-700" },
        { name: "GraphQL", level: 75, color: "from-pink-500 to-pink-700" },
        {
          name: "Microservices",
          level: 80,
          color: "from-indigo-500 to-indigo-700",
        },
      ],
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 90, color: "from-green-600 to-green-800" },
        { name: "PostgreSQL", level: 85, color: "from-blue-600 to-blue-800" },
        { name: "Redis", level: 80, color: "from-red-500 to-red-700" },
        { name: "Prisma", level: 85, color: "from-purple-600 to-purple-800" },
        { name: "MySQL", level: 80, color: "from-orange-500 to-orange-700" },
        { name: "Firebase", level: 85, color: "from-yellow-500 to-orange-500" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 95, color: "from-gray-700 to-gray-900" },
        { name: "Docker", level: 80, color: "from-blue-600 to-blue-800" },
        { name: "AWS", level: 75, color: "from-orange-400 to-orange-600" },
        { name: "Nginx", level: 80, color: "from-green-600 to-green-800" },
        {
          name: "Turborepo",
          level: 85,
          color: "from-purple-600 to-purple-800",
        },
        { name: "Vercel", level: 90, color: "from-black to-gray-800" },
      ],
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

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
            Technical Skills
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical expertise and proficiency
            levels
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-8">
                <div className="text-3xl mr-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className={`h-2.5 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                        variants={skillBarVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        custom={skill.level}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20 -skew-x-12 w-6"
                          animate={{
                            x: [-100, 400],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Additional Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { name: "Agile/Scrum", icon: "🏃‍♂️" },
                { name: "Problem Solving", icon: "🧩" },
                { name: "Team Leadership", icon: "👥" },
                { name: "Code Review", icon: "👁️" },
                { name: "Testing", icon: "🧪" },
                { name: "Documentation", icon: "📚" },
                { name: "Performance", icon: "⚡" },
                { name: "Security", icon: "🔒" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <span className="text-sm font-medium">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skill Progress Animation */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Learning Journey
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
              <div className="space-y-8">
                {[
                  {
                    year: "2022",
                    milestone: "Started learning basic programming",
                  },
                  { year: "2023", milestone: "Started with HTML, CSS, JavaScript and React" },
                  {
                    year: "2024",
                    milestone: "Mastered MERN Stack development",
                  },
                  {
                    year: "2025",
                    milestone: "Explored TypeScript, Next.js and Advanced backend",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative flex items-center"
                  >
                    <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="ml-12">
                      <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {item.year}
                      </div>
                      <div className="text-gray-700 dark:text-gray-300">
                        {item.milestone}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
