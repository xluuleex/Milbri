import Image from "next/image"
import { Clock } from "lucide-react"
import { SERVICES } from "@/lib/services"

export function ServicesSection() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex flex-col gap-3 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Nuestros servicios</h2>
        <p className="mx-auto max-w-lg text-pretty text-muted-foreground">
          Elegí el servicio ideal para vos. Atendemos con turnos de lunes a viernes entre las 14 y las 18 hs.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <article
            key={service.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={`Ejemplo de ${service.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="flex-1 text-sm text-muted-foreground">{service.description}</p>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="size-4" aria-hidden="true" />
                  {service.duration}
                </span>
                <span className="text-base font-semibold text-primary">{service.price}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
