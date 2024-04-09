import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/dj-by-city/all', request.url))
}

export const config = {
  matcher: ['/dj-by-city']
}
