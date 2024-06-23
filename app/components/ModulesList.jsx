import Link from "next/link";
import "./ModulesList.css"
import { getModules } from "../hooks/getModules";


export default async function ModulesList() {

  const modules = await getModules()
  const sortModules = [...modules].sort((a, b) => (a.list_order - b.list_order))

  return (
    <div className="grid" key={module.id}>
      {sortModules.map((module) => (

        <Link href={`/modules/${module.id}`}>{module.name}</Link>
      )).sort(module.list_order)}

    </div>
  )
}