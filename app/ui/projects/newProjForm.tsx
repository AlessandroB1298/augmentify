"use client";

import { useState } from "react";
import { UploadButton } from "@/app/lib/utils/uploadthing";
import { addProject } from "@/app/api/actions/projectActions";
import { useRouter } from 'next/navigation'

const NewProjForm = () => {
  const [projectType, setProjectType] = useState<string>("");
  const [projName, setProjName] = useState<string>("");
  const [projDescription, setProjDescription] = useState<string>("");
  const [image, setImage] = useState<string[]>([]);
  const router = useRouter();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setProjectType(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      addProject(projName, projectType, projDescription, image);
      console.log("Project added successfully");
      router.push("/dashboard/projects");

    } catch (error) {
      console.log(error);
      alert("Error adding project");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create a new Augmentify Project!
        </h1>

        <form className="space-y-6" onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="Project" className="block text-sm font-medium text-gray-700">Project
              Name</label>
            <input
              id="Project"
              type="text"
              name="Project"
              placeholder="Project Name"
              value={projName}
              onChange={(e) => setProjName(e.target.value)}
              required
              className="mt-2 p-2 w-full bg-pink-100 rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description</label>
            <input
              id="desc"
              type="text"
              name="desc"
              placeholder="Description"
              value={projDescription}
              onChange={(e) => setProjDescription(e.target.value)}
              maxLength={100}
              required
              className="mt-2 p-2 w-full bg-pink-100 rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label htmlFor="proj-type" className="block text-sm font-medium text-gray-700">Project
              Type</label>
            <select
              id="proj-type"
              name="proj-type"
              onChange={handleSelect}
              value={projectType}
              className="mt-2 p-2 w-full bg-pink-100 rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Make Selection</option>
              <option value="Object Detection">Object Detection</option>
              <option value="Image Classification">Image Classification</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex justify-between gap-4 mt-4 p-0">
            <UploadButton
              className="w-full sm:w-auto ut-button:bg-rose-300 ut-button:ut-readying:bg-red-500/50 ut-button:hover:bg-red-400"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setImage(res.map((r) => r.url));
              }}
            />

            <button
              type="submit"
              className="sm:w-auto bg-red-400 h-[45px] text-white text-[16px]  p-4 rounded-lg py-0 hover:bg-rose-500 focus:outline-none"
            >
              Add New Project
            </button>
          </div>
        </form>

        {image.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {image.map((i, index) => (
              <div key={index + 1} className="w-24 h-24 rounded-lg">
                <img src={i} alt="Uploaded Image" className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

};

export default NewProjForm;
