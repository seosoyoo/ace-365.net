interface FooterColumnProps {
  title: string
  links: { name: string; href: string }[]
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-white/90 hover:text-white transition-colors">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
