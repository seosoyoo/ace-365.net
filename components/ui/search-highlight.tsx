interface SearchHighlightProps {
  text: string
  query: string
}

export function SearchHighlight({ text, query }: SearchHighlightProps) {
  if (!query.trim()) {
    return <>{text}</>
  }

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
  const parts = text.split(regex)

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span key={i} className="bg-yellow-500/30 text-white font-medium">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}
