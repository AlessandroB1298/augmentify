"use client";

import { useState } from "react";
import { UploadButton } from "@/app/lib/utils/uploadthing";
import { addProject } from "@/app/api/actions/projectActions";

const NewProjForm = () => {
  const [projectType, setProjectType] = useState<string>("");
  const [projName, setProjName] = useState<string>("");
  const [projDescription, setProjDescription] = useState<string>("");
  const [image, setImage] = useState<string[]>([]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setProjectType(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      addProject(projName, projectType, projDescription, image);
      console.log("Project added successfully");
    } catch (error) {
      console.log(error);
      alert("Error adding project");
    }
  };

  return (
    <div className="px-2 justify-center items-center">
      <div className="flex-grid">
        <h1 className="text-[64px] text-white font-bold mb-4">
          Create a new Augmentify Project!
        </h1>
        <div className="w-full h-[70vh] bg-white rounded-lg flex flex-col">
          <div className="flex-1 p-4">
            <form className="text-black" onSubmit={handleOnSubmit}>
              <div className="mb-4">
                <label htmlFor="Project">Project Name</label>
                <input
                  className="text-[16px] bg-pink-100 m-5 rounded-lg w-[30%] h-[2rem]"
                  type="text"
                  name="Project"
                  placeholder="Project Name"
                  value={projName}
                  onChange={(e) => {
                    setProjName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="desc">Description</label>
                <input
                  type="text"
                  className="text-[16px] bg-pink-100 m-5 rounded-lg w-[30%] h-[2rem] "
                  name="desc"
                  placeholder="Description"
                  value={projDescription}
                  onChange={(e) => {
                    setProjDescription(e.target.value);
                  }}
                  maxLength={20}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="proj-type">Project Type</label>
                <select
                  className="text-[16px] rounded-lg bg-pink-100 m-5 w-[30%] h-[2rem]"
                  onChange={handleSelect}
                  value={projectType}
                >
                  <option>Make Selection</option>
                  <option>Object Detection</option>
                  <option>Image Classification</option>
                  <option>Other</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-red-400 rounded-lg p-2 hover:bg-rose-500 text-white"
              >
                Add New Project
              </button>
            </form>

            {image.length > 0 && (
              <div className="flex flex-row p-2 mt-4 mx-4">
                {image.map((i, index) => (
                  <div key={index + 1} className="mr-2">
                    <img
                      src={i}
                      alt="this is an image"
                      className="object-cover w-[100px] h-[100px]"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center mb-6 gap-10">
            <div>
              <UploadButton
                className="ut-button:bg-rose-300 ut-button:ut-readying:bg-red-500/50 ut-button:hover:bg-red-400"
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  setImage(res.map((r) => r.url));
                }}
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjForm;
