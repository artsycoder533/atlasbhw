import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

import { client } from "../../../../sanity/lib/client";
import { token } from "../../../../sanity/lib/token";

const clientWithToken = client.withConfig({ token });

export async function GET(request: Request) {
  // const { isValid, redirectTo = "/" } = await validatePreviewUrl(
  //   clientWithToken,
  //   request.url
  // );
  const { isValid, redirectTo } = await validatePreviewUrl(clientWithToken, request.url);
  console.log(`Preview URL - isValid: ${isValid}, redirectTo: ${redirectTo}`);

  if (!isValid) {
    return new Response("Invalid secret", { status: 401 });
  }

  draftMode().enable();

  console.log(`Redirecting to===============================>: ${redirectTo}`);

  // redirect(redirectTo);
  return redirect(redirectTo || "/");
}

// import { validatePreviewUrl } from "@sanity/preview-url-secret";
// import { draftMode } from "next/headers";
// import { redirect } from "next/navigation";

// import { client } from "../../../../sanity/lib/client";
// import { token } from "../../../../sanity/lib/token";

// const clientWithToken = client.withConfig({ token });

// export async function GET(request: Request) {
//   const url = new URL(request.url);
  
//   // Validate the preview URL and extract redirect path
//   const { isValid, redirectTo } = await validatePreviewUrl(clientWithToken, url);
//   console.log(`Preview URL - isValid: ${isValid}, redirectTo: ${redirectTo}`);

//   // If the URL is not valid, return a 401 error
//   if (!isValid) {
//     return new Response("Invalid secret", { status: 401 });
//   }

//   // Enable draft mode for preview
//   draftMode().enable();
//   console.log(`Redirecting to: ${redirectTo}`);

//   // Redirect to the URL if provided; otherwise, default to home
//   return redirect(redirectTo || "/");
// }
