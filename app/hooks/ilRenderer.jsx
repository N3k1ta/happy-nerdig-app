
export default function ilRenderer(text) {
   const li = text.split('\n').map((par, index) => (
    <li key={index}>{par}</li>
  ))

  return (
    <div>{li}</div>
  )
}
