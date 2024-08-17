import Link from "next/link";
import { getModules } from "../hooks/getModules";

export default async function ModulesList() {
  const modules = await getModules();
  const sortModules = [...modules].sort((a, b) => a.list_order - b.list_order);

  return (
    <>
      <div className="min-w-max max-w-7xl mx-auto pb-5 border-b border-white grid grid-flow-col grid-rows-6">
        {sortModules.map((module) => (
          <div
            className="pr-1 pb-1 text-base text-left text-gray-300 hover:text-gray-500"
            key={module.id}
          >
            <Link href={`/modules/${module.id}`}>{module.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
