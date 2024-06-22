
export default function nl2br(text) {
  return (
    text.replace(/\n/g, '<br>')
  )
}
