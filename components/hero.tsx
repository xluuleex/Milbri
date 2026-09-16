import Image from "next/image"
import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            <Sparkles className="size-4" aria-hidden="true" />
            Estudio de manicura
          </span>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Milbri
            <span className="block text-primary">Nails Studio</span>
          </h1>
          <p className="max-w-md text-pretty text-lg text-muted-foreground">
            Manos impecables y diseños únicos. Reservá tu turno online en segundos y elegí el día, horario y tipo de
            manicura que más te gusta.
          </p>
          <a
            href="#reservar"
            className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Reservar turno
          </a>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-primary/10">
          <Image
            src="/images/hero-manicure.png"
            alt="Manos con manicura prolija en tonos rosados sobre superficie de mármol"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
