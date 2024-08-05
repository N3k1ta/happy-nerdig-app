import Link from "next/link"
import "./ModulesCards.css"
import { getModulesType } from "../hooks/getModulesType"
import { Suspense } from "react"
import Loading from "../loading"



export default async function ModulesCards() {

  // const vca_modules = await getModulesType('vca')
  // const effect_modules = await getModulesType('effect')
  // const filter_modules = await getModulesType('filter')
  // const utilities_modules = await getModulesType('utilities')


  const [vca_modules, effect_modules, filter_modules, utilities_modules] = await Promise.all([
    getModulesType('vca'),
    getModulesType('effect'),
    getModulesType('filter'),
    getModulesType('utilities'),
  ]);


  // sorting modules
  const sortedModules = (modules) => modules.sort((a, b) => (a.row_list_order - b.row_list_order))

  const vca_modules_sorted = sortedModules(vca_modules)
  const effect_modules_sorted = sortedModules(effect_modules)
  const filter_modules_sorted = sortedModules(filter_modules)
  const utilities_modules_sorted = sortedModules(utilities_modules)

  return (
    <>
      <Suspense fallback={<Loading />}>
        <main className="card-container">
          <h1 className="modles-class">VCA / MIXER</h1>
          <div className="card-container-row">
            {vca_modules_sorted.map((vca_modul) => (
              <div className="card" key={vca_modul.id}>
                <Link href={`/modules/${vca_modul.id}`}>
                  <div className="card-content ">
                    <h3 className="module-name">{vca_modul.name}</h3>
                    <img src={vca_modul.image_url_w} />
                  </div>
                </Link>
              </div>))}
          </div >
          <h1 className="modles-class">EFFECT</h1>
          <div className="card-container-row">
            {effect_modules_sorted.map((effect_modul) => (
              <div className="card" key={effect_modul.id}>
                <Link href={`/modules/${effect_modul.id}`}>
                  <div className="card-content ">
                    <h3 className="module-name">{effect_modul.name}</h3>
                    <img src={effect_modul.image_url_w} />
                  </div>
                </Link>
              </div>))}
          </div >
          <h1 className="modles-class">FILTER</h1>
          <div className="card-container-row">
            {filter_modules_sorted.map((filter_modul) => (
              <div className="card" key={filter_modul.id}>
                <Link href={`/modules/${filter_modul.id}`}>
                  <div className="card-content ">
                    <h3 className="module-name">{filter_modul.name}</h3>
                    <img src={filter_modul.image_url_w} />
                  </div>
                </Link>
              </div>))}
          </div >
          <h1 className="modles-class">UTILITIES</h1>
          <div className="card-container-row">
            {utilities_modules_sorted.map((util_modul) => (
              <div className="card" key={util_modul.id}>
                <Link href={`/modules/${util_modul.id}`}>
                  <div className="card-content ">
                    <h3 className="module-name">{util_modul.name}</h3>
                    <img src={util_modul.image_url_w} />
                  </div>
                </Link>
              </div>))}
          </div >
        </main>
      </Suspense>
    </>
  )
}
