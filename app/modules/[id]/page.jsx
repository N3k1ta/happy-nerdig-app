import { Suspense } from "react";
import Link from "next/link";
///Components
import TextRenderer from "@/app/hooks/TextRenderer";
import Navbar from "@/app/components/Navbar";
import ilRenderer from "@/app/hooks/ilRenderer";
import Loading from "@/app/loading";
import VideoPage from "@/app/components/VideoPage";
//Hooks
import { getModule } from "@/app/hooks/getModule";


export default async function ModulePage({ params }) {
  const module = await getModule(params.id);

  const discrpt = TextRenderer(module.discript);
  const dim = ilRenderer(module.tech_dim);
  const cd = ilRenderer(module.tech_cd);

  return (
    <main className="mt-4 mb-8 mx-auto max-w-7xl font-geist-thin">
      <Navbar modulName={module.name} />
      <Suspense fallback={<Loading />}>
        <div className="container flex mt-4">
          {/* Image Section */}
          <div className="w-2/3 mt-12">
            <div className={`mt-12 ${module.type_view === '1u' ? 'flex-row w-96 h-96' : 'flex h-96'} justify-center`}>
              <img src={module.image_url_w} alt={module.name} className="mx-4" />
              {module.image_url_bk && (
                <img src={module.image_url_bk} alt={module.name} className="mx-4" />
              )}
            </div>

            {/* Technical description */}
            <div className="flex justify-start mt-16">
              <div className="font-geist-thin tech-discript mt-10 mb-2 mx-10 ">
                <h3 className="text-lg">Current Draw</h3>
                <span>{dim}</span>
                <br />
                <h3 className="text-lg">Dimensions</h3>
                <span>{cd}</span>
              </div>
            </div>

            {/* Shops Section */}
            <span className="text-xl flex justify-center items-center mt-16 font-bold text-gray-400">Where to buy:</span>
            <div className="shops-container flex flex-wrap justify-center gap-4 p-4 mt-4">
              {module.shops &&
                Object.values(module.shops).map((shop) => (
                  <Link
                    href={shop.url}
                    key={shop.id}
                    target="_blank"
                    className="shop-container flex flex-col group items-center"
                  >
                    <img
                      src={shop.image}
                      alt={shop.name}
                      className="shop-logo mb-2 w-auto h-24 sm:h-12 md:h-16 lg:h-20 max-w-[120px] object-contain"
                    />
                    <span className="shop-name text-center">{shop.name}</span>
                    <span className="shop-area text-center text-sm text-gray-400 group-hover:text-gray-300">
                      {shop.name}
                    </span>
                  </Link>
                ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="flex ">
            <div className="ml-4">
              <div className="module-type text-center max-w-3xl text-4xl mt-10">{module.type}</div>
              <div className="font-geist-thin text-discript p-7 max-w-2xl text-left">
                <div>{discrpt}</div>
              </div>



              {/* Video Section */}
              <div className="mt-16 ">
                <VideoPage module={module} />
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </main>
  );
}
