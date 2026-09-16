import { neon } from "@neondatabase/serverless"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set")
}

export const sql = neon(process.env.DATABASE_URL)

export type Appointment = {
  id: number
  customer_name: string
  email: string
  phone: string
  service: string
  appointment_date: string
  appointment_time: string
  notes: string | null
  status: string
  created_at: string
}
