# Learning Management System Frontend 🔥🚀

### Setup Instructions

1. Clone the project.

```
    git clone https://github.com/ChinmayKaitade/Learning-Management-System-Client
```

2. Move into the directory.

```
    cd Learning-Management-System-Client
```

3. Install dependencies.

```
    npm i
```

4. Run the server.

```
    npm run dev
```

### Setup Instructions for Tailwind

[Tailwind Official Documentation](https://tailwindcss.com/docs/installation)

1. Install tailwindcss.

```
    npm install -D tailwindcss postcss autoprefixer
```

2. Create tailwind config file.

```
    npx tailwindcss init -p
```

3. Add file extensions to tailwind config file in the contents property.

```
    "./src/**/*.{html,js,jsx,ts,tsx}", "./index.html",
```

4. Add the tailwind directives at the top of the `index.css` file.

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

5. Add the following details in the plugin property of tailwind config.

```
    [require("daisyui"), require("@tailwindcss/line-clamp")]
```

### Adding Plugins and Dependencies

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort eslint

1. Install simple import sort.

```
    npm i -D eslint-plugin-simple-import-sort
```

plugin installed for Easy auto-fixable import sorting

2. Add rule in `.eslint.cjs`.

```
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
```

3. Add simple-import-sort plugin in `eslint.cjs`.

```
     plugins: {
      "simple-import-sort": simpleImportSort,
    },
```

4. To enable auto import sort on file save in vscode

   - Open `settings.json`
   - add the following config

```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```

1.  Setting up the project
2.  Setting up eslint and react hot toast
3.  Setting up redux store and basic auth slice
4.  Setting up axios instance
5.  Writing footer
6.  Lets work on Layout & Home Page
7.  Adding Action buttons on sidebar
8.  Building About us Page
9.  Creating not found page
10. Sign up page
11. Adding authentication flow
12. Logout Implemented
13. Making Course List page
14. Making Contact Page
15. Denied Page
16. Course Description Page
17. Added Require Auth
18. Course Creation by Admin
19. User Profile
20. Edit Profile
21. Razorpay Slice
22. Checkout Page
23. Payment Cancellation
24. Lecture State
25. Displaying Lectures
26. Uploading Lectures

