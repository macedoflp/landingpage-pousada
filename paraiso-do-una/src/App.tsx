import { useRef, useState, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Coffee,
  Flame,
  Heart,
  House,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  PawPrint,
  Phone,
  Snowflake,
  Star,
  Trees,
  Users,
  Waves,
  Wifi,
  X,
  type LucideIcon,
} from 'lucide-react'

const whatsappUrl =
  'https://wa.me/5598991003860?text=Olá!%20Gostaria%20de%20consultar%20disponibilidade%20na%20Pousada%20Paraíso%20do%20Una.'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#chales', label: 'Chalés' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#reservas', label: 'Reservas' },
]

const photos = {
  varanda: '/imgs/IMG_8339.jpg',
  quarto: '/imgs/IMG_8389.jpg',
  redes: '/imgs/IMG_8626.jpg',
  rio: '/imgs/IMG_8822.jpg',
  chale: '/imgs/IMG_8850.jpg',
  descanso: '/imgs/IMG_8854.jpg',
}

type Experience = {
  icon: LucideIcon
  title: string
  text: string
}

const experiences: Experience[] = [
  {
    icon: Waves,
    title: 'Banho de rio',
    text: 'Acesso reservado ao Rio Una para entrar na água no seu ritmo.',
  },
  {
    icon: Trees,
    title: 'Mata ao redor',
    text: 'O chalé fica envolvido pelo verde, com sombra, silêncio e brisa.',
  },
  {
    icon: House,
    title: 'Chalé completo',
    text: 'Quarto, varanda, cozinha equipada e estrutura para dias leves.',
  },
  {
    icon: Flame,
    title: 'Churrasco e convivência',
    text: 'Área térrea para reunir família, amigos e refeições sem pressa.',
  },
  {
    icon: Users,
    title: 'Clima familiar',
    text: 'Um refúgio acolhedor para casais, famílias e pequenos grupos.',
  },
  {
    icon: PawPrint,
    title: 'Pet friendly',
    text: 'Seu pet também pode aproveitar a viagem junto com você.',
  },
]

const chaletCards = [
  {
    image: photos.chale,
    label: 'Chalé na mata',
    title: 'Casa de madeira elevada',
    text: 'Madeira, varanda e janelas amplas criam uma estadia íntima no meio da natureza.',
  },
  {
    image: photos.quarto,
    label: 'Interior acolhedor',
    title: 'Quarto com vista verde',
    text: 'Ar-condicionado, cama confortável, Wi-Fi e clima perfeito para descansar.',
  },
  {
    image: photos.redes,
    label: 'Área térrea',
    title: 'Redes e convivência',
    text: 'Cozinha, geladeira, fogão, utensílios e espaço para churrasco embaixo do chalé.',
  },
]

const gallery = [
  { image: photos.chale, title: 'Chalé entre árvores' },
  { image: photos.rio, title: 'Acesso ao Rio Una' },
  { image: photos.quarto, title: 'Quarto com varanda' },
  { image: photos.redes, title: 'Redes para descansar' },
  { image: photos.varanda, title: 'Varanda privativa' },
  { image: photos.descanso, title: 'Área externa coberta' },
]

const testimonials = [
  {
    quote: 'Lugar perfeito para descansar com a família.',
    author: 'Marina S.',
    context: 'fim de semana em Morros',
  },
  {
    quote: 'Contato incrível com a natureza.',
    author: 'Paulo R.',
    context: 'viagem a dois',
  },
  {
    quote: 'Ambiente tranquilo, aconchegante e muito bonito.',
    author: 'Renata M.',
    context: 'temporada curta',
  },
]

