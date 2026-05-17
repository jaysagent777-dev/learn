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
      className="block p-7 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
          {repo.name}
        </h3>
        <p className="text-sm text-gray-500 font-light mt-1">{repo.fullName}</p>
      </div>

      {repo.description && (
        <p className="text-sm text-gray-600 mb-5 line-clamp-2 font-light leading-relaxed">
          {repo.description}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {repo.language && (
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 font-medium">
            {repo.language}
          </span>
        )}
        {repo.topics.slice(0, 2).map((topic) => (
          <span
            key={topic}
            className="inline-block px-3 py-1 text-xs rounded-full bg-gray-50 text-gray-600 font-light"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
        <div className="flex gap-5 font-light">
          <span className="flex items-center gap-1">⭐ {repo.stars.toLocaleString()}</span>
          {repo.forks !== undefined && <span className="flex items-center gap-1">🍴 {repo.forks.toLocaleString()}</span>}
        </div>
        <span className="text-xs">{updatedDate}</span>
      </div>
    </a>
  );
}
