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

- Fully pre-rendered.
- Responsive design.
- Multilingual (EN & AR).
- Very fast performance.
- Decoupled from the backend.

## Tech Stack

- Node.js
- React
- Next.js
- Tailwind CSS

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
