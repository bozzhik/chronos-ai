'use client'

import Cookies from 'js-cookie'
import axios from 'axios'
import {AuthResponse, ModelsResponse} from '@/types/gigachat'

export const useGiga = () => {
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

  const checkModels = async () => {
    const token = Cookies.get('giga_token')

    if (!token) {
      console.error('No auth token found')
      return
    }

    try {
      const response = await axios.get<ModelsResponse>('/api/giga/models', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const modelsData = response.data.data.map((model) => model.id)
      Cookies.set('giga_models', JSON.stringify(modelsData))

      console.log('Models fetched successfully:', response.data)
    } catch (error) {
      console.error('Error fetching models:', error)
    }
  }

  return {checkToken, checkModels}
}
