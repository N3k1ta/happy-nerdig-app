import Link from "next/link"
import { getModules } from "@/app/hooks/getModules"
import "./ModulesCards.css"
import { getModulesType } from "../hooks/getModulesType"
import { Suspense } from "react"
import Loading from "../loading"



export default async function ModulesCards() {
  const modules = await getModules()
  const vca_moduls = await getModulesType('vca')
  const effect_moduls = await getModulesType('effect')
  const filter_modules = await getModulesType('filter')
  return (
    <>
      <Suspense fallback={<Loading />}>
        <main className="card-container">
          <h1>VCA / MIXER</h1>
          <div className="card-container-vca">
            {vca_moduls.map((vca_modul) => (
              <div className="card" key={vca_modul.id}>
                <Link href={`/modules/${vca_modul.id}`}>
                  <div className="card-content ">
                    <h3 className="module-name">{vca_modul.name}</h3>
                    <img src={vca_modul.image_url_w} />
                  </div>
                </Link>
              </div>))}
          </div >
          <h1>EFFECT</h1>
          <div className="card-container-effect">
            {effect_moduls.map((effect_modul) => (
              <div className="card" key={effect_modul.id}>
                <Link href={`/modules/${effect_modul.id}`}>
                  <div className="card-content ">
                    <h3 className="module-name">{effect_modul.name}</h3>
                    <img src={effect_modul.image_url_w} />
                  </div>
                </Link>
              </div>))}
          </div >
          <h1>FILTER</h1>
          <div className="card-container-effect">
            {filter_modules.map((filter_modul) => (
              <div className="card" key={filter_modul.id}>
                <Link href={`/modules/${filter_modul.id}`}>
                  <div className="card-content ">
                    <h3 className="module-name">{filter_modul.name}</h3>
                    <img src={filter_modul.image_url_w} />
                  </div>
                </Link>
              </div>))}
          </div >
        </main>
      </Suspense>
    </>
  )
}
{/* {modules.map((module) => (
          <div className="card" key={module.id}>
            <Link href={`/modules/${module.id}`}>
              <div className="card-content ">
                <h3 className="module-name">{module.name}</h3>
                <img src={module.image_url_w} />
              </div>
            </Link>
          </div>
        ))} */}