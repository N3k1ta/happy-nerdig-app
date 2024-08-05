import Link from "next/link"
import { getModules } from "../hooks/getModules"






export default async function AdminTab() {

  const modules = await getModules()


  return (
    <>
      <div className="admin-grid  border grid grid-cols-12 gap-2" >
        {modules.map((module) => (
          <div className=" gap-2 border" key={module.id}>
            <Link href={`/modules/${module.id}`}>{module.name}</Link>
          </div>


        ))}
      </div>
    </>
  )
}
