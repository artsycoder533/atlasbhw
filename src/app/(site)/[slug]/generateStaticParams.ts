// app/[slug]/generateStaticParams.ts
import { sanityFetch } from "../../../../sanity/lib/fetch";

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>({
    query: `*[_type == "menuItem" && defined(slug.current)].slug.current`,
  });

  // Ensure the home page slug is included
  return [...slugs, '/'].map((slug: string) => ({ slug }));
}
