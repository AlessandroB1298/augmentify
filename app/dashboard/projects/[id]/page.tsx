import { getDatWithProjectId } from "@/app/api/actions/projectActions";
import ProjectData from "@/app/ui/projects/projectData";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }> // Note: URL params are always strings
}) {
  const { id } = await params;
  const data = await getDatWithProjectId(id);

  const projectData = {
    projectId : data[0].id,
    imageUrls : data[0].imageUrls,
    projType : data[0].description,
    projName : data[0].name,
    projDesc : data[0].project_type,
  }



  return <div className="w-full h-full flex justify-center items-center">
    <div className="flex flex-row justify-center w-[100vw]">
    <Suspense
            fallback={
              <div className="flex justify-center items-center h-64">
                <Loader2 className="w-12 h-12 text-rose-400 animate-spin" />
              </div>
            }
          >
           <ProjectData data={projectData}/>
          </Suspense>
    </div>
  </div>

}
