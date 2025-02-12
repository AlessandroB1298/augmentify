"use client";

import { getData } from "@/app/api/actions/projectActions";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import AreaChartPlot from "./ui/areaChart";
import BarChartPlot from "./ui/barChart";

type userData = {
  id?: string;
  name?: string;
  user_id?: string;
  project_type?: string;
  description?: string;
  imageUrls?: string[];
};

export function Dash() {
  const { user, isSignedIn } = useUser();
  const [data, setData] = useState<userData[]>([]);
  const [projectNum, setProjNum] = useState<number>();
  const [imageTotal, setImageTotal] = useState<number>();
  //trying to set the bar chart data with information from the projects

  const retreieveData = async () => {
    const projectData = await getData();
    if (projectData) {
      setData(projectData);
    }
  };

  //same here, look at react query or something like that
  useEffect(() => {
    retreieveData();
  }, []);

  //find a better way to do this
  useEffect(() => {
    setProjNum(data.length);

    let imageCounter = 0;

    data.forEach((item) => {
      item?.imageUrls?.forEach(() => {
        imageCounter++;
      });
    });
    setImageTotal(imageCounter);
  }, [data]);

  return (
    <div className="min-h-screen bg-rose-100 p-4 md:p-6 lg:p-8 rounded-xl shadow-xl">
      {isSignedIn && (
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500 mb-6">
            {user?.fullName}{"'s"} Dashboard
          </h1>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-md transform duration-75 ease-in hover:bg-gray-200 hover:translate-y-1 hover:cursor-pointer">
              <h3 className="text-sm font-medium text-gray-500">
                Number of Projects
              </h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {projectNum}
              </p>
              <p className="mt-1 text-sm font-medium text-rose-400">
                {user?.fullName}{"'s"} Project History
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md transform duration-75 ease-in hover:bg-gray-200 hover:translate-y-1 hover:cursor-pointer">
              <h3 className="text-sm font-medium text-gray-500">
                Recent Project
              </h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {data[0]?.name}
              </p>
              <p className="mt-1 text-sm font-medium text-rose-400">
                {data?.[0]?.project_type}
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md transform duration-75 ease-in hover:bg-gray-200 hover:translate-y-1 hover:cursor-pointer">
              <h3 className="text-sm font-medium text-gray-500">
                Total Images
              </h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {imageTotal}
              </p>
              <p className="mt-1 text-sm font-medium text-rose-400">
                Spanning {projectNum} Projects
              </p>
            </div>
          </section>

          {/* Filler code for charts */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            <div className="bg-white rounded-xl shadow-md p-4 h-80">
              <h2 className="text-lg font-semibold mb-4">Chart 1</h2>
              <div className="h-64 bg-gray-50 rounded">
                <AreaChartPlot />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 h-80">
              <h2 className="text-lg font-semibold mb-4">Chart 2</h2>
              <div className="h-64 bg-gray-50 rounded">
                <BarChartPlot />
              </div>
            </div>
          </section>

          {/* Not sure what to put here yet */}

          <section className="grid grid-cols-1 lg:grid-cols-1 ">
            <div className="bg-white rounded-xl shadow-md p-4 h-80">
              <h2 className="text-lg font-semibold mb-4">AI Summary</h2>
              <div className="h-64 ">
                <p className="text-rose-300 ">Nothing For Now</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
