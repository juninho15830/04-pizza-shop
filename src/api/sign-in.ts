import { api } from "@/lib/axios"

export interface SingnInBody {
  email: string
}

export async function signIn({ email }: SingnInBody) {
  await api.post('authenticate', { email })
}