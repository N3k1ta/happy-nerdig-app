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
    <main className="font-[Geist Thin] mt-4 mb-8 mx-auto max-w-7xl">
      <Navbar modulName={module.name} />
      <Suspense fallback={<Loading />}>
        <div className="container flex justify-around">
          {/* image */}
          <div className="container-left block">
            <div className="module-img mt-10 min-w-fit flex h-fit">
              <div className="image-module-holder">
                <img src={module.image_url_w} alt="" className="img px-2 h-2/3" />
              </div>
              <div className="image-module-holder">
                <img src={module.image_url_bk} alt="" className="img px-2 h-2/3" />
              </div>
            </div>
            <div className="shops-container grid grid-cols-2 gap-2 p-4 bg-green-500 max-w-md">
              <div className=" ">
                {module.shops &&
                  Object.keys(module.shops).map((key) => {
                    const shop = module.shops[key];
                    return (
                      <Link
                        href={shop.url}
                        key={shop.id}
                        className="shop-container flex flex-col items-center">
                        <img
                          src={shop.image}
                          alt={shop.name}
                          className="shop-logo mb-2 w-auto h-24"
                        />
                        <span className="shop-name text-center">{shop.name}</span>
                        <span className="shop-area text-center text-sm text-gray-500">
                          {shop.area}
                        </span>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* info page */}
          <div className="page-post inline-flex">
            <div className="discription">
              <div className="module-type text-center max-w-3xl text-4xl">
                {module.type}
              </div>
              {/* text */}
              <div className="text-discript p-7 max-w-2xl text-left">
                <div>{discrpt}</div>
              </div>
              <div className="tech-discript mt-8 mb-10 mx-10 max-w-sm">
                <h3 className="text-lg">Current Draw</h3>

                <span>{dim}</span>
                <br />
                <h3 className="text-lg">Dimensions</h3>
                <span>{cd}</span>

                <br />
                <h3 className="text-lg">Price</h3>
                <div className="price-container">
                  <span>{module.price}$</span>
                </div>
                {/* video */}
                <div className="video-container my-10">
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
                    <div className="video2">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Shops */}

      </Suspense>
    </main>
  );
}
