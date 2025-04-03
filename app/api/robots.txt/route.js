export async function GET() {
    return new Response(
        `User-agent: *
        Allow: /
        Sitemap: https://allin-one-downloader-9nly.vercel.app/sitemap.xml`,
        { headers: { "Content-Type": "text/plain" } }
    );
}
