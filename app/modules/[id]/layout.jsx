import Footer from "@/app/components/Footer";

export default function layout({ children }) {
  return (
    <>
      <div className="w-[1024px] mx-auto">
        {children}
      </div>

    </>
  )
}
