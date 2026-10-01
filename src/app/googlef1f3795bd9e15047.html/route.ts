const verification = "google-site-verification: googlef1f3795bd9e15047.html";

export function GET() {
  return new Response(verification, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
