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
    id: "semipermanente",
    name: "Semipermanente",
    description: "Esmaltado semipermanente de color duradero y brillo intenso que se mantiene impecable por semanas.",
    duration: "40 min",
    price: "$18.000",
    image: "/images/gel-manicure.png",
  },
  {
    id: "kapping-gel",
    name: "Kapping Gel",
    description: "Refuerzo de la uña natural con gel para mayor resistencia, prolijidad y durabilidad.",
    duration: "60 min aprox",
    price: "$20.000",
    image: "/images/classic-manicure.png",
  },
  {
    id: "extensiones-tips",
    name: "Extensiones en Tips Soft Gel",
    description: "Extensiones con tips de soft gel para lograr el largo y la forma que siempre quisiste.",
    duration: "60 min aprox",
    price: "$25.000",
    image: "/images/nail-art.png",
  },
  {
    id: "retiro",
    name: "Solo Retiro de Manicura",
    description: "Retiro de trabajo previo: $12.000 si es de otra colega o $6.000 si es trabajo propio.",
    duration: "30 min",
    price: "$12.000 / $6.000",
    image: "/images/classic-manicure.png",
  },
]

export const TIME_SLOTS = ["14:00", "15:00", "16:00", "17:00", "18:00"]
