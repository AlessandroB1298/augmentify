import {CreateNewProject} from "@/app/ui/components/buttons";

const CreateProject = () => {
    return (
        <div className={"flex w-full h-[70vh] mt-[50px] shadow-lg"}>
            {/* Inner div with padding, background color, and a little height */}
            <div className={"flex flex-col border-none border-4 pt-[20px] bg-white w-full rounded-lg "}>
                {/* Flex container for h3 and button */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className={"text-rose-400 text-[48px] font-bold"}>Projects</h3>
                    <CreateNewProject/>
                </div>
                <div className="flex flex-row mb-4 w-full">
                    <div className="w-full border-2 border-solid border-black h-auto">item1</div>
                </div>
                <div className="flex flex-row mb-4 w-full">
                    <div className="w-full border-2 border-solid border-black h-auto">item2</div>
                </div>
            </div>
        </div>
    );
};

export default CreateProject;
