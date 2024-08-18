import Link from "next/link";
import { getModules } from "../hooks/getModules";

export default async function ModulesList() {
  const modules = await getModules();
  const sortModules = [...modules].sort((a, b) => a.list_order - b.list_order);

  return (
    <>
      <div className="min-w-max mx-auto pb-5 border-b border-white grid grid-flow-col grid-rows-12 sm:grid-rows-6 ">
        {sortModules.map((module) => (
          <div
            
            key={module.id}
          >
            <Link className=" font-geist-mono mr-1 mb-1 text-base text-left text-gray-300 hover:text-gray-500" href={`/modules/${module.id}`}>{module.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
