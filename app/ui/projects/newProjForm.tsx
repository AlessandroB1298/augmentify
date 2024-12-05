"use client";
//! should add validation for these fields before you can create a proj
import { useState } from "react";
import { UploadButton } from "@/app/lib/utils/uploadthing";

const NewProjForm = () => {
  const [projectType, setProjectType] = useState<string>("");
  const [projName, setProjName] = useState<string>("");
  const [projDescription, setProjDescription] = useState<string>("");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setProjectType(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className=" px-2 justify-center items-center">
      <div className="flex-grid">
        <h1 className="text-[64px] text-white font-bold mb-4">
          Create a new Augmentify Project!
        </h1>
        <div className="w-full h-[70vh] bg-white rounded-lg">
          <form className="text-black ">
            <label htmlFor="Project">Project Name</label>
            <input
              className="text-[16px] bg-pink-100 m-5 rounded-lg w-1/4 h-[2rem]"
              type="text"
              name="Project"
              placeholder="Project Name"
              value={projName}
              onChange={(e) => {
                setProjName(e.target.value);
              }}
              required
            />
            <label htmlFor="desc">Description</label>
            <input
              type="text"
              className="text-[16px]rounded- bg-pink-100 m-5 rounded-lg w-1/4 h-[2rem]"
              name="desc"
              placeholder="Description"
              value={projDescription}
              onChange={(e) => {
                setProjDescription(e.target.value);
              }}
              maxLength={20}
              required
            />
          </form>
          <label htmlFor="proj-type">Project Type</label>
          <select
            className="text-[16px] rounded-lg bg-pink-100 m-5 w-1/4 h-[2rem]"
            onChange={handleSelect}
            value={projectType}
          >
            <option>Make Selection</option>
            <option>Object Detection</option>
            <option>Image Classification</option>
            <option>Other</option>
          </select>
          <div className="flex justify-center mt-[43vh] gap-10">
            <div>
              <UploadButton
                className="ut-button:bg-rose-300 ut-button:ut-readying:bg-red-500/50 ut-button:hover:bg-red-400"
                endpoint={"imageUploader"}
              />
            </div>
            <div>
              <button
                type={"submit"}
                className={
                  "bg-red-400 rounded-lg p-2 hover:bg-rose-500 text-white"
                }
                onSubmit={handleOnSubmit}
              >
                Add New Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewProjForm;
