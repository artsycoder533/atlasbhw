import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

const SITE_WIDE_TAG = 'site-wide'; 

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: { current: string } | undefined;
    }>(req, process.env.MY_SECRET);

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    // Trigger revalidation for the site-wide tag
    revalidateTag(SITE_WIDE_TAG);

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





