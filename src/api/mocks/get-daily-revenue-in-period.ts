import { http, HttpResponse } from "msw";
import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";


export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '10/12/2025', receipt: 200},
    { date: '11/12/2025', receipt: 100},
    { date: '12/12/2025', receipt: 50},
    { date: '13/12/2025', receipt: 300},
    { date: '14/12/2025', receipt: 150},
    { date: '15/12/2025', receipt: 400},
    { date: '16/12/2025', receipt: 350},
  ])
})