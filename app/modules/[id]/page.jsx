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
    <main className=" mt-4 mb-8 mx-auto max-w-7xl font-geist-thin  w-fit">
      <Navbar modulName={module.name} />
      <Suspense fallback={<Loading />}>
        <div className="container flex ">

          {/* image */}
          <div className="container-left block w-2/3 ">
            <div className="module-img mt-10 flex justify-center">
              <div className="image-module-holder flex justify-center">
                <img src={module.image_url_w} alt="" className="img m-2 w-2/4 " />
              </div>
              {module.image_url_bk &&
                <div className="image-module-holder flex justify-center ">
                  <img src={module.image_url_bk} alt="" className="img m-2  w-2/4 " />
                </div>}
              {/* Shops */}
            </div>
            <span className="text-xl  flex justify-center items-center mt-10 font-bold text-gray-400 ">Where to buy:</span>
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
                    {module.videolink1 && (
                      <div className="video1">
                        <iframe
                          width="560"
                          height="315"
                          src={module.videolink1}
                        ></iframe>
                      </div>
                    )}
                    {module.videolink2 && (
                      <div className="video2 mt-6">
                        <iframe
                          width="560"
                          height="315"
                          src={module.videolink2}
                        ></iframe>
                      </div>
                    )}
                    {module.videolink3 && (
                      <div className="video3">
                        <iframe
                          width="560"
                          height="315"
                          src={module.videolink3}
                        ></iframe>
                      </div>
                    )}
                  </div></div>

              </div>
            </div>
          </div>
        </div>
        {/* Shops */}

      </Suspense>
    </main >
  );
}
