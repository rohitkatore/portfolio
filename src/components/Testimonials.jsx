import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Technical Lead at Clinix Sphere",
      company: "Clinix Sphere",
      image: "/api/placeholder/60/60",
      content:
        "Rohit demonstrated exceptional technical skills during his internship. His ability to quickly understand complex requirements and deliver high-quality code was impressive. He consistently exceeded expectations and showed great potential as a full-stack developer.",
      rating: 5,
      project: "Healthcare Management System",
    },
    {
      id: 2,
      name: "Prof. Rajesh Sharma",
      role: "Faculty Mentor",
      company: "SCOE, Pune",
      image: "/api/placeholder/60/60",
      content:
        "Rohit has been one of our most dedicated students. His passion for learning new technologies and his ability to apply theoretical knowledge to practical projects sets him apart. His work on various college projects has been exemplary.",
      rating: 5,
      project: "Final Year Project",
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "E-Cell Coordinator",
      company: "SCOE E-Cell",
      image: "/api/placeholder/60/60",
      content:
        "Working with Rohit in the E-Cell has been fantastic. His leadership skills and ability to organize events while maintaining high technical standards is commendable. He successfully managed multiple entrepreneurship events and mentored junior students.",
      rating: 5,
      project: "Entrepreneurship Events",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

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
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            What People Say
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Feedback from mentors, colleagues, and collaborators I've worked
            with
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative"
        >
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Quote className="h-8 w-8 text-white" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentIndex].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                {/* Project */}
                <div className="mt-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    Project: {testimonials[currentIndex].project}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>

              {/* Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-125"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
