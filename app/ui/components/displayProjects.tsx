"use client";

import {ProjectType} from "@/app/types/projectTypes";
import {getData} from "@/app/api/actions/projectActions";
import {useEffect, useState} from "react";

const DisplayProjects = () => {
    const [projects, setProjects] = useState<ProjectType[]>([]);

    const fetchProjects = async () => {
        const data = await getData();
        if (data) {
            setProjects(data);
        }
    };

    useEffect(() => {
        fetchProjects();
        return (): void => {
            console.log("Clean up func in use effect was called")
        }
    }, []);

    return (
        <div>
            {projects.length > 0 && (
                <div className={"flex flex-row"}>
                    {projects.map((p, index) => (
                        <div key={index + 1}
                             className={"border-2 border-solid border-black ml-5  mr-5 w-[250px] h-[250px] rounded-lg relative hover:shadow-lg hover:translate-y-3.5 transition duration-300"}>
                            <img
                                src={p.imageUrls[0]}
                                alt="Project Image"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 p-4 text-white z-10 flex-col justify-center items-center text-center ">
                                <p className={"text-3xl"}>{p.name}</p>
                                <p className={"text-2xl"}>{p.project_type}</p>
                                <p>{p.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default DisplayProjects;
