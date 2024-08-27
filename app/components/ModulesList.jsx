import Link from "next/link";
import { getModules } from "../hooks/getModules";

export default async function ModulesList() {
  const modules = await getModules();
  const sortModules = [...modules].sort((a, b) => a.list_order - b.list_order);

  return (
    <>
      <div className="min-w-max  pb-5  grid grid-flow-col grid-rows-6 sm:grid-rows-6 ">
        {sortModules.map((module) => (
          <div className=" font-geist-thin mb-1 mr-6 text-base text-left text-gray-300 hover:text-gray-500"
            key={module.id}
          >
            <Link href={`/modules/${module.id}`}>{module.name}</Link>
          </div>
        ))}
      </div>
      <div className="border-b border-[#D1D3D6] sm:w-[960px] lg:w-[1024px]  max-w-7xl"></div>
    </>
  );
}
