import { NextResponse } from "next/server";

export async function middleware(req) {
  const allowedIps = ["105.158.115.64"];

  const legit = req.ip ? allowedIps.includes(req.ip) : true;

  if (!legit) {
    return NextResponse.json(
      "VoidImp is currently under construction, come back soon!"
    );
  }
  return NextResponse.next();
}
