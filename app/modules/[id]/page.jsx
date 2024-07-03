import TextRenderer from "@/app/hooks/TextRenderer"
import Navbar from "@/app/components/Navbar"
import { getModule } from "@/app/hooks/getModule"
//styles
import "./page.css"
import ilRenderer from "@/app/hooks/ilRenderer"
import { Suspense } from "react"
import Loading from "@/app/loading"


export default async function ModulePage({ params }) {
  const module = await getModule(params.id)
  const discrpt = TextRenderer(module.discript)
  const dim = ilRenderer(module.tech_dim)
  const cd = ilRenderer(module.tech_cd)


  return (
    <main >
      <Navbar modulName={module.name} />
      <Suspense fallback={<Loading />}>
        <div className="container">
          <div className="module-img">
            <div>
              <img src={module.image_url_w} alt="" className="img" />
            </div>
            <div>
              <img src={module.image_url_bk} alt="" className="img" />
            </div>
          </div>
          <div className="page-post">
            <div className="disc">
              <div className="module-type">
                {module.type}
              </div>
              {/* text */}
              <div className="text-discript">
                <div>{discrpt}</div>
              </div>
              <div className="tech-discript">
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
                <div className="video-container">
                  <div className="video1">
                    <iframe
                      width="560"
                      height="315"
                      src={module.videolink1}
                    >
                    </iframe>
                  </div>
                  <div className="video2">
                    <iframe
                      width="560"
                      height="315"
                      src={module.videolink2}
                    >
                    </iframe>
                  </div>
                  <div className="video3">
                    <iframe
                      width="560"
                      height="315"
                      src={module.videolink3}
                    >
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </main>
  )
}
