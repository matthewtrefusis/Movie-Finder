# Movie Finder

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

A responsive movie browser built with React, Vite, TypeScript, and Bootstrap. It uses The Movie Database (TMDB) API to browse popular films, search by title, explore by genre, and save favourites locally using `localStorage`.

## Screenshots

<img width="2559" height="1309" alt="image" src="https://github.com/user-attachments/assets/4a3ac919-38d9-4271-b37a-b9e15d41b440" />

<img width="2559" height="1307" alt="image" src="https://github.com/user-attachments/assets/da992290-2f0a-485e-b9b8-e5ddbd5ec0fd" />

<img width="2559" height="1308" alt="image" src="https://github.com/user-attachments/assets/ae0c51cf-6e10-47a3-b9a4-638416aa26a4" />


## Features

- Browse popular movies from TMDB
- Search for movies by title
- Explore movies by genre
- Save and remove favourites
- Persist favourites across page reloads with `localStorage`
- Responsive UI built with Bootstrap 5
- Client-side routing with React Router

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Bootstrap 5
- **Routing:** React Router
- **API:** TMDB API
- **Storage:** localStorage

## Getting Started

### Prerequisites

- Node.js 16+
- A TMDB API key

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/matthewtrefusis/Movie-Finder.git
   cd Movie-Finder
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root

   ```bash
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. Start the development server

   ```bash
   npm run dev
   ```

5. Open the app in your browser

   - Vite will print the local URL, usually `http://localhost:5173`

## Build for Production

```bash
npm run build
```

## Preview the Production Build

```bash
npm run preview
```

## Project Structure

- `src/components/MovieCard.tsx` — movie card UI and favourite toggle
- `src/components/NavBar.tsx` — navigation and genre dropdown
- `src/contexts/MovieContext.tsx` — favourites state and localStorage persistence
- `src/pages/Home.tsx` — home page with search and popular movies
- `src/pages/Popular.tsx` — popular movies page
- `src/pages/Favourites.tsx` — saved favourites page
- `src/pages/genre/GenrePage.tsx` — reusable genre browsing page
- `src/services/api.ts` — TMDB API calls

## Environment Variables

The app requires:

```bash
VITE_TMDB_API_KEY
```

This key is used to fetch data from TMDB.

## Notes

- Bootstrap CSS and JS are imported in `src/main.tsx`
- Routes are configured in `src/App.tsx`
- Favourites are stored in `localStorage` under the key `favorites`

## License

MIT
