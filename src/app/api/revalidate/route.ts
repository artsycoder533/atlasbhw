// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   try {
//     const secret = req.headers.get('x-secret-key');
//     if (secret !== process.env.MY_SECRET) {
//       return NextResponse.json({ message: 'Invalid token' }, { status: 403 });
//     }

//     const { path } = await req.json();

//     // Trigger revalidation for the specified path
//     await  NextResponse.revalidate(path);

//     return NextResponse.json({ revalidated: true });
//   } catch (err) {
//     return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
//   }
// }

// export const config = {
//   runtime: 'edge',
// };


// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   try {
//     const secret = req.headers.get('x-secret-key');
//     if (secret !== process.env.MY_SECRET) {
//       return NextResponse.json({ message: 'Invalid token' }, { status: 403 });
//     }

//     const { path } = await req.json();

//     try {
//       // Trigger revalidation for the specified path
//       await revalidatePath(path);
//       return NextResponse.json({ revalidated: true });
//     } catch (err) {
//       return NextResponse.json({ message: 'Error revalidating path' }, { status: 500 });
//     }
//   } catch (err) {
//     return NextResponse.json({ message: 'Error parsing request' }, { status: 500 });
//   }
// }

// // A utility function to trigger revalidation (dummy implementation)
// async function revalidatePath(path: string) {
//   // Example: trigger revalidation logic here, for example using fetch with revalidate endpoint
//   // const res = await fetch(`/api/revalidate?path=${path}`, { method: 'POST' });
//   // if (!res.ok) throw new Error('Failed to revalidate');

//   console.log(`Revalidating path: ${path}`);
// }

import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { initializeContentMapping, getContentMapping } from "../../../../sanity/lib/contentMapping";

const PAGE_TAG_PREFIX = 'page:';
const CONTENT_TYPE_TAG_PREFIX = 'contentType:';

// Ensure content mappings are initialized
await initializeContentMapping();
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

  
    const contentTypeMappings = getContentMapping();
    const affectedPages = contentTypeMappings[body._type] || [];

    // Revalidate based on content type and associated pages
    affectedPages.forEach((pageTag) => {
      revalidateTag(pageTag);
    });

    // Revalidate the page based on slug if available
    const pageSlug = body.slug?.current;
    if (pageSlug) {
      revalidateTag(`${PAGE_TAG_PREFIX}${pageSlug}`);
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




