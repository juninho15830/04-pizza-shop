import { http, HttpResponse } from "msw";
import { GetProfileResponse } from "../get-profile"

export const getProfileMock = http.get<
  never,
  never,
  GetProfileResponse
>('/me', () => {
  return HttpResponse.json({
    id: 'custon-user-id',
    name: 'Jodn Doe',
    email: 'johndoe@example.com',
    phone: '17912345678',
    role: "manager",
    createdAt: new Date(),
    updatedAt: null,
  })
})