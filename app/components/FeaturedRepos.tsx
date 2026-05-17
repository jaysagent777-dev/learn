'use client';

import { useMemo } from 'react';
import { agentRepos } from '@/lib/agentRepos';
import RepoCard from './RepoCard';

export default function FeaturedRepos() {
  const featuredRepos = useMemo(() => {
    // Show top 6 repos by stars (deterministic, no hydration mismatch)
    return [...agentRepos].sort((a, b) => b.stars - a.stars).slice(0, 6);
  }, []);

  return (
    <div className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
        <p className="text-gray-400">
          Explore 85+ AI agents, LLM frameworks, and related tools
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
        <p className="text-sm text-blue-300">
          💡 <strong>Browse by Category:</strong> Search "agents", "frameworks", "chatbots", "code generation", etc. to explore our curated collection
        </p>
      </div>
    </div>
  );
}
