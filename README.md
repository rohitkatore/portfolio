# Rohit Katore - Personal Portfolio

A premium, ultra-modern personal portfolio website built with React.js, Tailwind CSS, and Framer Motion. This portfolio showcases my skills, projects, and experience as a Full Stack Developer specializing in the MERN stack.

## 🌟 Features

- **Modern Design**: Sleek, professional design with smooth animations and transitions
- **Dark Theme**: Beautiful dark theme with smooth transitions
- **Responsive**: Fully responsive across all devices and screen sizes
- **Interactive**: Smooth hover effects and micro-interactions
- **Performance Optimized**: Fast loading with optimized assets and code splitting
- **SEO Friendly**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🚀 Tech Stack

- **Framework**: React.js 19.x
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: React Type Animation
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Loading.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Testimonials.jsx
│   ├── hooks/
│   │   ├── useActiveSection.jsx
│   │   ├── useScrollDirection.jsx
│   │   └── useTheme.jsx
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Sections

1. **Hero Section**

   - Animated background with particles
   - Typing animation for role descriptions
   - Call-to-action buttons with hover effects
   - Social media links

2. **About Me**

   - Personal introduction and background
   - Skills and expertise overview
   - Fun facts and statistics
   - Professional journey timeline

3. **Projects Showcase**

   - Featured projects with filtering
   - Interactive project cards
   - Detailed project modals
   - Technology stack badges
   - Live demo and GitHub links

4. **Skills & Tech Stack**

   - Categorized skills with proficiency levels
   - Animated progress bars
   - Technology icons and descriptions
   - Learning journey timeline

5. **Experience & Education**

   - Professional experience timeline
   - Educational background
   - Achievements and certifications
   - Detailed role descriptions

6. **Contact Form**
   - Interactive contact form
   - Social media integration
   - Availability status
   - Contact information

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20.x or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rohitkatore/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors and Themes

The portfolio uses a custom color palette defined in Tailwind CSS. You can modify the colors in the `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#8b5cf6",
        // Add your custom colors
      },
    },
  },
};
```

### Content

Update the content in each component file to reflect your personal information:

- **Personal Info**: Update name, bio, and contact details in relevant components
- **Projects**: Add your projects in the `Projects.jsx` component
- **Skills**: Modify the skills array in `Skills.jsx`
- **Experience**: Update your professional experience in `Experience.jsx`

### Animations

The portfolio uses Framer Motion for animations. You can customize animations by modifying the motion properties in each component.

## 📱 Mobile Responsiveness

The portfolio is fully responsive and includes:

- Mobile-first design approach
- Touch-friendly interactive elements
- Optimized images for different screen sizes
- Responsive typography and spacing

## 🔧 Performance Optimization

- Code splitting with dynamic imports
- Lazy loading for images and components
- Optimized bundle size with tree shaking
- Smooth scrolling with performance considerations
- Efficient re-rendering with React hooks

## 🌐 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Structured data for better search visibility
- Optimized images with alt text
- Fast loading times

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Deploy automatically on push to main branch

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

If you'd like to contribute to this project, please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: rohitkatore@gmail.com
- **LinkedIn**: [linkedin.com/in/rohitkatore](https://linkedin.com/in/rohitkatore)
- **GitHub**: [github.com/rohitkatore](https://github.com/rohitkatore)

---

**Made with ❤️ by Rohit Katore**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
#   p o r t f o l i o 
 
 
