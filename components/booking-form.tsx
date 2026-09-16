"use client"

import { useActionState, useEffect, useState, useTransition } from "react"
import { CalendarCheck, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { createAppointment, getBookedTimes, type BookingState } from "@/app/actions/appointments"
import { SERVICES, TIME_SLOTS } from "@/lib/services"

function todayStr() {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().split("T")[0]
}

export function BookingForm() {
  const [state, formAction, isPending] = useActionState<BookingState, FormData>(createAppointment, null)
  const [selectedService, setSelectedService] = useState(SERVICES[0].name)
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [bookedTimes, setBookedTimes] = useState<string[]>([])
  const [isLoadingTimes, startLoadingTimes] = useTransition()

  useEffect(() => {
    if (!date) {
      setBookedTimes([])
      return
    }
    startLoadingTimes(async () => {
      const taken = await getBookedTimes(date)
      setBookedTimes(taken)
    })
    setTime("")
  }, [date])

  useEffect(() => {
    if (state?.success) {
      setDate("")
      setTime("")
      setBookedTimes([])
    }
  }, [state?.success])

  if (state?.success) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="size-14 text-primary" aria-hidden="true" />
        <h3 className="text-2xl font-semibold">¡Turno confirmado!</h3>
        <p className="max-w-sm text-muted-foreground">{state.message}</p>
        <a
          href="#reservar"
          onClick={() => window.location.reload()}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Reservar otro turno
        </a>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre y apellido" htmlFor="customerName">
          <input
            id="customerName"
            name="customerName"
            required
            placeholder="Ej. Sofía Pérez"
            className="input-base"
          />
        </Field>
        <Field label="Teléfono" htmlFor="phone">
          <input id="phone" name="phone" required placeholder="Ej. 11 2345 6789" className="input-base" />
        </Field>
      </div>

      <Field label="Email (opcional)" htmlFor="email">
        <input id="email" name="email" type="email" placeholder="tucorreo@email.com" className="input-base" />
      </Field>

      <Field label="Tipo de manicura" htmlFor="service">
        <select
          id="service"
          name="service"
          required
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="input-base"
        >
          {SERVICES.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name} — {s.price}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Fecha" htmlFor="date">
          <input
            id="date"
            name="date"
            type="date"
            required
            min={todayStr()}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-base"
          />
        </Field>
        <Field label="Horario" htmlFor="time">
          <input type="hidden" name="time" value={time} />
          <select
            id="time"
            required
            disabled={!date || isLoadingTimes}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="input-base disabled:opacity-60"
          >
            <option value="" disabled>
              {!date ? "Elegí una fecha primero" : isLoadingTimes ? "Cargando..." : "Seleccionar horario"}
            </option>
            {TIME_SLOTS.map((slot) => {
              const taken = bookedTimes.includes(slot)
              return (
                <option key={slot} value={slot} disabled={taken}>
                  {slot} {taken ? "(ocupado)" : ""}
                </option>
              )
            })}
          </select>
        </Field>
      </div>

      <Field label="Notas (opcional)" htmlFor="notes">
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Contanos si tenés alguna preferencia o alergia"
          className="input-base resize-none"
        />
      </Field>

      {state && !state.success && (
        <p className="flex items-center gap-2 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-70"
      >
        {isPending ? (
          <>
            <Loader2 className="size-5 animate-spin" aria-hidden="true" />
            Reservando...
          </>
        ) : (
          <>
            <CalendarCheck className="size-5" aria-hidden="true" />
            Confirmar turno
          </>
        )}
      </button>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  )
}
