# 🧩 Task Manager 
A simple and clean setup for working with TypeScript, SASS, and Lite Server.
Perfect for small frontend projects or practicing web development without complex frameworks.
---

## 🚀 Description
This project compiles TypeScript and SASS automatically, runs a local development server,
and refreshes the browser whenever you make changes. Everything is handled with just one command.

## ⚙️ Main Features
	•	🧠 TypeScript support with auto compilation
	•	🎨 SASS/SCSS styling with watch mode
	•	🌍 Lite Server for live reloading
	•	🔄 Concurrently runs multiple scripts at once
	•	🧹 ESLint + Prettier for clean and consistent code
## 🗂️ Project Structure
```
project/
│
├── dist/                # Compiled output (HTML, JS, CSS)
│   ├── css/
│   ├── main.js
│   ├── index.html
│
├── src/                 # Source code (TypeScript, SCSS)
│   ├── components/
│   ├── models/
│   ├── repositories/
│   ├── services/
│   └── main.ts
│
├── package.json
├── tsconfig.json
├── bs-config.json
├── eslint.config.mts
├── .prettierrc
└── README.md
```
## 💻 Installation
1.	Clone the repository
\`\`\`bash
git clone <your-repo-url>
cd <your-project-folder>
\`\`\`
2.	Install dependencies
\`\`\`bash
npm install
\`\`\`

# 🚀 Usage
\`\`\`bash
npm run dev
\`\`\`

This will

	•	Watch your TypeScript files and compile them on save
	•	Watch your SASS files and build CSS automatically
	•	Start Lite Server and refresh your browser instantly

## 🧩 Available Scripts
```
| Command              | Description                                   |
|----------------------|-----------------------------------------------|
| `npm run dev`        | Run everything (TypeScript, SASS, and server) |
| `npm run watch:ts`   | Watch and compile TypeScript                  |
| `npm run watch:sass` | Watch and compile SASS                        |
```

## 🛠️ Technologies Used
	•	TypeScript
	•	SASS (SCSS)
	•	Lite Server
	•	Concurrently
	•	ESLint
	•	Prettier

## 📝 License
This project is released under the MIT License.
Feel free to use, modify, and share it however you like.
