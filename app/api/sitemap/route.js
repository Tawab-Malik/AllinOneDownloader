export async function GET() {
    const baseUrl = "https://allin-one-downloader-9nly.vercel.app";
    const urls = ["/", "/about", "/contact"]; // Add your actual pages

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map((url) => `<url><loc>${baseUrl}${url}</loc></url>`)
          .join("")}
      </urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=0"
        }
    });
}
