# Learn - GitHub Discovery Platform for AI Agents

Discover and explore GitHub repositories for building AI agents, assistants, and LLM applications.

## Features

- **Smart Search**: Search for AI agent, assistant, and LLM repos across GitHub
- **Repository Cards**: View key metrics (stars, forks, language, topics)
- **Learning Paths**: Curated collections for learning AI development (coming soon)
- **Bookmarking**: Save interesting repos for later (coming soon)
- **User Accounts**: Track your learning journey (coming soon)

## Setup

### Prerequisites
- Node.js 18+
- GitHub Personal Access Token (for API access)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables in `.env.local`:
```
GITHUB_TOKEN=your_github_pat_here
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Running Locally

```bash
npm run dev
```

Visit `http://localhost:3000` to see the app.

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/app/api/search` - GitHub API integration
- `/app/components` - React components

## MVP Roadmap (8 weeks)

- [x] Week 1-2: GitHub API integration + basic search
- [ ] Week 3-4: Repo connection logic (similar repos, dependencies)
- [ ] Week 5-6: Learning paths and collections UI
- [ ] Week 7-8: Deploy and get first 100 users

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Backend**: Next.js API Routes
- **Styling**: Tailwind CSS
- **GitHub Integration**: Octokit
