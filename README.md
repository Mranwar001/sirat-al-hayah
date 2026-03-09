
# 🌙 Sirat Al-Hayah - From Cradle to Jannah

<div align="center">
  
![Sirat Al-Hayah Banner](https://via.placeholder.com/800x200/1f2937/d4af37?text=Sirat+Al-Hayah+%7C+From+Cradle+to+Jannah)

**A Comprehensive Islamic Guide Through Life's Journey**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**[View Demo](#) • [Report Bug](#) • [Request Feature](#)**

</div>



## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Built With](#-built-with)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Sections](#-sections)
- [PDF Generation](#-pdf-generation)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)
- [Acknowledgments](#-acknowledgments)

---

## 🌟 About The Project

**Sirat Al-Hayah** (The Path of Life) is a spiritual guide designed to help Muslims navigate every stage of life according to Islamic teachings. From the foundation of faith in childhood to preparing for the Hereafter, each section provides Quranic evidence, prophetic guidance, and practical steps.

> *"And say: My Lord, increase me in knowledge."* (Quran 20:114)

This project was created by **Anwar Dahir Yahaya** to provide a comprehensive, accessible resource for Muslims seeking to understand and implement Islamic teachings throughout their life journey.

### 🎯 Purpose

- Educate Muslims about Islamic perspective on different life stages
- Provide authentic Quranic verses and Hadith as evidence
- Offer practical action steps for implementation
- Create a beautiful, accessible digital resource
- Enable downloading of sections for offline reading

---

##  Features

 **Complete Life Stages** - 7 comprehensive sections from Foundation to Death  
 **Authentic Evidence** - Quranic verses and Hadith with translations  
 **Arabic Support** - Original Arabic text with proper rendering  
 **Action Steps** - Practical implementation guides  
 **Daily Duas** - Supplications for each life stage  
 **PDF Download** - Generate and save sections as PDF  
 **Responsive Design** - Works perfectly on mobile, tablet, and desktop  
 **Mobile Navigation** - Hamburger menu for smaller screens  
 **Beautiful UI** - Clean, modern design with Tailwind CSS  
 **Fast Performance** - Built with Vite for lightning-fast loads  
 **SEO Friendly** - Proper meta tags and semantic HTML  
 **Error Handling** - Graceful error boundaries and loading states  

---

## 🛠 Built With

- **Frontend Framework:** React 18 https://reactjs.org/
- **Build Tool:** Vite https://vitejs.dev/
- **Styling:** Tailwind CSS https://tailwindcss.com/
- **Routing:** React Router DOM https://reactrouter.com/
- **PDF Generation:** jsPDF https://github.com/parallax/jsPDF + html2canvas https://html2canvas.hertzen.com/
- **Fonts:** Google Fonts Inter, Amiri
- **Icons:** Emoji icons no external dependencies
- **Deployment:** Vercel/Netlify ready

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sirat-al-hayah.git
   cd sirat-al-hayah
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install additional packages**
   ```bash
   npm install react-router-dom jspdf html2canvas
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

---

## 📁 Project Structure

```
sirat-al-hayah/
├── public/                  # Static files
│   └── favicon.ico
├── src/
│   ├── components/          # React components
│   │   ├── layout/          # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/        # Section components (if needed)
│   │   └── shared/          # Reusable components
│   │       ├── EvidenceBlock.jsx
│   │       ├── QuoteBlock.jsx
│   │       └── ActionSteps.jsx
│   ├── data/                 # Content data
│   │   ├── foundation.js
│   │   ├── childhood.js
│   │   ├── youth.js
│   │   ├── marriage.js
│   │   ├── parenting.js
│   │   ├── character.js
│   │   └── death.js
│   ├── hooks/                # Custom hooks
│   │   └── useLocalStorage.js
│   ├── pages/                # Page components
│   │   ├── Home.jsx
│   │   └── SectionPage.jsx
│   ├── utils/                # Utility functions
│   │   ├── pdfGenerator.js
│   │   └── scrollToTop.js
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📖 Usage

### Navigating the Site

1. **Home Page** - Overview of all life stages
2. **Click any section card** - Navigate to detailed content
3. **Mobile menu** - Hamburger icon for easy navigation
4. **Footer links** - Quick access to main sections

### Reading Content

Each section contains:
- **Introduction** - Overview of the life stage
- **Key Points** - Main teachings with evidence
- **Quranic Verses** - Arabic + translation
- **Hadith** - Prophetic traditions
- **Action Steps** - Practical implementation
- **Duas** - Supplications for that stage

### Downloading PDFs

1. Navigate to any section
2. Scroll to the bottom
3. Click "Download as PDF"
4. Wait for generation (loading indicator shows)
5. PDF saves automatically to your device

---

## 📚 Sections

| # | Section | Icon | Description |
|---|---------|------|-------------|
| 1 | **Foundation** | 🏗️ | Understanding our purpose |
| 2 | **Childhood** | 👶 | Nurturing the next generation |
| 3 | **Youth** | 🌱 | The prime of life |
| 4 | **Marriage** | 💍 | Half of your faith |
| 5 | **Parenting** | 👪 | Raising righteous children |
| 6 | **Character** | ⭐ | Emulating the Prophet ﷺ |
| 7 | **Death** | 🤲 | The ultimate reality |

---

## 📄 PDF Generation

The PDF generator (`utils/pdfGenerator.js`) features:

- **Multi-page support** - Automatically handles content overflow
- **Loading indicator** - Visual feedback during generation
- **Success message** - Confirmation when complete
- **Error handling** - Graceful failure messages
- **High quality** - 2x scale for crisp text
- **Proper formatting** - Maintains styling in PDF

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Done!** Your site is live.

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop** the `dist` folder to Netlify

### Environment Variables

No environment variables are required for basic functionality.

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Ensure Quranic verses are accurate with proper references
- Verify Hadith authenticity and sources
- Maintain consistent code formatting
- Test PDF generation before submitting
- Update documentation as needed

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact

**Anwar Dahir Yahaya** - *Founder & Developer*

- Email: anwarcscience@gmail.com
- GitHub: https://github.com/Mranwar001
- Phone No:+2348109770991
Project Link: https://github.com/Mranwar001/sirat-al-hayah https://github.com/Mranwar001/sirat-al-hayah

---

## 🙏 Acknowledgments

- **Allah SWT** - For guidance and inspiration
- **Prophet Muhammad ﷺ** - The perfect example
- **Quran and Sunnah** - The ultimate sources
- **React Community** - Amazing tools and libraries
- **Tailwind CSS** - Beautiful styling framework
- **Vite Team** - Blazing fast build tool
- **All Contributors** - Who help improve this project

---

## 📊 Status

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Maintenance](https://img.shields.io/badge/Maintenance-Active-blue)

---

<div align="center">

**Made with ❤️ for the Ummah**

*"The best among you are those who learn the Quran and teach it."* (Bukhari)

**© 2026 Sirat Al-Hayah. All Rights Reserved.**

</div>
```

This README provides:
- Professional branding with badges
- Clear table of contents
- Comprehensive project overview
- Detailed installation instructions
- Complete project structure
- Usage guidelines
- PDF generation explanation
- Deployment steps
- Contribution guidelines
- Contact information
- Acknowledgments

The formatting is clean and works well on both GitHub and as plain text.
