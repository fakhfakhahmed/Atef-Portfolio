# Agimi Atef - Mechanical Designer Portfolio

A modern, responsive portfolio website built with Next.js, React, TypeScript, and TailwindCSS, featuring smooth animations and a dark/light mode toggle.

## 🚀 Features

- **Modern Design**: Clean, professional layout optimized for mechanical engineering portfolios
- **Responsive**: Mobile-first design that looks great on all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Performance**: Optimized images and code splitting for fast loading
- **Contact Form**: Functional contact form with validation
- **Downloadable CV**: Direct PDF download functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Deployment**: Ready for Vercel deployment

## 📋 Sections

1. **Hero**: Introduction with name, title, and call-to-action buttons
2. **About**: Professional bio, statistics, and education timeline
3. **Skills**: Technical skills with progress bars and tool showcase
4. **Experience**: Professional timeline with detailed achievements
5. **Projects**: Portfolio showcase with filtering and detailed views
6. **Contact**: Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd atef-cv
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.ts`:
- Primary colors (blue tones)
- Accent colors (orange tones)
- Gray scale for backgrounds and text

### Content
Update the following files to customize content:
- `components/sections/Hero.tsx` - Personal introduction
- `components/sections/About.tsx` - Bio and education
- `components/sections/Skills.tsx` - Technical skills
- `components/sections/Experience.tsx` - Work history
- `components/sections/Projects.tsx` - Portfolio items
- `components/sections/Contact.tsx` - Contact information

### Images
- Replace placeholder images with actual photos
- Add the CV PDF file to `public/cv/`
- Update image paths in components

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:
- Mobile: Single column layout with stacked elements
- Tablet: Two-column layouts where appropriate
- Desktop: Full multi-column layouts with advanced animations

## 🌙 Dark Mode

Dark mode is implemented using:
- TailwindCSS dark mode classes
- Context-based theme management
- Persistent theme selection via localStorage
- Smooth transitions between themes

## 🎭 Animations

Framer Motion powers the animations:
- Page load animations
- Scroll-triggered reveals
- Hover effects
- Smooth transitions
- Loading states

## 📧 Contact Form

The contact form includes:
- Form validation with visual feedback
- Loading states during submission
- Success/error messaging
- Responsive design
- Accessibility features

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The project can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Heroku
- AWS Amplify

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: agimi.atef@email.com
- LinkedIn: [Agimi Atef](https://linkedin.com/in/agimi-atef)

---

Built with ❤️ by Agimi Atef
