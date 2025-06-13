# Developer Portfolio

This is my developer portfolio built with **React**. It showcases my web and software development projects (big and small), provides an about section, and includes a contact form for recruiters and collaborators to get in touch.

---

## Tech Stack

- **React**: Main framework for building the UI.
- **React Router**: Handles client-side routing between pages.
- **Bootstrap**: For basic responsive layout and utility classes.
- **EmailJS**: Enables sending emails directly from the contact form without a backend.
- **Custom CSS**: For layout, theming, and component styling.
- **Vite** or **Create React App**: (Depending on your setup) for local development and build tooling.

---

## Project Structure

```
/src
  /assets                # Images and static assets
  /pages
    /components          # Reusable components (Header, ProjectCard, AboutContent, ContactForm, etc.)
    /styles              # CSS files for each page/component
    about.jsx            # About page
    contact.jsx          # Contact page
    home.jsx             # Home page
    projects.jsx         # Projects page
  App.jsx                # Main app component with routing
  App.css                # Global styles and transitions
index.html               # Entry point
```

---

## Main Components

- **Header**: Navigation bar with links to all main pages.
- **HomeContent**: Landing section with a brief intro.
- **ProjectCard**: Displays individual projects, grouped by type (Web Development, Software Development).
- **AboutContent**: Bio, background, and interests.
- **ContactForm**: Form for recruiters to reach out, powered by EmailJS.

---

## Routing

- `/` — Home
- `/about` — About Me
- `/projects` — Projects (web/software grouped)
- `/contact` — Contact Form

---

## Contact Form

- Uses **EmailJS** for sending messages directly to your email.
- Fields: Name, Email, Company, Message.
- No backend required.

---

## Styling

- Custom CSS for each component/page in `/src/pages/styles/`.
- Responsive layouts for all major sections.
- Cards and forms styled for clarity and accessibility.
- Bubbles or gradient background for visual interest (with proper z-index layering).

---

## 📦 Deployment

- Build with:
  ```sh
  npm run dev
  ```

---

## Customization

- Add or edit projects in `/src/pages/components/projectCard.jsx`.
- Update images in `/src/assets/`.
- Adjust styles in `/src/pages/styles/`.

---

## Credits

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Bootstrap](https://getbootstrap.com/)
- [EmailJS](https://www.emailjs.com/)

---
