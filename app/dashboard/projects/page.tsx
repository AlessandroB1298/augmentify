import React from "react";
import CreateProject from "@/app/ui/components/createProject";

export default function Page() {
  return (
    <div>
      <div>
        <h2 className={"text-white text-[64px] font-solid w-[200vw]"}>
          Welcome to the Project Page
        </h2>
      </div>
      <CreateProject />
    </div>
  );
}
