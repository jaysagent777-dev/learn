'use client';

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import RepoCard from './components/RepoCard';
import FeaturedRepos from './components/FeaturedRepos';

interface Repo {
  id: number;
  name: string;
  fullName: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  topics: string[];
  updatedAt: string;
}

export default function Home() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError('');
    setHasSearched(true);

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Search failed');
      }

      setRepos(data.repos);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Learn</h1>
          <p className="text-xl text-gray-300">
            Discover GitHub repos for building AI agents, assistants, and LLM applications
          </p>
        </div>

        <SearchBar onSearch={handleSearch} disabled={loading} />

        {!hasSearched && <FeaturedRepos />}

        {error && (
          <div className="mt-8 p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-200">
            {error}
          </div>
        )}

        {loading && (
          <div className="mt-8 text-center">
            <div className="inline-block animate-spin">
              <div className="w-8 h-8 border-4 border-slate-400 border-t-blue-500 rounded-full"></div>
            </div>
            <p className="mt-4 text-gray-300">Searching repositories...</p>
          </div>
        )}

        {hasSearched && !loading && repos.length === 0 && !error && (
          <div className="mt-8 text-center text-gray-400">
            No repositories found. Try a different search query.
          </div>
        )}

        {repos.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
