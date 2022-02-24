import { NextResponse } from "next/server";

export async function middleware(req, s) {
  const res = NextResponse.next();
  const access_key = req.nextUrl.searchParams.get("key");

  if (access_key) {
    res.cookie("access_key", access_key, {
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 14,
      httpOnly: true,
      sameSite: "strict",
    });
  }

  const legit = req.cookies["access_key"] === "cGFzc3dvcmQ=";

  if (process.env.MAINT_MODE === "true" && !legit) {
    return NextResponse.json(
      "VoidImp is currently under construction, come back soon!"
    );
  }
  return NextResponse.next();
}
