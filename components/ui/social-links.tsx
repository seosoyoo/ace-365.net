import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a href="#" className="text-white/90 hover:text-white transition-colors">
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Facebook</span>
      </a>
      <a href="#" className="text-white/90 hover:text-white transition-colors">
        <Twitter className="h-5 w-5" />
        <span className="sr-only">Twitter</span>
      </a>
      <a href="#" className="text-white/90 hover:text-white transition-colors">
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </a>
      <a href="#" className="text-white/90 hover:text-white transition-colors">
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href="#" className="text-white/90 hover:text-white transition-colors">
        <Github className="h-5 w-5" />
        <span className="sr-only">GitHub</span>
      </a>
    </div>
  )
}
