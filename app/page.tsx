'use client';

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import RepoCard from './components/RepoCard';
import FeaturedRepos from './components/FeaturedRepos';
import FilterBar from './components/FilterBar';

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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedStars, setSelectedStars] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setHasSearched(true);
    performSearch(query, selectedCategory, selectedLanguage, selectedStars);
  };

  const performSearch = async (query: string, category: string | null, language: string | null, stars: number | null) => {
    setLoading(true);
    setError('');

    try {
      const params = new URLSearchParams();
      params.append('q', query);
      if (category) params.append('category', category);
      if (language) params.append('language', language);
      if (stars) params.append('minStars', stars.toString());

      const response = await fetch(`/api/search?${params.toString()}`);
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
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-tight text-gray-900">Learn</div>
          <div className="text-sm text-gray-600">Discover AI Projects</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight text-gray-900 mb-8 leading-tight">
            Discover the <span className="font-semibold">AI Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-12 leading-relaxed">
            Explore 89+ hand-curated repositories for building AI agents, LLMs, and autonomous systems. From Jarvis to production-ready frameworks.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-2xl">
          <SearchBar onSearch={handleSearch} disabled={loading} />
        </div>
      </section>

      {/* Filter Section */}
      {hasSearched && (
        <FilterBar
          onCategoryChange={(cat) => {
            setSelectedCategory(cat);
            performSearch(searchQuery, cat, selectedLanguage, selectedStars);
          }}
          onLanguageChange={(lang) => {
            setSelectedLanguage(lang);
            performSearch(searchQuery, selectedCategory, lang, selectedStars);
          }}
          onStarsChange={(stars) => {
            setSelectedStars(stars);
            performSearch(searchQuery, selectedCategory, selectedLanguage, stars);
          }}
          selectedCategory={selectedCategory}
          selectedLanguage={selectedLanguage}
          selectedStars={selectedStars}
        />
      )}

      {/* Results/Featured Section */}
      <section className="px-6 pb-24">
        <div className="container mx-auto">
          {error && (
            <div className="max-w-2xl mx-auto p-6 bg-red-50 border border-red-200 rounded-xl text-red-700">
              {error}
            </div>
          )}

          {loading && (
            <div className="flex justify-center py-16">
              <div className="text-center">
                <div className="inline-block animate-spin mb-4">
                  <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-900 rounded-full"></div>
                </div>
                <p className="text-gray-600 font-light">Searching repositories...</p>
              </div>
            </div>
          )}

          {hasSearched && !loading && repos.length === 0 && !error && (
            <div className="text-center py-16">
              <p className="text-gray-500 font-light text-lg">No repositories found. Try a different search.</p>
            </div>
          )}

          {!hasSearched && <FeaturedRepos />}

          {repos.length > 0 && (
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">Search Results</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
