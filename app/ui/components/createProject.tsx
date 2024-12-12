import { CreateNewProject } from "@/app/ui/components/buttons";
import DisplayProjects from "@/app/ui/components/displayProjects";
const CreateProject = () => {
  return (
    <div className={"flex w-full h-[70vh] mt-[50px] shadow-lg"}>
      <div
        className={
          "flex flex-col border-none border-4 pt-[20px] bg-white w-full rounded-lg "
        }
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className={"text-rose-400 text-[32px] font-bold ml-5"}>Projects</h3>
          <CreateNewProject />
        </div>
        <div className="flex flex-row mb-4 w-full">
          <div className="w-full h-auto">
              <DisplayProjects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
