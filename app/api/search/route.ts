import { NextRequest, NextResponse } from 'next/server';
import { agentRepos } from '@/lib/agentRepos';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = (searchParams.get('q') || '').toLowerCase();
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
      return matchName || matchDescription || matchCategory || matchTopics;
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
