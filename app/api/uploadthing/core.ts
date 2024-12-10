import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from '@clerk/nextjs/server'
//create upload thing 
const f = createUploadthing();

//! Super basic form the website from https://docs.uploadthing.com/getting-started/appdir
export const ourFileRouter={
    imageUploader: f({
        image: {
          /**
           * For full list of options and defaults, see the File Route API reference
           * @see https://docs.uploadthing.com/file-routes#route-config
           */
          maxFileSize: "4MB",
          maxFileCount: 10,
        },
      })

      //set our permissions using the middlware
      .middleware(async ({ req }) => {
        const user = await auth(); //await auth 
        if (req){
          console.log("there was a request")
        }
      
        if(!user.userId){
            throw new UploadThingError("Unauthorized acess") //throw err 
        }
        return {userId : user.userId} //return that userID
      })
      //next lets do onUploadComplete
      .onUploadComplete(async ({ metadata, file }) => {
        // This code RUNS ON YOUR SERVER after upload
        console.log("Upload complete for userId:", metadata.userId);
        console.log("file url", file.url);

        // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
        return { uploadedBy: metadata.userId };
      }),
  } satisfies FileRouter;
  export type OurFileRouter = typeof ourFileRouter;