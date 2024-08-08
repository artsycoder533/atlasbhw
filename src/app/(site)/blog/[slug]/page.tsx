import React from 'react'
import { sanityFetch } from '../../../../../sanity/lib/fetch';

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>({
    query: `*[_type == "blogPost" && defined(slug.current)].slug.current`,
    perspective: 'published',
  });

  return [...slugs].map((slug: string) => ({ slug }));
}

type Props = {}

const BlogDetailPage = (props: Props) => {
  return (
    <div>Individual Blog Page!</div>
  )
}

export default BlogDetailPage