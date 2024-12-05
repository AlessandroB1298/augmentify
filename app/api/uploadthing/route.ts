import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

//export routes for Next App Router

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});

// export function GET(){
//     return new Response("hello world")
// }