import Image from "next/image"
import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { BookingForm } from "@/components/booking-form"
import { MapPin, Phone } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="flex items-center gap-2 text-lg font-semibold">
            <Image
              src="/images/milbri-logo.jpeg"
              alt="Logo Milbri Nails"
              width={36}
              height={36}
              className="size-9 rounded-full object-cover"
            />
            Milbri Nails
          </span>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#servicios" className="text-muted-foreground transition-colors hover:text-foreground">
              Servicios
            </a>
            <a
              href="#reservar"
              className="rounded-full bg-primary px-5 py-2 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Reservar
            </a>
          </nav>
        </div>
      </header>

      <Hero />
      <ServicesSection />

      <section id="reservar" className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-8 flex flex-col gap-3 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Reservá tu turno</h2>
            <p className="mx-auto max-w-lg text-pretty text-muted-foreground">
              Completá tus datos y elegí el día, horario y tipo de manicura. Te esperamos.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2 text-base font-semibold text-foreground">
            <Image
              src="/images/milbri-logo.jpeg"
              alt="Logo Milbri Nails"
              width={32}
              height={32}
              className="size-8 rounded-full object-cover"
            />
            Milbri Nails
          </span>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" aria-hidden="true" />
              Av. Siempre Viva 742, Buenos Aires
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="size-4" aria-hidden="true" />
              11 2345 6789
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}
