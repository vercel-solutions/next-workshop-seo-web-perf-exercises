import { NextRequest, NextResponse } from 'next/server'

import api from './api'

export const config = {
  matcher: '/hot',
}
export default async function middleware(req: NextRequest) {
  const hot = await api.hot()
  req.nextUrl.pathname = `/${hot.id}`
  return NextResponse.rewrite(req.nextUrl)
}
