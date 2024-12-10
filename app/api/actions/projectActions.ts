"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/app/db/drizzle";
import { projects } from "@/app/db/schema";
import { currentUser } from "@clerk/nextjs/server";


export const getData = async () => {
  const data = await db.select().from(projects);
  return data;
};

export const addProject = async (name: string, project_type: string, description: string, imageUrls: string[]) => {
  const user = await currentUser();
  if(!user) throw new Error("User not found");
  await db.insert(projects).values({
   user_id : user.id,
   name : name,
   project_type : project_type,
   description : description,
   imageUrls : imageUrls,
  });
};
