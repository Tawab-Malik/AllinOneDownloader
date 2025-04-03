export async function GET() {
    const baseUrl = "https://allin-one-downloader-9nly.vercel.app";
    const urls = [
      { path: "/", lastmod: "2024-04-03", priority: "1.0" },
      { path: "/about", lastmod: "2024-04-01", priority: "0.8" },
      { path: "/contact", lastmod: "2024-04-02", priority: "0.7" }
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map(({ path, lastmod, priority }) => 
            `<url>
              <loc>${baseUrl}${path}</loc>
              <lastmod>${lastmod}</lastmod>
              <priority>${priority}</priority>
            </url>`
          )
          .join("")}
      </urlset>`;
  
    return new Response(sitemap, { headers: { "Content-Type": "application/xml" } });
  }
  