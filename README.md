# 📖 ReadersParadise

ReadersParadise is a **lightweight Manga / Novel / Manhua / Manhwa reader** built with  
**[Tauri](https://tauri.app) + [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org/)**.  

⚡ Fast, 🖥 PC-focused, 🎨 themable, and 📂 supports both local and online sources.  

---

## ✨ Features
- 📚 Read manga, novels, manhua & manhwa in one app
- 🪟 Multi-tab reading (like a browser for manga)
- 🎨 Theme switching (Dark, Pink, Vermilion…)
- 📂 Local folder support (offline reading)
- 🌐 Online scraping support (extendable)
- ⚡ Lightweight (thanks to Tauri)

---

## 🛠 Requirements
Make sure you have the following installed:

- [Rust](https://www.rust-lang.org/tools/install)  
- [pnpm](https://pnpm.io/installation)  

---

## 🚀 Getting Started

Clone the repository:
```bash
git clone https://github.com/yourusername/readersparadise.git
cd readersparadise
````

Install dependencies:

```bash
pnpm install
```

Run in development mode:

```bash
pnpm tauri dev
```

Build a production app:

```bash
pnpm tauri build
```

---

## 📂 Project Structure

```
src/
  ├── pages/        # React pages (welcome, home, source select, reader)
  ├── styles/       # CSS themes and layout
  ├── scripts/      # Tab manager, local reader, scraper logic
  ├── App.tsx       # Main app entry
```

---

## 📸 Screenshots (coming soon)

<!-- Add screenshots or gifs here for a better first impression -->

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an [issue](../../issues) or submit a PR.

---

## 📜 License

This project is licensed under the **Apache License  2.0 GNU** – see [Apache License 2.0](LICENSE) for details.