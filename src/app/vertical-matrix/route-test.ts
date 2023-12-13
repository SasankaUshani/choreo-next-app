import { NextResponse } from 'next/server';
// API Urls
// Basic fetch function

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get('page');
  const search = searchParams.get('search');
  console.log('page', searchParams);

  //   const endpoint = search ? `${SEARCH_BASE_URL}${search}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;

  //   const data = await basicFetch(endpoint);

  return NextResponse.json({});
}
