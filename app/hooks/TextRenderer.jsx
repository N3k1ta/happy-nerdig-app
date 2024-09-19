
export default function TextRenderer(text) {
  const paragraphs = text.split('\n').map((paragraph, index) => (
    <p key={index} className="text-indent mb-2">{paragraph}</p>
  ))

  return (
    <div>{paragraphs}</div>
  )
}
