import { CreateNewProject } from "@/app/ui/components/buttons";
import { getData } from "@/app/api/actions/projectActions";
import Link from "next/link";
import { Suspense } from "react";
import { Sparkles, Loader2 } from "lucide-react";

async function Projects() {
  const projects = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"> {/* To change the width of the project cards change grid-cols */}
      {projects.map((p, index) => (
        <Link
          key={index + 1}
          href={`/dashboard/projects/${p.id}`}
          className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="absolute inset-0  opacity-75 group-hover:opacity-90 transition-opacity duration-300" />
          <img
            alt="project image"
            src={p.imageUrls[0] || "/placeholder.svg"}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="text-white text-xl font-bold mb-2 group-hover:mb-4 transition-all duration-300">
              {p.name}
            </h3>
            <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
              <Sparkles className="text-white w-6 h-6 inline-block mr-2" />
              <span className="text-white text-xs font-extrabold">{p.project_type}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white p-8 rounded-xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500">
            Awesome Projects
          </h1>
          <CreateNewProject />
        </div>
        <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-8 rounded-3xl shadow-lg">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-64">
                <Loader2 className="w-12 h-12 text-rose-400 animate-spin" />
              </div>
            }
          >
            <Projects />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
