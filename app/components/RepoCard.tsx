'use client';

interface Repo {
  id: number;
  name: string;
  fullName: string;
  description: string;
  url: string;
  stars: number;
  forks?: number;
  language: string;
  topics: string[];
  updatedAt?: string;
}

interface RepoCardProps {
  repo: Repo;
}

export default function RepoCard({ repo }: RepoCardProps) {
  const updatedDate = repo.updatedAt ? new Date(repo.updatedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }) : 'N/A';

  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-slate-700 rounded-lg border border-slate-600 hover:border-blue-500 hover:bg-slate-600 transition-all group"
    >
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
          {repo.name}
        </h3>
        <p className="text-sm text-gray-400">{repo.fullName}</p>
      </div>

      {repo.description && (
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
          {repo.description}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {repo.language && (
          <span className="inline-block px-2 py-1 text-xs rounded bg-blue-900/40 text-blue-300">
            {repo.language}
          </span>
        )}
        {repo.topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="inline-block px-2 py-1 text-xs rounded bg-slate-600 text-gray-300"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-400 border-t border-slate-600 pt-3">
        <div className="flex gap-4">
          <span>⭐ {repo.stars.toLocaleString()}</span>
          {repo.forks !== undefined && <span>🍴 {repo.forks.toLocaleString()}</span>}
        </div>
        <span>Updated {updatedDate}</span>
      </div>
    </a>
  );
}
