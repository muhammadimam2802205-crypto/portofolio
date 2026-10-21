import { motion, useScroll, useTransform } from 'motion/react'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons'

const socials = [
  { icon: GithubIcon,    href: 'https://github.com/username',    label: 'GitHub' },
  { icon: LinkedinIcon,  href: 'https://linkedin.com/in/user',   label: 'LinkedIn' },
  { icon: InstagramIcon, href: 'https://instagram.com/username', label: 'Instagram' },
  { icon: Mail,          href: 'mailto:imam@example.com',        label: 'Email' },
]

export default function SocialSidebar() {
  const { scrollY } = useScroll()
  
  const scrollOpacity = useTransform(scrollY, [0, 250], [1, 0])
  const pointerEvents = useTransform(scrollY, (v) => (v > 250 ? 'none' : 'auto'))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed z-40 right-4 md:right-auto md:left-6 lg:left-8 top-1/2 -translate-y-1/2"
    >
      <motion.aside
        style={{ opacity: scrollOpacity, pointerEvents }}
        className="flex flex-col items-center gap-3 md:gap-4"
      >
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="p-2.5 md:p-3 rounded-full border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-md text-white/50 hover:text-white hover:border-maroon-light hover:bg-maroon/20 transition-all duration-300"
          >
            <Icon size={18} strokeWidth={1.8} />
          </a>
        ))}
        <div className="w-px h-10 md:h-16 bg-gradient-to-b from-white/20 to-transparent mt-1" />
      </motion.aside>
    </motion.div>
  )
}