function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right'
}) {
  const initial =
    direction === 'left'
      ? { opacity: 0, x: -34 }
      : direction === 'right'
        ? { opacity: 0, x: 34 }
        : { opacity: 0, y: 30 }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function WhatsAppButton({
  children,
  className = '',
  variant = 'forest',
}: {
  children: ReactNode
  className?: string
  variant?: 'forest' | 'sand' | 'glass'
}) {
  const variants = {
    forest:
      'bg-forest text-ice shadow-[0_18px_38px_rgba(45,71,57,.22)] hover:bg-moss focus-visible:outline-forest',
    sand:
      'bg-sand text-forest shadow-[0_18px_45px_rgba(0,0,0,.24)] hover:bg-ice focus-visible:outline-sand',
    glass:
      'border border-white/35 bg-white/10 text-ice hover:bg-white/20 focus-visible:outline-ice backdrop-blur-xl',
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
    >
      <MessageCircle size={18} aria-hidden="true" />
      <span>{children}</span>
      <ArrowRight
        size={17}
        aria-hidden="true"
        className="transition group-hover:translate-x-1"
      />
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-forest/90 text-ice backdrop-blur-2xl">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <a href="#inicio" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full border border-sand/35 bg-sand/12 font-serif text-xl font-bold text-sand">
            U
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-2xl font-semibold">
              Paraíso do Una
            </span>
            <span className="hidden text-xs font-semibold text-sand/80 sm:block">
              Morros - Maranhão
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-semibold text-ice/80 transition hover:text-sand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton variant="sand">Reservar agora</WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-grid size-11 place-items-center rounded-full border border-white/20 text-ice transition hover:bg-white/10 lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-forest px-5 py-5 lg:hidden"
          aria-label="Principal mobile"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-ice/85 transition hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <WhatsAppButton variant="sand" className="mt-3 w-full">
              Reservar agora
            </WhatsAppButton>
          </div>
        </motion.nav>
      )}
    </header>
  )
}

