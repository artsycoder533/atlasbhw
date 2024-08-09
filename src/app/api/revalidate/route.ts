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

// import { revalidatePath } from "next/cache";
// import { NextRequest, NextResponse } from "next/server";
// import { parseBody } from "next-sanity/webhook";
// import { sanityFetch } from "../../../../sanity/lib/fetch";

// // Define the query to get pages based on document type
// const getPagesQuery = (documentType: string) => `
//   *[_type == "${documentType}"] {
//     references(*[_type == "page"].slug.current)
//   }
// `;

// export async function POST(req: NextRequest) {
//   try {
//     // Parse the incoming webhook request
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

//     // Fetch the list of slugs for the given document type
//     const query = getPagesQuery(body._type);
//     const result = await sanityFetch<{ references: { slug: string }[] }>({
//       query,
//       tags: [`_type:${body._type}`]  // Adjust the tags if necessary
//     });

//     // Flatten the references array and get slugs
//     const slugs = result.references.map(ref => ref.slug);

//     // Revalidate each path
//     for (const slug of slugs) {
//       revalidatePath(`/${slug}`);
//     }

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
import { NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: { current: string } | undefined;
      pageSlug?: string;  // Assuming sections have a reference to their page
    }>(req, process.env.MY_SECRET);

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 });
    }

    // Example: Assuming each section has a `pageSlug` field referencing the page it belongs to
    if (body._type === "section" && body.pageSlug) {
      revalidatePath(`/${body.pageSlug}`);
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











