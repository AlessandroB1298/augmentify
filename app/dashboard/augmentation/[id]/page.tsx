import { getDatWithProjectId } from "@/app/api/actions/projectActions";
import AugmentForm from "@/app/ui/augmentation/augmentForm";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }> // Note: URL params are always strings
}) {
  const { id } = await params;

  if(id != null){
    console.log("id was successfully passed down")
  }

  const data = await getDatWithProjectId(id);
  
    const projectData = {
      imageUrls : data[0].imageUrls,
    }

    console.log(JSON.stringify(projectData))
    

  return <div className=" border-black flex justify-center items-center ">
        <AugmentForm
        imageUrls={projectData.imageUrls}
        />
  </div>

}
