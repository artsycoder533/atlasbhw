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


import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const secret = req.headers.get('x-secret-key');
    if (secret !== process.env.MY_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 403 });
    }

    const { path } = await req.json();

    try {
      // Trigger revalidation for the specified path
      await revalidatePath(path);
      return NextResponse.json({ revalidated: true });
    } catch (err) {
      return NextResponse.json({ message: 'Error revalidating path' }, { status: 500 });
    }
  } catch (err) {
    return NextResponse.json({ message: 'Error parsing request' }, { status: 500 });
  }
}

// A utility function to trigger revalidation (dummy implementation)
async function revalidatePath(path: string) {
  // Example: trigger revalidation logic here, for example using fetch with revalidate endpoint
  // const res = await fetch(`/api/revalidate?path=${path}`, { method: 'POST' });
  // if (!res.ok) throw new Error('Failed to revalidate');

  console.log(`Revalidating path: ${path}`);
}

