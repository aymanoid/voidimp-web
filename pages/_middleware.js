import { NextResponse } from "next/server";

export async function middleware(req) {
  if (process.env.MAINT_MODE === "yes") {
    return NextResponse.rewrite(new URL("/maint", req.url));
  }

  return NextResponse.next();
}
