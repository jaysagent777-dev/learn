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
    <div className="mb-20">
      <div className="mb-12">
        <h2 className="text-4xl font-semibold text-gray-900 mb-3">Featured Projects</h2>
        <p className="text-lg text-gray-600 font-light">
          Hand-picked repositories from our collection of 89+ AI agents and frameworks
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {featuredRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>

      <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl">
        <p className="text-gray-700 font-light">
          <strong className="font-semibold">💡 Explore by Category:</strong> Try searching "agents", "frameworks", "chatbots", "code generation", or "jarvis" to discover more projects
        </p>
      </div>
    </div>
  );
}
