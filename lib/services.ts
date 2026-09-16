export type Service = {
  id: string
  name: string
  description: string
  duration: string
  price: string
  image: string
}

export const SERVICES: Service[] = [
  {
    id: "clasica",
    name: "Manicura Clásica",
    description: "Limado, cutículas, hidratación y esmaltado tradicional para lucir manos prolijas.",
    duration: "45 min",
    price: "$8.000",
    image: "/images/classic-manicure.png",
  },
  {
    id: "semipermanente",
    name: "Esmaltado Semipermanente",
    description: "Color duradero de brillo intenso que se mantiene impecable por semanas.",
    duration: "60 min",
    price: "$12.000",
    image: "/images/gel-manicure.png",
  },
  {
    id: "kapping",
    name: "Kapping / Refuerzo",
    description: "Refuerzo de la uña natural con gel o polygel para mayor resistencia.",
    duration: "75 min",
    price: "$15.000",
    image: "/images/gel-manicure.png",
  },
  {
    id: "nail-art",
    name: "Nail Art & Diseños",
    description: "Diseños personalizados, pedrería y decoración artística a tu medida.",
    duration: "90 min",
    price: "$18.000",
    image: "/images/nail-art.png",
  },
]

export const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
]
