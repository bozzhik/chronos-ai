'use client'

import Cookies from 'js-cookie'
import axios from 'axios'
import {AuthResponse} from '@/types/gigachat'

export const useAuth = () => {
  const checkToken = async () => {
    const token = Cookies.get('giga_token')

    if (!token) {
      try {
        const response = await axios.get(`/api/giga/auth`)
        const {access_token, expires_at} = response.data as AuthResponse

        const expiresInDays = (expires_at - Date.now()) / (1000 * 60 * 60 * 24)
        Cookies.set('giga_token', access_token, {expires: expiresInDays})

        console.log('Token set successfully')
      } catch (error) {
        console.error('Error fetching auth token:', error)
      }
    }
  }

  return {checkToken}
}
