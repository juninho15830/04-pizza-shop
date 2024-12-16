import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { signInMock } from './sign-in-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount'
import { getMonthOrdersAmountMock } from './get-month-orders-amount'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount'
import { getMonthRevenueMock } from './get-month-revenue'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period'
import { getPopularProductsMock } from './get-popular-products'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { getProfileMock } from './get-profile-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getManagedRestaurantMock,
  getProfileMock,
  updateProfileMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}