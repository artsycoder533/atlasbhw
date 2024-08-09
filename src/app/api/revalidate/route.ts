// import { revalidateTag } from "next/cache";
// import { type NextRequest, NextResponse } from "next/server";
// import { parseBody } from "next-sanity/webhook";

// const SITE_WIDE_TAG = 'site-wide'; 

// export async function POST(req: NextRequest) {
//   try {
//     const { body, isValidSignature } = await parseBody<{
//       _type: string;
//       slug?: { current: string } | undefined;
//     }>(req, process.env.MY_SECRET);

//     if (!isValidSignature) {
//       return new Response("Invalid Signature", { status: 401 });
//     }

//     if (!body?._type) {
//       return new Response("Bad Request", { status: 400 });
//     }

//     // Trigger revalidation for the site-wide tag
//     revalidateTag(SITE_WIDE_TAG);

//     return NextResponse.json({
//       status: 200,
//       revalidated: true,
//       now: Date.now(),
//       body,
//     });
//   } catch (error: any) {
//     console.error(error);
//     return new Response(error.message, { status: 500 });
//   }
// }

import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { getPagesByDocumentTypeQuery } from "../../../../sanity/lib/queries";

// Example revalidation logic for dynamic routes
export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: { current: string } | undefined;
    }>(req, process.env.MY_SECRET);

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 });
    }

    // Fetch or compute the list of affected pages based on your logic
    const pages = await getPagesBasedOnDocumentType(body._type);

    // Revalidate dynamic paths based on the page slugs
    for (const page of pages) {
      revalidatePath(`/${page.slug}`); // Ensure this matches your dynamic route
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (error: any) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}

// Example function to get affected pages based on content type
// Function to get pages based on document type
export async function getPagesBasedOnDocumentType(documentType: string) {
  const query = getPagesByDocumentTypeQuery(documentType);
  const pages = await sanityFetch<{ slug: string }>({
    query,
    tags: [`_type:${documentType}`], // Adjust tags if needed
  });

  return pages;
}






