
export default function TextRenderer(text) {
   const paragraphs = text.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ))

  return (
    <div>{paragraphs}</div>
  )
}
