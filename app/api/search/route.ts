import { NextRequest, NextResponse } from 'next/server';
import { agentRepos } from '@/lib/agentRepos';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = (searchParams.get('q') || '').toLowerCase();
  const category = searchParams.get('category');
  const language = searchParams.get('language');
  const minStars = searchParams.get('minStars') ? parseInt(searchParams.get('minStars')!) : null;
  const page = parseInt(searchParams.get('page') || '1');
  const perPage = 20;

  try {
    // Search local database
    const filtered = agentRepos.filter((repo) => {
      const matchName = repo.name.toLowerCase().includes(query);
      const matchDescription = repo.description.toLowerCase().includes(query);
      const matchCategory = repo.category.toLowerCase().includes(query);
      const matchTopics = repo.topics.some((topic) =>
        topic.toLowerCase().includes(query)
      );
      const matchesSearch = matchName || matchDescription || matchCategory || matchTopics;

      // Apply filters
      const matchesCategory = !category || repo.category === category;
      const matchesLanguage = !language || repo.language === language;
      const matchesStars = !minStars || repo.stars >= minStars;

      return matchesSearch && matchesCategory && matchesLanguage && matchesStars;
    });

    // Sort by stars
    const sorted = filtered.sort((a, b) => b.stars - a.stars);

    // Paginate
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const repos = sorted.slice(start, end);

    return NextResponse.json({
      repos,
      total: sorted.length,
      hasMore: end < sorted.length,
    });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Failed to search repositories' },
      { status: 500 }
    );
  }
}
