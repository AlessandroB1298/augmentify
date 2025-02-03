import { Loader2 } from "lucide-react";
import { Suspense } from "react";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }> // Note: URL params are always strings
}) {
  const { id } = await params;

  if(id != null){
    console.log("id was successfully passed down")
  }


  return <div className="w-full h-full flex justify-center items-center">
    <div className="flex flex-row justify-center w-[100vw]">
    <Suspense
            fallback={
              <div className="flex justify-center items-center h-64">
                <Loader2 className="w-12 h-12 text-rose-400 animate-spin" />
              </div>
            }
          >
          </Suspense>
    </div>
  </div>

}
