# 🎬 Movie Finder

A modern and responsive movie search application built with **React.js** and **Vite**, powered by the **OMDb API**.

Discover movies, explore their posters, and find essential movie information through a simple and intuitive interface.

## ✨ Features

- 🔍 Search for movies by title.
- 🎞️ Display movie posters and titles.
- 📅 Show movie release years.
- ⚡ Fetch movie data dynamically using Axios.
- 📱 Responsive movie grid layout.
- 🎨 Modern dark-themed user interface.
- ⚠️ Handle API errors and empty search results.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| Vite | Development environment and build tool |
| JavaScript | Application logic |
| Axios | API requests |
| CSS3 | Styling and responsive design |
| OMDb API | Movie data provider |

## 📸 Screenshots

<!-- Add your application screenshots here -->

## 📂 Project Structure

```text
movie-search-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── SearchBar.jsx
│   │   ├── SearchBar.css
│   │   ├── MovieList.jsx
│   │   ├── MovieList.css
│   │   ├── MovieCard.jsx
│   │   └── MovieCard.css
│   │
│   ├── services/
│   │   └── movieApi.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/amine-mohamed77/movie-search-app.git
```

### 2. Navigate to the Project Directory

```bash
cd movie-search-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure the API Key

Get your API key from [OMDb API](https://www.omdbapi.com/apikey.aspx).

Create a `.env` file in the root directory:

```env
VITE_OMDB_API_KEY=your_api_key
```

Replace `your_api_key` with your own OMDb API key.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🔑 API Reference

This application uses the [OMDb API](https://www.omdbapi.com/) to retrieve movie information.

Example request:

```text
https://www.omdbapi.com/?s=batman&apikey=YOUR_API_KEY
```

## 📚 What I Learned

Through this project, I practiced and improved my skills in:

- Building reusable React components.
- Managing state with `useState`.
- Passing data between components using Props.
- Handling form submissions and user input.
- Working with asynchronous JavaScript using `async/await`.
- Integrating third-party APIs with Axios.
- Handling API responses and errors.
- Organizing a React project into reusable components.

## 🔒 Security Note

The `.env` file is excluded from Git using `.gitignore`.

**Important:** Vite environment variables prefixed with `VITE_` are exposed to the browser. For production applications, API credentials should be protected through a backend service.

## 👨‍💻 Author

**Amin Mohamed**

- GitHub: [@amine-mohamed77](https://github.com/amine-mohamed77)
- LinkedIn: [Amin Mohamed](https://www.linkedin.com/in/amin-mohamed-4667a1245/)

---

⭐ If you like this project, feel free to give it a star!

**Built with ❤️ using React.js**
