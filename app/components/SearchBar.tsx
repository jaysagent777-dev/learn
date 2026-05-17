'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  disabled: boolean;
}

export default function SearchBar({ onSearch, disabled }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search repositories... AI agents, LLMs, frameworks, Jarvis, Friday"
          disabled={disabled}
          className="flex-1 px-6 py-4 rounded-xl bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-200 focus:border-gray-300 focus:bg-white focus:outline-none transition-all disabled:opacity-50 font-light text-lg"
        />
        <button
          type="submit"
          disabled={disabled}
          className="px-8 py-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {disabled ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
}
