import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname.includes("/home")) {
    const token = request.cookies.get("token")?.value;

    if (token) {
      return NextResponse.next(); // Permitir el acceso
    }

    return NextResponse.redirect(new URL("/login", request.url)); // Redirigir a la página de inicio de sesión
  }

  return NextResponse.next();
}
