# Octazen Technologies - Modern React Website

A professional, modern website for Octazen Technologies built with React.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Design & UI
- **Modern Design**: Clean, professional layout with indigo color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Typography**: Modern sans-serif fonts (Inter) for excellent readability
- **Animations**: Smooth animations using Framer Motion and AOS (Animate On Scroll)

### Pages & Components
- **Home**: Hero section, key services, animated cards, and call-to-action
- **About Us**: Mission, vision, core values, team section, and company story
- **Services**: Detailed service offerings with features and development process
- **Industries**: Grid of industries served with solutions and expertise
- **Technologies**: Tech stack display with categories and expertise areas
- **Careers**: Job openings, benefits, company culture, and application process
- **Contact**: Contact form with validation and company information
- **Navigation**: Sticky navbar with mobile menu and smooth scrolling
- **Footer**: Comprehensive footer with links, social media, and company info

### Technical Features
- **React 19**: Latest React with functional components and hooks
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **AOS**: Scroll-triggered animations
- **React Router**: Client-side routing with navigation
- **Lucide React**: Modern icon library
- **Responsive Design**: Mobile-first approach with breakpoints

## 🛠️ Technologies Used

- **Frontend Framework**: React.js 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, AOS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd octazen-technologies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   ├── Industries.tsx  # Industries page
│   ├── Technologies.tsx # Technologies page
│   ├── Careers.tsx     # Careers page
│   └── Contact.tsx     # Contact page
├── App.tsx             # Main app component with routing
├── index.tsx           # Entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The website uses a custom indigo color palette defined in `tailwind.config.js`:
- Primary: Indigo shades (600, 700, etc.)
- Background: White and gray gradients
- Text: Gray shades for readability

### Content
All content is editable directly in the component files:
- Text content in each page component
- Images can be replaced with your own
- Contact information in Footer and Contact components
- Company details throughout the site

### Styling
- Custom CSS classes in `src/index.css`
- Tailwind utility classes throughout components
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

### Framer Motion
- Page transitions and entrance animations
- Hover effects on cards and buttons
- Smooth scrolling and navigation

### AOS (Animate On Scroll)
- Scroll-triggered animations
- Fade-up, slide-in effects
- Staggered animations for lists and grids

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your repository for automatic deployment
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload build files to S3 bucket

## 📄 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🔧 Configuration

### Tailwind CSS
Configuration file: `tailwind.config.js`
- Custom color palette
- Custom animations
- Content paths for purging

### PostCSS
Configuration file: `postcss.config.js`
- Tailwind CSS processing
- Autoprefixer

## 📞 Contact Information

The website includes placeholder contact information that should be updated:
- Email: `contact@octazen.com`
- Phone: `+1 (555) 123-4567`
- Address: `San Francisco, CA 94105`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Unsplash** for placeholder images
- **Lucide** for beautiful icons
- **Tailwind CSS** for the utility-first framework
- **Framer Motion** for smooth animations

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
