# Time Manager Frontend

A modern web application for time management built with React, Vite, and DaisyUI. This project serves as the frontend for the Time Manager application, connecting to a Golang backend.

## 🚀 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **UI Components:** DaisyUI + Tailwind CSS
- **Icons:** Heroicons
- **Router:** React Router Dom
- **HTTP Client:** Axios
- **Utilities:** clsx

## 🛠️ Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Connection to Time Manager Backend API

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/JorgeSaicoski/time-manager-front.git
cd time-manager-front
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## 🏗️ Build

To build for production:
```bash
npm run build
```

To preview production build:
```bash
npm run preview
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:8080
```

## 📁 Project Structure

```
time-manager-front/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── services/      # API services
│   ├── utils/         # Utility functions
│   ├── App.jsx        # Main App component
│   └── main.jsx       # Entry point
├── public/           # Static assets
└── index.html        # HTML template
```

## 🎨 Features

- 🎯 Modern, responsive UI
- 🔐 User authentication
- 📱 Mobile-first design
- 🌙 Theme customization
- 🚀 Fast development with HMR
- 📝 Form validation
- 🔄 API integration ready

## 🔍 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Projects

- [Time Manager Backend](https://github.com/JorgeSaicoski/time-manager-api)

## 👥 Authors

- Your Name ([@JorgeSaicoski](https://github.com/JorgeSaicoski))

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [DaisyUI](https://daisyui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
