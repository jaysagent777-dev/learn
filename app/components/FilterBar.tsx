'use client';

import { categories } from '@/lib/agentRepos';

interface FilterBarProps {
  onCategoryChange: (category: string | null) => void;
  onLanguageChange: (language: string | null) => void;
  onStarsChange: (minStars: number | null) => void;
  selectedCategory: string | null;
  selectedLanguage: string | null;
  selectedStars: number | null;
}

const languages = ['Python', 'JavaScript', 'TypeScript', 'Go', 'Rust', 'C++', 'C#'];
const starFilters = [
  { label: 'All', value: null },
  { label: '100+ stars', value: 100 },
  { label: '1k+ stars', value: 1000 },
  { label: '10k+ stars', value: 10000 },
];

export default function FilterBar({
  onCategoryChange,
  onLanguageChange,
  onStarsChange,
  selectedCategory,
  selectedLanguage,
  selectedStars,
}: FilterBarProps) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Category Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900">Category</label>
            <select
              value={selectedCategory || ''}
              onChange={(e) => onCategoryChange(e.target.value || null)}
              className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm focus:border-gray-300 focus:outline-none"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Language Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900">Language</label>
            <select
              value={selectedLanguage || ''}
              onChange={(e) => onLanguageChange(e.target.value || null)}
              className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm focus:border-gray-300 focus:outline-none"
            >
              <option value="">All Languages</option>
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          {/* Stars Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900">Popularity</label>
            <select
              value={selectedStars ?? ''}
              onChange={(e) => onStarsChange(e.target.value ? parseInt(e.target.value) : null)}
              className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm focus:border-gray-300 focus:outline-none"
            >
              {starFilters.map((filter) => (
                <option key={filter.label} value={filter.value ?? ''}>
                  {filter.label}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Button */}
          {(selectedCategory || selectedLanguage || selectedStars) && (
            <button
              onClick={() => {
                onCategoryChange(null);
                onLanguageChange(null);
                onStarsChange(null);
              }}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-medium transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
