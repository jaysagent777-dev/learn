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
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for AI agents, LLMs, assistants, jarvis, friday..."
          disabled={disabled}
          className="flex-1 px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:border-blue-500 focus:outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={disabled}
          className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {disabled ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
}
