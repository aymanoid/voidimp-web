import { NextResponse } from "next/server";

export async function middleware(req) {
  if (process.env.MAINT_MODE === "yes") {
    const url = req.nextUrl.clone();
    url.pathname = "/maint";

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
