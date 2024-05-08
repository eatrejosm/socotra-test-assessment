# Socotra Test Assessment

This project were built for skill testing purpose

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Tech Stack

- ⚛️ **Next.js** - React Framework for server-rendered applications
- 🟦 **TypeScript** - Type safety and modern JavaScript features
- 🖌 **Tailwind CSS** - Utility-first CSS framework
- 📑 **Formik** - Form library for building forms in React
- ✅ **Yup** - JavaScript schema builder for validation

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 20.10.0 or higher)
- [npm](https://www.npmjs.com/) (version 10.2.3 or higher) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/eatrejosm/socotra-test-assessment.git
cd socotra-test-assessment
npm install
# or
yarn install
```

### Running Locally

To run the project locally, execute the following command:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the application.

### Building for Production

To build the project for production, run:

```bash
npm run build
# or
yarn build
```

This will create an optimized production build in the .next folder.

### Running Production Build

To start the production server after building, run:

```bash
npm run start
# or
yarn start
```

## Folder Structure

```
socotra-test-assessment/
│
├── public/             # Static files like images, fonts, etc.
├── src/                # Source files
│   ├── apps/           # Next.js pages (React components)
│   ├── components/     # Reusable UI, icon components
│   ├── providers/      # Providers
│   ├── styles/         # Tailwind CSS and other stylesheets
│   └── types/          # Types
├── .eslintrc.js        # ESLint configuration
├── .prettierrc         # Prettier configuration
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation (you're reading it now!)
```
