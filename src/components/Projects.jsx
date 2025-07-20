import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, X, Play } from "lucide-react";
import taskifyImg from "../assets/project_image/taskify_img.png";
import tomatoImg from "../assets/project_image/tomato_img.png";
import rydoImg from "../assets/project_image/rydo_img.png";
import entrepreneurEdgeImg from "../assets/project_image/entrepreneurEdge_img.png";
import blogvioImg from "../assets/project_image/blogvio_img.png"
import prepwiseImg from "../assets/project_image/prepwise_img.png"
import wanderlustImg from "../assets/project_image/wanderlust_img.png"
import digipeImg from "../assets/project_image/digipe_img.png"

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Rydo",
      category: "Full Stack",
      description:
        "A comprehensive ride-sharing application with real-time GPS tracking, fare calculation, and role-based routing.",
      longDescription:
        "Built a complete Rydo with React.js frontend and Node.js backend. Features include real-time GPS tracking using Google Maps API, dynamic fare calculation, user authentication, role-based access control for drivers and passengers, and real-time updates using Socket.IO. The app includes payment integration, trip history, and an admin dashboard for managing users and rides.",
      image: rydoImg,
      video: "/api/placeholder/600/400",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "Google Maps API",
        "JWT",
        "Stripe API",
      ],
      github: "https://github.com/rohitkatore/Rydo",
      demo: "hhttps://rydo-ride.vercel.app",
      features: [
        "Real-time GPS tracking and navigation",
        "Dynamic fare calculation based on distance and time",
        "Role-based authentication (Driver/Passenger)",
        "Real-time ride matching and updates",
        "Payment integration with Stripe",
        "Trip history and ratings system",
        "Admin dashboard for management",
      ],
    },
    {
  id: 2,
  title: "PrepWise",
  category: "Full Stack",
  description:
    "An AI-powered interview preparation platform with voice-based mock interviews, instant feedback, and progress tracking.",
  longDescription:
    "PrepWise is a modern web application built with Next.js, TypeScript, and Firebase. It enables users to practice technical and behavioral interviews through realistic AI-driven voice simulations. The platform generates custom interviews based on role and tech stack, provides automated feedback with scoring and actionable insights, and features a dashboard for tracking interview history and performance. The UI is responsive and visually appealing, leveraging TailwindCSS and Vapi.ai for seamless user experience.",
  image: prepwiseImg,
  video: "/api/placeholder/600/400",
  technologies: [
    "Next.js",
    "TypeScript",
    "Firebase",
    "TailwindCSS",
    "Vapi.ai",
    "Google Gemini AI"
  ],
  github: "https://github.com/rohitkatore/interview_prep",
  demo: "https://prepwise.vercel.app", 
  features: [
    "AI voice-based mock interviews",
    "Custom interview generation by role and tech stack",
    "Automated feedback with scoring and insights",
    "Dashboard for interview history and progress",
    "Technical and behavioral interview options",
    "Modern, responsive UI",
    "User authentication and secure data storage"
  ]
},
    {
      id: 2,
      title: "FoodZone",
      category: "Full Stack",
      description:
        "A Zomato-inspired food delivery platform with restaurant management, order tracking, and payment integration.",
      longDescription:
        "Developed a comprehensive food delivery application similar to Zomato. The platform includes restaurant listings, menu management, cart functionality, order tracking, and integrated payment system. Built with React.js for the frontend and Node.js for the backend, featuring real-time order updates and a complete admin panel for restaurant management.",
      image: tomatoImg,
      video: "/api/placeholder/600/400",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "Stripe API",
        "JWT",
        "Multer",
      ],
      github: "https://github.com/rohitkatore/tomato",
      demo: "https://tomato-1-8ai0.onrender.com",
      features: [
        "Restaurant and menu management",
        "User authentication and profiles",
        "Shopping cart and order management",
        "Real-time order tracking",
        "Payment integration with Stripe",
        "Review and rating system",
        "Admin dashboard for restaurants",
      ],
    },
    {
      id: 3,
      title: "Taskify",
      category: "Full Stack",
      description:
        "A comprehensive project and task management application with team collaboration features.",
      longDescription:
        "Built a robust project management tool that helps teams organize tasks, track progress, and collaborate effectively. Features include project creation, task assignment, progress tracking, team chat, file sharing, and detailed analytics. The application supports multiple project templates and integrates with popular tools for seamless workflow management.",
      image: taskifyImg,
      video: "/api/placeholder/600/400",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Socket.IO",
        "JWT",
        "Cloudinary",
        "Chart.js",
      ],
      github: "https://github.com/rohitkatore/Taskify",
      demo: "https://taskify-official.vercel.app",
      features: [
        "Project and task management",
        "Team collaboration and chat",
        "Progress tracking and analytics",
        "File sharing and attachments",
        "Real-time notifications",
        "Time tracking and reporting",
        "Multiple project templates",
      ],
    },
    {
  id: 1,
  title: "DigiPe Wallet",
  category: "Full Stack",
  description:
    "A modern digital wallet platform for seamless money transfers, balance management, and transaction tracking.",
  longDescription:
    "DigiPe is a scalable digital wallet solution built for fast, secure, and user-friendly money management. Users can transfer funds, add money via supported banks, view transaction history, and manage their balance with real-time updates. The platform supports authentication, role-based access, and integrates with banking APIs for on-ramp transactions. Built with a monorepo architecture for maintainability and rapid development.",
  image: digipeImg,
  video: "/api/placeholder/600/400",
  technologies: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
    "NextAuth.js",
    "Recoil",
    "Express.js",
    "Node.js",
    "ESBuild"
  ],
  github: "https://github.com/rohitkatore/digipe-wallet",
  demo: "https://digipe-demo.com",
  features: [
    "User authentication and session management",
    "P2P money transfer with balance checks",
    "Add money via bank integration",
    "Transaction history and analytics",
    "Role-based access for merchants and users",
    "Responsive UI with modern design",
    "Monorepo structure for scalable development",
    "API integration for webhook and banking events"
  ]
},
    {
      id: 4,
      title: "EntrepreneurEdge",
      category: "Full Stack",
      description:
        "An innovative startup and business learning platform with interactive courses and mentorship.",
      longDescription:
        "Created a comprehensive learning platform designed for aspiring entrepreneurs. The platform offers interactive courses, mentorship programs, business plan templates, and networking opportunities. Features include video streaming, progress tracking, discussion forums, and a marketplace for business resources. Built with modern technologies to ensure scalability and performance.",
      image: entrepreneurEdgeImg,
      video: "/api/placeholder/600/400",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "AWS S3",
        "JWT",
        "Stripe API",
      ],
      github: "https://github.com/rohitkatore/entrepreneur-edge",
      demo: "https://entrepreneuredge-demo.com",
      features: [
        "Interactive course management",
        "Video streaming and progress tracking",
        "Mentorship matching system",
        "Business plan templates",
        "Community forums and networking",
        "Resource marketplace",
        "Analytics and reporting dashboard",
      ],
    },
    {
      id: 5,
      title: "Wanderlust",
      category: "Full Stack",
      description:
        "A travel and accommodation platform for discovering, reviewing, and booking unique stays worldwide.",
      longDescription:
        "Wanderlust is a comprehensive web application that allows users to explore listings, post reviews, and manage bookings for travel accommodations. It features user authentication, secure sessions, cloud image uploads, interactive maps, and a robust review system. Built with Node.js, Express, MongoDB, and EJS, it integrates third-party services like Cloudinary for media storage and Mapbox for geolocation. The platform is designed for scalability, security, and a seamless user experience.",
      image: wanderlustImg,
      video: "/api/placeholder/600/400",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS",
        "Cloudinary",
        "Mapbox",
        "Passport.js",
        "Bootstrap",
      ],
      github: "https://github.com/rohitkatore/wanderlust", // Replace with your actual repo link
      demo: "https://wanderlust-demo.com", // Replace with your actual demo link
      features: [
        "User authentication and session management",
        "Travel listing creation and management",
        "Image uploads via Cloudinary",
        "Interactive maps with Mapbox",
        "Review and rating system",
        "Secure booking workflow",
        "Flash messages and error handling",
      ],
    },
    {
      id: 5,
      title: "Blogvio",
      category: "Frontend",
      description:
        "A lightweight, responsive blogging platform built with React that uses local storage to persist data, featuring create, read, edit, and categorize functionalities.",
      longDescription:
        "A lightweight, responsive blogging platform built with React that allows users to create, read, edit, and categorize blog posts. This application uses local storage to persist data between sessions, making it perfect for demonstration purposes or local development. It includes features like a dark/light mode, automatic reading time calculation, and a clean, modern aesthetic.",
      image: blogvioImg,
      video: "/api/placeholder/600/400",
      technologies: [
        "React.js",
        "React Router",
        "Tailwind CSS",
        "Lucide React",
        "Local Storage API",
        "React Hook Form",
      ],
      github: "https://github.com/rohitkatore/Blogvio",
      demo: "https://blogvio.vercel.app",
      features: [
        "Responsive Design for desktop, tablet, and mobile",
        "Create, Edit, and Delete blog posts",
        "Categories System for post organization and filtering",
        "Search functionality by title, content, or category",
        "Toggle between Dark and Light themes",
        "Data persistence using Local Storage",
        "Featured Posts section",
        "Automatic calculation of estimated reading time",
        "Quick URL copying for sharing articles",
      ],
    },
    {
      id: 6,
      title: "Currency Converter",
      category: "Frontend",
      description:
        "A real-time currency converter with historical data and exchange rate trends.",
      longDescription:
        "Developed a sleek currency converter application that provides real-time exchange rates, historical data visualization, and trend analysis. The app features a clean interface with support for multiple currencies, offline mode, and customizable widgets. Built with React.js and integrated with reliable financial APIs for accurate data.",
      image: "/api/placeholder/600/400",
      video: "/api/placeholder/600/400",
      technologies: [
        "React.js",
        "Chart.js",
        "Tailwind CSS",
        "REST APIs",
        "LocalStorage",
        "PWA",
      ],
      github: "https://github.com/rohitkatore/currency-converter",
      demo: "https://currency-converter-demo.com",
      features: [
        "Real-time exchange rates",
        "Historical data visualization",
        "Multi-currency support",
        "Offline mode functionality",
        "Customizable widgets",
        "Responsive design",
        "Progressive Web App features",
      ],
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

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
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          >
            A showcase of my latest work and technical expertise
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center px-4 py-2 bg-white/90 text-gray-900 rounded-full font-medium hover:bg-white transition-colors duration-300"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      View Details
                    </motion.button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span className="text-sm">Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Project Overview
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {selectedProject.longDescription}
                    </p>

                    <div className="flex space-x-4 mb-6">
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </motion.a>
                      <motion.a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
