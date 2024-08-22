import TextRenderer from "@/app/hooks/TextRenderer";
import Navbar from "@/app/components/Navbar";
import ilRenderer from "@/app/hooks/ilRenderer";
import Loading from "@/app/loading";

import { getModule } from "@/app/hooks/getModule";
import { Suspense } from "react";
import Link from "next/link";

export default async function ModulePage({ params }) {
  const module = await getModule(params.id);

  const discrpt = TextRenderer(module.discript);
  const dim = ilRenderer(module.tech_dim);
  const cd = ilRenderer(module.tech_cd);

  return (
    <main className=" mt-4 mb-8 mx-auto max-w-7xl font-geist-thin">
      <Navbar modulName={module.name} />
      <Suspense fallback={<Loading />}>
        <div className="container flex ">

          {/* image */}
          <div className="w-2/3 mt-12">
            <div className={`mt-12 ${module.type_view === '1u' ? 'flex-row w-96 h-96' : 'flex  h-96'} justify-center `}>
              <div className="flex justify-center ">
                <img src={module.image_url_w} alt={module.name} className="mx-4 " />
              </div>
              {module.image_url_bk &&
                <div className="flex justify-center" >
                  <img src={module.image_url_bk} alt={module.name} className="mx-4" />
                </div>}

              {/* Shops */}
            </div>
            <div className="h-48"> </div>
            <span className="text-xl flex justify-center items-center mt-10  font-bold text-gray-400 ">Where to buy:</span>
            <div className="shops-container flex flex-wrap justify-center gap-4 p-4 mt-4">
              {module.shops &&
                Object.keys(module.shops).map((key) => {
                  const shop = module.shops[key];
                  return (
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
                  );
                })}
            </div>

          </div>
          {/* info page */}
          <div className="page-post flex  ">
            <div className="discription">
              <div className="module-type text-center max-w-3xl text-4xl mt-10">
                {module.type}
              </div>
              {/* text */}
              <div className="text-discript p-7 max-w-2xl text-left ">
                <div>{discrpt}</div>
              </div>
              <div className="tech-discript mt-8 mb-10 mx-10 max-w-sm">
                <h3 className="text-lg">Current Draw</h3>
                <span>{dim}</span>
                <br />
                <h3 className="text-lg">Dimensions</h3>
                <span>{cd}</span>

                <br />
                {/* <h3 className="text-lg">Price</h3>
                <div className="price-container">
                  <span>{module.price}$</span>
                </div> */}
                {/* video */}
                <div className="flex justify-start">
                  <div className="video-container  my-10">
                    {module.video &&
                      Object.keys(module.video).map((key) => {
                        const video = module.video[key];
                        return (
                          <iframe
                            key={video.id}
                            width="560"
                            height="315"
                            src={video.url}
                          ></iframe>
                        )
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Shops */}

      </Suspense>
    </main >
  );
}
