import { Augment } from "../components/buttons";
import Image from "next/image"
/*
This is the project Data that will display the user data in 
a friendly and pretty way.
*/
//! what params SHOULD we take in

interface ProjectParams {
    imageUrls: string[];
    projType: string;
    projName: string;
    projDesc: string;
    projectId : string;
}

type projectData ={
  data : ProjectParams
}

const ProjectData = ({ data }: projectData) => {
  return (
    <div className={"flex w-[60vw] h-[70vh] mt-[50px] shadow-lg "}>
      <div
        className={
          "flex flex-col border-none border-4 pt-[20px] bg-white w-full rounded-lg "
        }
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className={"text-rose-400 text-[32px] font-bold ml-5"}>
            {data.projName}
          </h3>
          <Augment id={data.projectId} />
        </div>
        <div className="flex flex-row mb-4 w-full">
          <div>
            <div className={"flex flex-row flex-wrap m-3"}>
              {data.imageUrls.map((image, index) => (
                <div
                  key={index + 1}
                  className={
                    "border-2 border-solid ml-5 border-rose-300 m-3 mr-5 w-36 h-40  flex-wrap rounded-lg relative hover:shadow-lg hover:translate-y-3.5 transition duration-300"
                  }
                >
                  <Image
                    alt={"project images"}
                    src={image}
                    className="absolute inset-0 w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="/placeholder.svg"
                    width={200}
                    height={200}
                    />
                </div>
              ))}
            </div>
          </div>
          
        </div>
        <div className=" flex w-full item-center justify-center ">
        <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-8 rounded-3xl shadow-lg w-[90%] h-32">
            <h3> Project Type: {data.projType}</h3>
            <h3> Project Desc: {data.projDesc}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectData;
