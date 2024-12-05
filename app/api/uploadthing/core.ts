

import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from '@clerk/nextjs/server'
import { metadata } from "@/app/layout";

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
          maxFileCount: 1,
        },
      })

      //set our permissions using the middlware
      .middleware(async ({ req }) => {
        const user = await auth(); //await auth 
        if(!user.userId){
            throw new UploadThingError("Unauthorized acess") //throw err 
        }
        return {userID : user.userId} //return that userID
      })
      //next lets do onUploadComplete
      .onUploadComplete(async({metadata , file})=>{
        console.log("Upload complete for userId:", metadata.userID);
        console.log("file url", file.url);
        // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
        return { uploadedBy: metadata.userID };
      }),
}satisfies FileRouter //nested object type complex properties 

export type OurFileRouter = typeof ourFileRouter; //export the file router type
