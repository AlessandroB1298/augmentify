import React from "react";
import { CreateNewProject } from "@/app/ui/components/buttons";
import { getData } from "@/app/api/actions/projectActions";
import Link from "next/link";
import { Suspense } from "react"
//when specifying the path in the Link component use a string literal but don't use the [id]

async function Projects() {
  const projects = await getData(); //projects is of ProjeactType[]

  return (
    <div>
      {projects.length > 0 && (
        <div>
          <div className={"flex flex-row"}>
            {projects.map((p, index) => (
              <div key={index + 1}
                className={"border-2 border-solid border-black ml-5  mr-5 w-[250px] h-[250px] rounded-lg relative hover:shadow-lg hover:translate-y-3.5 transition duration-300"}>
                <img
                  alt={"project images"}
                  src={p.imageUrls[0]}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <Link
                  href={`/dashboard/projects/${p.id}`}
                  className="absolute inset-0 bg-black bg-opacity-50 p-4 text-white z-10 flex-col justify-center items-center text-center "
                >
                  {p.name}
                </Link>

              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}


export default function Page() {
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
            {/* Suspense for loading ui, need to figure out how to get each item*/}
            <Suspense fallback={<div className="text-center justify-center">Loading...</div>}>
              <Projects />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
