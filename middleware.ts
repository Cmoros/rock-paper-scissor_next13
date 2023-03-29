import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

const notProtected = ["/_next", "/api", "/static", "/game"];

const checkRoute = (pathname: string) => {
  return notProtected.some((path) => pathname.startsWith(path));
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (checkRoute(pathname) || PUBLIC_FILE.test(pathname) || pathname === "/") {
    return NextResponse.next();
  }
  req.nextUrl.pathname = "/";
  return NextResponse.redirect(req.nextUrl);
}
