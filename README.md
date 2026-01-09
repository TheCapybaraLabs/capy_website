# Capy Showcase

A modern, responsive showcase website for Capybara Labs, built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui components. This project demonstrates our expertise in AI consulting, custom software development, and SaaS platforms.

## About Capybara Labs

Capybara Labs is a leading technology company specializing in Artificial Intelligence solutions for Brazilian organizations. We offer:

- **AI Consulting & Training**: Specialized training in AI tools for administrative processes
- **Custom Software Development**: Tailored solutions for unique business challenges
- **SaaS Platforms**: Enterprise-grade AI chat platforms with white-label options

## Features

- 🚀 Built with Next.js 16 and React 19
- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- 🌙 Dark/Light theme support with next-themes
- 📱 Fully responsive design
- ⚡ Optimized performance with Vercel Analytics and Speed Insights
- 🔧 TypeScript for type safety
- 🎯 SEO-friendly with proper meta tags

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (built on Radix UI)
- **Icons**: Lucide React
- **Theme**: next-themes
- **Analytics**: Vercel Analytics & Speed Insights
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- Bun (recommended) or Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/capy_showcase.git
cd capy_showcase
```

2. Install dependencies with Bun:
```bash
bun install
```

3. Run the development server:
```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Alternative Package Managers

If you prefer using other package managers:

```bash
# npm
npm install
npm run dev

# yarn
yarn install
yarn dev

# pnpm
pnpm install
pnpm dev
```

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run lint:fix` - Fix ESLint issues
- `bun run format` - Format code with Prettier

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── ...                # Other pages
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── sections/         # Page sections
│   └── layout/           # Layout components
├── constants/            # App constants
└── lib/                  # Utility functions
```

## Adding New Components

This project uses shadcn/ui for UI components. To add new components:

```bash
bunx shadcn@latest add [component-name]
```

For example:
```bash
bunx shadcn@latest add button
```

## Deployment

This project is optimized for deployment on Vercel, but can be deployed to any platform supporting Next.js:

1. Build the project:
```bash
bun run build
```

2. The build artifacts will be stored in the `dist/` directory.

## Contact

For business inquiries or consultations:
- Email: contato@capybaralabs.com.br
- Website: [capybaralabs.com.br](https://capybaralabs.com.br)

## License

This project is private and proprietary to Capybara Labs.
