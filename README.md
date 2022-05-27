<a href="https://www.voidimp.com/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://www.voidimp.com/logos/voidimp-logo-word-dark-512w.png">
    <img src="https://www.voidimp.com/logos/voidimp-logo-word-light-512w.png" alt="VoidImp logo" title="VoidImp" align="right" height="60">
  </picture>
</a>

# VoidImp Site

[VoidImp 😈](https://www.voidimp.com/) is an entertainment media website and blog providing content related to gaming, movies, tech, and more!

This repository contains all the code for the frontend part of the website (also some backend code used for data fetching). The project embraces the Jamstack architecture for its performance, scalability, and maintainability benefits.

## Features

- 📜 Fully pre-rendered.
- 📱 Responsive design.
- 🌍 Multilingual (EN & AR).
- 🚀 Very fast performance.
- 🦾 Decoupled from the backend.

## Tech Stack

- [Node.js](https://github.com/nodejs/node)
- [React](https://github.com/facebook/react)
- [Next.js](https://github.com/vercel/next.js)
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)

## Development

1. Clone the repository into your system.

2. Make a `.env.local` file inside the project directory with the following data filled out.

```sh
CMS_API_TOKEN=xxxxxxxxxxxxxxxxx # api token for your strapi instance
NEXT_PUBLIC_CMS_API_URL=https://cms.example.com # main url of your strapi instance
BUNDLE_ANALYZE=false # whether to enable next's js bundle analyzer or not
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX # your google analytics id
```

3. Execute the following commands in that directory.

```sh
# Install dependencies
$ npm i

# Run the server in dev mode at localhost:3000
$ npm run dev

# Or build for production and launch server
$ npm run build
$ npm run start
```

## Project Structure

```sh
voidimp-web/
├── components # contains components organized into folders based on where they're used
├── pages # contains static and dynamic routes of every page of the website
├── public # contains publicly available files such as icons and whatnot
├── utils # contains utility code for various areas of the project
├──── _queries # contains functions used for data fetching/aggregation used in pages
├──── api.js # contains main function used for fetching data from the cms
├──── helpers.js # contains helper funtions to perform commonly needed actions
└── styles # not really used as this project uses Tailwind for styling
```
