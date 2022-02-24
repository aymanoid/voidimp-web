import { NextResponse } from "next/server";

export async function middleware(req) {
  const legit = req.nextUrl.searchParams.get("key") === "cGFzc3dvcmQ=";

  if (process.env.MAINT_MODE === "true" && !legit) {
    return NextResponse.json(
      "VoidImp is currently under construction, come back soon!"
    );
  }
  return NextResponse.next();
}
