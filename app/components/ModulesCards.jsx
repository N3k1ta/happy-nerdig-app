import Link from "next/link"
import { getModules } from "@/app/hooks/getModules"
import "./ModulesCards.css"



export default async function ModulesCards() {
  const modules = await getModules()

  return (
    <>
      <div className="card-container">
        <div></div>
        {modules.map((module) => (
          <div className="card" key={module.id}>
            <Link href={`/modules/${module.id}`}>
            <div className="card-content ">
              <h3 className="module-name">{module.name}</h3>
              <img src={module.image_url_w} />

              {/* <h2 >{module.type}</h2> */}
              {/* <p>{module.description}</p> */}
              {/* <p>{module.tech_dimensions}</p> */}
            </div>
            </Link>
          </div>
          
        ))}
    </div >
    </>
  )
}
