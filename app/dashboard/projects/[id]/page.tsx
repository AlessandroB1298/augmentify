import { getDatWithProjectId } from "@/app/api/actions/projectActions";
import ProjectCard
 from "@/app/ui/projects/projectCard";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }> // Note: URL params are always strings
}) {
  const { id } = await params;
  const data = await getDatWithProjectId(id);

  const projectData = {
    imageUrls : data[0].imageUrls,
    projType : data[0].description,
    projName : data[0].name,
    projDesc : data[0].project_type,
  }


  return <div className="w-full h-full flex justify-center items-center">
    <div className="flex flex-row justify-center w-[100vw]">
      <ProjectCard data={projectData}/>
    </div>
  </div>

}
