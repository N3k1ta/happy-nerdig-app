import Link from "next/link"
import { getModuls } from "@/app/hooks/getModules"
import "./ModulesCards.css"
// import { cookies } from 'next/headers'
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
// async function getModuls() {
//   const superbase = createServerComponentClient({ cookies })

//   const { data, error } = await superbase.from('happy-nerding-modules').select()

//   if (error) {
//     console.log(error.message)
//   }
//   return data
// }


export default async function ModulesCards() {
  const modules = await getModuls()

  return (
    <>

      <div className="card-container">
        <div></div>
        {modules.map((module) => (
          <div className="card">
            <div key={module.id} className="card-content ">

              <h3 className="module-name">{module.name}</h3>
              <img src={module.image_url} />

              {/* <h2 >{module.type}</h2> */}
              {/* <p>{module.description}</p> */}
              {/* <p>{module.tech_dimensions}</p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
