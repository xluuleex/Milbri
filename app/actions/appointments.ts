"use server"

import { sql } from "@/lib/db"
import { SERVICES, TIME_SLOTS } from "@/lib/services"

export type BookingState = {
  success: boolean
  message: string
} | null

export async function getBookedTimes(date: string): Promise<string[]> {
  if (!date) return []
  const rows = (await sql`
    SELECT appointment_time FROM appointments
    WHERE appointment_date = ${date} AND status <> 'cancelled'
  `) as { appointment_time: string }[]
  return rows.map((r) => r.appointment_time)
}

export async function createAppointment(
  _prev: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const customerName = String(formData.get("customerName") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const phone = String(formData.get("phone") ?? "").trim()
  const service = String(formData.get("service") ?? "").trim()
  const date = String(formData.get("date") ?? "").trim()
  const time = String(formData.get("time") ?? "").trim()
  const notes = String(formData.get("notes") ?? "").trim()

  if (!customerName || !email || !phone || !service || !date || !time) {
    return { success: false, message: "Por favor completá todos los campos obligatorios." }
  }

  if (!SERVICES.some((s) => s.name === service)) {
    return { success: false, message: "Seleccioná un tipo de manicura válido." }
  }

  if (!TIME_SLOTS.includes(time)) {
    return { success: false, message: "Seleccioná un horario válido." }
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const selected = new Date(`${date}T00:00:00`)
  if (Number.isNaN(selected.getTime()) || selected < today) {
    return { success: false, message: "Elegí una fecha válida a partir de hoy." }
  }

  const taken = (await sql`
    SELECT 1 FROM appointments
    WHERE appointment_date = ${date} AND appointment_time = ${time} AND status <> 'cancelled'
    LIMIT 1
  `) as unknown[]

  if (taken.length > 0) {
    return { success: false, message: "Ese horario ya fue reservado. Elegí otro, por favor." }
  }

  await sql`
    INSERT INTO appointments (customer_name, email, phone, service, appointment_date, appointment_time, notes)
    VALUES (${customerName}, ${email}, ${phone}, ${service}, ${date}, ${time}, ${notes || null})
  `

  return {
    success: true,
    message: `¡Listo, ${customerName}! Tu turno para ${service} el ${date} a las ${time} quedó reservado.`,
  }
}
