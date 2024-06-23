import { getModule } from "@/app/hooks/getModule"
//styles
import "./page.css"


export default async function ModulePage({ params }) {
  const module = await getModule(params.id)

  return (
    <main >

      <div className="logo-content" >
        <div className="module-logo">
          <h2>{module.name}</h2>
        </div>
      </div>
      <div className="main2">
        <div className="module-img">
          <img src={module.image_url_w} alt="" className="img" />
          <img src={module.image_url_bk} alt="" className="img" />
        </div>
        <div className="page-post">
          <div className="disc">
            <div className="module-type">
              {module.type}
            </div>
            <div className="text-discript">
              <p>{module.discript}</p>
            </div>
            <div className="tech-discript">
              <li>{module.tech_dim}</li>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
