# 🎂 Happy Birthday Darshanss! 🎉

A beautiful, responsive birthday website built with React and Vite, featuring a CSK (Chennai Super Kings) theme with yellow colors and cricket elements.

## ✨ Features

- **Hero Section**: Animated birthday message with floating elements
- **Image Grid**: Responsive grid layout for photos of Darshanss
- **Cricket Zone**: Special section featuring MS Dhoni and cricket icons
- **CSK Theme**: Yellow color scheme representing Chennai Super Kings
- **Mobile Responsive**: Optimized for all device sizes
- **Smooth Animations**: Beautiful hover effects and transitions

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Adding Real Photos
Replace the placeholder images in `src/components/ImageGrid.jsx` with actual photos of Darshanss:

```jsx
const images = [
  {
    id: 1,
    src: '/path/to/your/photo1.jpg', // Replace with actual image path
    alt: 'Darshanss - Birthday Boy',
    caption: 'The Birthday Star! ⭐'
  },
  // Add more images...
]
```

### Changing Colors
The CSK yellow theme can be customized in the CSS files by modifying the color variables:
- Primary Yellow: `#f39c12`
- Secondary Yellow: `#e67e22`
- Light Yellow: `#f7d794`

### Adding More Content
- **Hero Section**: Modify `src/components/HeroSection.jsx`
- **Image Grid**: Update `src/components/ImageGrid.jsx`
- **Cricket Section**: Customize `src/components/CricketIcons.jsx`

## 📱 Mobile Optimization

The website is fully responsive and optimized for mobile devices:
- Touch-friendly interactions
- Optimized typography for small screens
- Responsive grid layouts
- Mobile-first design approach

## 🏏 Cricket & CSK Elements

- MS Dhoni tribute section
- Cricket equipment icons
- CSK branding and colors
- "Whistle Podu" message
- Cricket-themed animations

## 🎯 Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Advanced styling with animations
- **Responsive Design** - Mobile-first approach
- **Modern JavaScript** - ES6+ features

## 📁 Project Structure

```
src/
├── components/
│   ├── HeroSection.jsx
│   ├── HeroSection.css
│   ├── ImageGrid.jsx
│   ├── ImageGrid.css
│   ├── CricketIcons.jsx
│   └── CricketIcons.css
├── App.jsx
├── main.jsx
└── index.css
```

## 🎉 Happy Birthday!

This website is a special birthday gift for Darshanss, celebrating his love for cricket and CSK. Feel free to customize it further to make it even more personal!

---

**Made with ❤️ for Darshanss's Birthday**