function Hero() {
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 115])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -45])

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest pt-28 text-ice"
    >
      <motion.img
        src={photos.chale}
        alt="Chalé de madeira da Pousada Paraíso do Una cercado por mata"
        className="absolute inset-0 h-[112%] w-full object-cover"
        style={{ y: imageY }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,35,28,.88)_0%,rgba(31,48,37,.58)_46%,rgba(22,35,27,.26)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,31,24,.92)_0%,rgba(20,31,24,.18)_42%,rgba(20,31,24,.42)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ice to-transparent" />

      <motion.div
        className="section-shell relative z-10 pb-16 md:pb-24"
        style={{ y: textY }}
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 inline-flex flex-wrap items-center gap-3 rounded-full border border-sand/35 bg-white/10 px-4 py-2 text-sm font-bold text-sand backdrop-blur-xl"
          >
            <MapPin size={16} aria-hidden="true" />
            Morros - MA, às margens do Rio Una e Guarimã
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="max-w-4xl font-serif text-5xl font-semibold leading-none text-ice md:text-7xl lg:text-8xl"
          >
            Seu refúgio de paz às margens do Rio Una
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-ice/85 md:text-xl"
          >
            Descanso, natureza e conforto em um chalé de madeira cercado pela
            mata em Morros, Maranhão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <WhatsAppButton variant="sand" className="sm:min-w-64">
              Reservar pelo WhatsApp
            </WhatsAppButton>
            <a
              href="#experiencia"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 text-sm font-bold text-ice backdrop-blur-xl transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ice"
            >
              Conhecer a pousada
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
          className="mt-14 grid max-w-5xl gap-3 sm:grid-cols-3"
        >
          {[
            ['4,4/5', 'nota no Google'],
            ['70+', 'avaliações'],
            ['Rio Una', 'banho de rio e mata'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur-xl"
            >
              <strong className="block font-serif text-4xl font-semibold text-sand">
                {value}
              </strong>
              <span className="mt-1 block text-sm font-semibold text-ice/75">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#1f7a47] text-white shadow-[0_18px_40px_rgba(20,80,49,.35)] transition hover:-translate-y-1 hover:bg-[#16673a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f7a47]"
        aria-label="Reservar pelo WhatsApp"
      >
        <MessageCircle size={25} aria-hidden="true" />
      </a>
    </section>
  )
}

function ArrivalSection() {
  return (
    <section className="relative overflow-hidden bg-ice py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-forest/10" />
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <Reveal>
            <span className="eyebrow">Chegada</span>
            <h2 className="section-title mt-3">
              Madeira, rede, rio e mata: o descanso começa antes de entrar
            </h2>
          </Reveal>
          <Reveal delay={0.08} direction="right">
            <p className="section-copy max-w-2xl lg:ml-auto">
              A Paraíso do Una tem aquele charme real de pousada de natureza:
              varanda com rede, sombra de árvores, água por perto e espaços que
              convidam a ficar mais um pouco.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {[
            {
              image: photos.rio,
              title: 'Acesso ao rio',
              text: 'Um mergulho cercado de verde.',
              className: 'min-h-[420px] lg:row-span-2',
            },
            {
              image: photos.varanda,
              title: 'Varanda privativa',
              text: 'Rede, vista e silêncio.',
              className: 'min-h-[260px]',
            },
            {
              image: photos.descanso,
              title: 'Área coberta',
              text: 'Espaço fresco para passar o dia.',
              className: 'min-h-[260px]',
            },
            {
              image: photos.redes,
              title: 'Convivência',
              text: 'Churrasco, refeições e descanso.',
              className: 'min-h-[260px] lg:col-span-2',
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <figure
                className={`group relative overflow-hidden rounded-lg shadow-card ${item.className}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-transparent" />
                <figcaption className="absolute inset-x-5 bottom-5">
                  <strong className="block font-serif text-3xl font-semibold text-ice">
                    {item.title}
                  </strong>
                  <span className="mt-1 block text-sm font-semibold text-ice/75">
                    {item.text}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section id="experiencia" className="relative overflow-hidden bg-mist py-20 md:py-28">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Experiência</span>
          <h2 className="section-title mt-3">
            Mais que uma hospedagem, uma experiência
          </h2>
          <p className="section-copy mt-5">
            Tudo foi pensado para dias simples, bonitos e fáceis de aproveitar.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((item, index) => {
            const Icon = item.icon

            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <motion.article
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.25 }}
                  className="group h-full rounded-lg border border-forest/10 bg-ice p-6 shadow-card"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div className="grid size-[3.25rem] place-items-center rounded-lg bg-sand text-forest transition group-hover:bg-forest group-hover:text-sand">
                      <Icon size={25} aria-hidden="true" />
                    </div>
                    <span className="font-serif text-4xl font-semibold text-forest/12">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-forest">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-forest/70">{item.text}</p>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="bg-forest py-20 text-ice md:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
        <Reveal className="relative min-h-[620px]">
          <img
            src={photos.quarto}
            alt="Quarto do chalé com cama colorida e vista para a mata"
            className="absolute left-0 top-0 h-[68%] w-[82%] rounded-lg object-cover shadow-[0_30px_80px_rgba(0,0,0,.28)]"
          />
          <motion.img
            src={photos.varanda}
            alt="Varanda do chalé com rede e vista para a vegetação"
            className="absolute bottom-0 right-0 h-[46%] w-[58%] rounded-lg border-8 border-forest object-cover shadow-[0_30px_80px_rgba(0,0,0,.3)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute bottom-[32%] left-6 rounded-lg border border-sand/20 bg-forest/80 p-5 shadow-card backdrop-blur-xl">
            <span className="text-sm font-bold text-sand">À beira do verde</span>
            <p className="mt-1 max-w-52 font-serif text-2xl font-semibold">
              um chalé para sumir da pressa
            </p>
          </div>
        </Reveal>

        <Reveal direction="right">
          <span className="text-sm font-bold uppercase text-sand">Sobre</span>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ice md:text-5xl">
            A pousada tem cara de refúgio porque é um refúgio de verdade
          </h2>
          <p className="mt-6 text-lg leading-8 text-ice/75">
            Localizada às margens dos rios Una e Guarimã, em Morros-MA, a
            Pousada Paraíso do Una é o lugar ideal para quem busca descanso,
            contato com a natureza e momentos especiais em família ou a dois.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              'Chalé elevado em madeira, envolvido pela mata.',
              'Varanda com rede para ler, conversar ou não fazer nada.',
              'Cozinha equipada para estadias mais livres.',
              'Atendimento direto pelo WhatsApp para consultar datas.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-sand" size={21} />
                <span className="leading-7 text-ice/80">{item}</span>
              </div>
            ))}
          </div>

          <WhatsAppButton variant="sand" className="mt-9">
            Consultar datas disponíveis
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  )
}

function ChaletsSection() {
  return (
    <section id="chales" className="bg-ice py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <Reveal>
            <span className="eyebrow">Chalés</span>
            <h2 className="section-title mt-3">
              Conforto rústico, completo e pronto para descansar
            </h2>
          </Reveal>
          <Reveal direction="right" delay={0.08}>
            <p className="section-copy">
              Ar-condicionado, cozinha equipada, geladeira, fogão, utensílios
              domésticos, Wi-Fi e estrutura para descanso. Sem complicar a
              viagem, sem perder o charme.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {chaletCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-forest/10 bg-white shadow-card">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ice/92 px-4 py-2 text-xs font-bold text-forest backdrop-blur">
                    {card.label}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-3xl font-semibold leading-tight text-forest">
                    {card.title}
                  </h3>
                  <p className="mt-4 flex-1 leading-7 text-forest/70">
                    {card.text}
                  </p>
                  <WhatsAppButton className="mt-7 w-full">
                    Consultar disponibilidade
                  </WhatsAppButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-lg border border-forest/10 bg-mist p-5 shadow-card">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {[
              [Snowflake, 'Ar-condicionado'],
              [Coffee, 'Cozinha equipada'],
              [Wifi, 'Wi-Fi'],
              [Flame, 'Churrasco'],
              [Waves, 'Banho de rio'],
              [PawPrint, 'Pet friendly'],
            ].map(([Icon, label]) => {
              const ItemIcon = Icon as LucideIcon

              return (
                <div
                  key={label as string}
                  className="flex min-h-16 items-center gap-3 rounded-lg bg-ice px-4 text-sm font-bold text-forest"
                >
                  <ItemIcon size={19} aria-hidden="true" />
                  {label as string}
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function GallerySection() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Galeria real</span>
          <h2 className="section-title mt-3">
            Veja o Paraíso do Una como ele é
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[210px] gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {gallery.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.04}
              className={
                index === 0
                  ? 'lg:col-span-3 lg:row-span-2'
                  : index === 1
                    ? 'lg:col-span-3'
                    : 'lg:col-span-2'
              }
            >
              <figure className="group relative h-full overflow-hidden rounded-lg bg-forest shadow-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/75 via-transparent to-transparent opacity-90" />
                <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-ice/92 px-4 py-2 text-sm font-bold text-forest backdrop-blur">
                    {item.title}
                  </span>
                  <span className="hidden size-10 place-items-center rounded-full bg-sand text-forest sm:grid">
                    <ArrowRight size={18} aria-hidden="true" />
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialProofSection() {
  return (
    <section className="bg-ice py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">Prova social</span>
            <h2 className="section-title mt-3">
              Uma estadia simples de escolher e difícil de esquecer
            </h2>
            <div className="mt-8 rounded-lg bg-forest p-7 text-ice shadow-soft">
              <div className="flex text-sand" aria-label="Nota 4,4 de 5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={23}
                    fill="currentColor"
                    className={index === 4 ? 'opacity-45' : ''}
                  />
                ))}
              </div>
              <strong className="mt-4 block font-serif text-5xl font-semibold">
                4,4/5
              </strong>
              <span className="mt-2 block text-sm font-semibold text-ice/70">
                no Google, com mais de 70 avaliações
              </span>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {testimonials.map((item, index) => (
              <Reveal key={item.quote} delay={index * 0.06} direction="right">
                <article className="rounded-lg border border-forest/10 bg-white p-6 shadow-card">
                  <div className="flex items-start gap-5">
                    <div className="grid size-12 shrink-0 place-items-center rounded-lg bg-sand text-forest">
                      <Heart size={21} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-semibold leading-snug text-forest">
                        “{item.quote}”
                      </p>
                      <div className="mt-4 text-sm font-semibold text-forest/60">
                        {item.author} · {item.context}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section id="localizacao" className="bg-forest py-20 text-ice md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-center">
        <Reveal>
          <span className="text-sm font-bold uppercase text-sand">
            Localização
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ice md:text-5xl">
            Morros-MA, entre o rio, a mata e dias mais lentos
          </h2>
          <p className="mt-5 text-lg leading-8 text-ice/75">
            Estamos em Morros, Maranhão, às margens do Rio Una e Guarimã. O
            contato pelo WhatsApp ajuda você a confirmar datas, rotas e detalhes
            antes de sair de casa.
          </p>

          <div className="mt-8 rounded-lg border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <div className="flex gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-lg bg-sand text-forest">
                <MapPin size={24} aria-hidden="true" />
              </div>
              <div>
                <strong className="font-serif text-2xl font-semibold text-ice">
                  Pousada Paraíso do Una
                </strong>
                <p className="mt-2 leading-7 text-ice/70">
                  Morros - MA, às margens dos rios Una e Guarimã.
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Pousada%20Para%C3%ADso%20do%20Una%20Morros%20MA"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sand px-6 text-sm font-bold text-forest transition hover:bg-ice focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sand"
            >
              <Navigation size={18} aria-hidden="true" />
              Como chegar
            </a>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="relative min-h-[520px] overflow-hidden rounded-lg shadow-[0_30px_80px_rgba(0,0,0,.26)]">
            <img
              src={photos.rio}
              alt="Deck de madeira sobre o Rio Una"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-forest/30" />
            <div className="absolute left-6 top-6 rounded-full bg-ice/92 px-4 py-2 text-sm font-bold text-forest backdrop-blur">
              Rio Una
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-ice/94 p-5 text-forest shadow-card backdrop-blur">
              <span className="text-sm font-bold text-wood">Ponto de chegada</span>
              <p className="mt-1 font-serif text-3xl font-semibold leading-tight">
                a água fica dentro da experiência
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section id="reservas" className="relative overflow-hidden bg-ice py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg bg-forest px-6 py-16 text-center text-ice shadow-soft md:px-12 md:py-20">
            <img
              src={photos.varanda}
              alt="Rede na varanda do chalé"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-forest/75" />
            <div className="relative z-10 mx-auto max-w-4xl">
              <span className="text-sm font-bold uppercase text-sand">
                Reservas
              </span>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-6xl">
                Reserve sua experiência no Paraíso do Una
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ice/80">
                Entre em contato pelo WhatsApp e consulte datas disponíveis para
                seu descanso em Morros-MA.
              </p>
              <WhatsAppButton
                variant="sand"
                className="mt-9 min-h-14 px-8 text-base"
              >
                Reservar agora pelo WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-forest px-5 py-12 text-ice">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_0.8fr_0.8fr]">
        <div>
          <a href="#inicio" className="font-serif text-3xl font-semibold">
            Paraíso do Una
          </a>
          <p className="mt-3 text-ice/70">Descanso e natureza ao seu alcance.</p>
        </div>

        <div>
          <strong className="block text-sm uppercase text-sand">Contato</strong>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-2 text-ice/80 transition hover:text-sand"
          >
            <Phone size={18} aria-hidden="true" />
            (98) 99100-3860
          </a>
          <p className="mt-3 flex items-center gap-2 text-ice/70">
            <MapPin size={18} aria-hidden="true" />
            Morros - MA
          </p>
        </div>

        <div>
          <strong className="block text-sm uppercase text-sand">
            Links rápidos
          </strong>
          <div className="mt-3 grid gap-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-ice/70 transition hover:text-sand"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <main className="min-h-screen bg-ice">
      <Header />
      <Hero />
      <ArrivalSection />
      <ExperienceSection />
      <AboutSection />
      <ChaletsSection />
      <GallerySection />
      <SocialProofSection />
      <LocationSection />
      <FinalCta />
      <Footer />
    </main>
  )
}

export default App
