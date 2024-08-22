import Link from "next/link";
import { getModulesType } from "../hooks/getModulesType";
import { Suspense } from "react";
import Loading from "../loading";

export default async function ModulesCards() {
  const [vca_modules, effect_modules, filter_modules, utilities_modules, envelope_modules, u1_modules, vco_modules, dotcom_modules] = await Promise.all([
    getModulesType('vca'),
    getModulesType('effect'),
    getModulesType('filter'),
    getModulesType('utilities'),
    getModulesType('env'),
    getModulesType('1u'),
    getModulesType('vco'),
    getModulesType('dotcom')
  ]);

  // sorting modules
  const sortedModules = (modules) => modules.sort((a, b) => (a.row_list_order - b.row_list_order));

  const vca_modules_sorted = sortedModules(vca_modules);
  const effect_modules_sorted = sortedModules(effect_modules);
  const filter_modules_sorted = sortedModules(filter_modules);
  const utilities_modules_sorted = sortedModules(utilities_modules);
  const envelope_modules_sorted = sortedModules(envelope_modules);
  const u1_modules_sorted = sortedModules(u1_modules);
  const vco_modules_sorted = sortedModules(vco_modules);
  const dotcom_modules_sorted = sortedModules(dotcom_modules);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <main className="relative   pb-5 flex flex-wrap">
          {/* VCA / MIXER Section */}
          <div className="main-container-row">
            <h1 className="text-2xl text-gray-300">VCA / MIXER</h1>
            <div className="flex flex-wrap max-w-fit my-5 m-3">
              {vca_modules_sorted.map((vca_modul) => (
                <div className="max-w-sm inline-grid transition-transform cursor-pointer" key={vca_modul.id}>
                  <Link href={`/modules/${vca_modul.id}`}>
                    <div className="my-4 mx-2 text-sm rounded-md py-3 px-4">
                      <h3 className="text-sm pb-1">{vca_modul.name}</h3>
                      <img className="h-96 sm:h48" src={vca_modul.image_url_w} />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* EFFECT Section */}
          <div className="main-container-row">
            <h1 className="text-2xl text-gray-300">EFFECT</h1>
            <div className="flex flex-wrap max-w-fit my-5 m-3">
              {effect_modules_sorted.map((effect_modul) => (
                <div className="max-w-sm inline-grid transition-transform cursor-pointer" key={effect_modul.id}>
                  <Link href={`/modules/${effect_modul.id}`}>
                    <div className="my-4 mx-2 text-sm rounded-md py-3 px-4">
                      <h3 className="text-sm pb-1">{effect_modul.name}</h3>
                      <img className="h-96 sm:h48" src={effect_modul.image_url_w} />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* FILTER Section */}
          <div className="main-container-row">
            <h1 className="text-2xl text-gray-300">FILTER</h1>
            <div className="flex flex-wrap max-w-fit my-5 m-3">
              {filter_modules_sorted.map((filter_modul) => (
                <div className="max-w-sm inline-grid transition-transform cursor-pointer" key={filter_modul.id}>
                  <Link href={`/modules/${filter_modul.id}`}>
                    <div className="my-4 mx-2 text-sm rounded-md py-3 px-4">
                      <h3 className="text-sm pb-1">{filter_modul.name}</h3>
                      <img className="h-96 sm:h48" src={filter_modul.image_url_w} />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* UTILITIES Section */}
          <div className="main-container-row">
            <h1 className="text-2xl text-gray-300">UTILITIES</h1>
            <div className="flex flex-wrap max-w-fit my-5 m-3">
              {utilities_modules_sorted.map((util_modul) => (
                <div className="max-w-sm inline-grid transition-transform cursor-pointer" key={util_modul.id}>
                  <Link href={`/modules/${util_modul.id}`}>
                    <div className="my-4 mx-2 text-sm rounded-md py-3 px-4">
                      <h3 className="text-sm pb-1">{util_modul.name}</h3>
                      <img className="h-96 sm:h48" src={util_modul.image_url_w} />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* ENVELOPE Section */}
          <div className="main-container-row mx-10">
            <h1 className="text-2xl text-gray-300">ENVELOPE</h1>
            <div className="flex flex-wrap max-w-fit my-5 m-3">
              {envelope_modules_sorted.map((env_modul) => (
                <div className="max-w-sm inline-grid transition-transform cursor-pointer" key={env_modul.id}>
                  <Link href={`/modules/${env_modul.id}`}>
                    <div className="my-4 mx-2 text-sm rounded-md py-3 px-4">
                      <h3 className="text-sm pb-1">{env_modul.name}</h3>
                      <img className="h-96 sm:h48" src={env_modul.image_url_w} />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* VCO Section */}
          <div className="main-container-row mx-10">
            <h1 className="text-2xl text-gray-300">VCO</h1>
            <div className="flex flex-wrap max-w-fit my-5 m-3">
              {vco_modules_sorted.map((vco_modul) => (
                <div className="max-w-sm inline-grid transition-transform cursor-pointer" key={vco_modul.id}>
                  <Link href={`/modules/${vco_modul.id}`}>
                    <div className="my-4 mx-2 text-sm rounded-md py-3 px-4">
                      <h3 className="text-sm pb-1">{vco_modul.name}</h3>
                      <img className="h-96 sm:h48" src={vco_modul.image_url_w} />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* 1U Section */}
          <div className="flex-wrap">

            <div className="main-container-row">
              <h1 className="text-2xl text-gray-300">1U</h1>
              <div className="flex flex-wrap max-w-fit my-5 m-3">
                {u1_modules_sorted.map((u1_modul) => (
                  <div className="max-w-sm inline-grid transition-transform cursor-pointer" key={u1_modul.id}>
                    <Link href={`/modules/${u1_modul.id}`}>
                      <div className="my-4 mx-2 text-sm rounded-md py-3 px-4">
                        <h3 className="text-sm pb-1">{u1_modul.name}</h3>
                        <img className="h-auto" src={u1_modul.image_url_w} />
                      </div>
                    </Link>

                  </div>
                ))}
              </div>
            </div>

            {/* DOTCOM Section */}
            <div className="main-container-row">
              <h1 className="text-2xl text-gray-300">DOTCOM</h1>
              <div className="flex flex-wrap max-w-fit my-5 m-3">
                {dotcom_modules_sorted.map((dotcom_modul) => (
                  <div className="max-w-sm inline-grid transition-transform cursor-pointer" key={dotcom_modul.id}>
                    <Link href={`/modules/${dotcom_modul.id}`}>
                      <div className="my-4 mx-2 text-sm rounded-md py-3 px-4">
                        <h3 className="text-sm pb-1">{dotcom_modul.name}</h3>
                        <img className="h-96" src={dotcom_modul.image_url_w} />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </Suspense>
    </>
  );
}
