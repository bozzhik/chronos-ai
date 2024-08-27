'use client'

import Cookies from 'js-cookie'
import axios from 'axios'
import {AuthResponse, ModelsResponse, ChatRequest, ChatResponse} from '@/types/gigachat'

export const useGiga = () => {
  const checkModels = async () => {
    const token = Cookies.get('giga_token')
    const models = Cookies.get('giga_models')

    if (!token) {
      console.error('No auth token found')
      return
    }

    if (!models) {
      try {
        const response = await axios.get<ModelsResponse>('/api/giga/models', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        const modelsData = response.data.data.map((model) => model.id)
        Cookies.set('giga_models', JSON.stringify(modelsData))

        console.log('Models fetched successfully:', modelsData)
      } catch (error) {
        console.error('Error fetching models:', error)
      }
    }
  }

  const checkToken = async () => {
    const token = Cookies.get('giga_token')

    if (!token) {
      try {
        const response = await axios.get(`/api/giga/auth`)
        const {access_token, expires_at} = response.data as AuthResponse

        const expiresInDays = (expires_at - Date.now()) / (1000 * 60 * 60 * 24)
        Cookies.set('giga_token', access_token, {expires: expiresInDays})

        console.log('Token set successfully')

        await checkModels()
      } catch (error) {
        console.error('Error fetching auth token:', error)
      }
    }
  }

  const sendMessage = async (message: string) => {
    const token = Cookies.get('giga_token')

    if (!token) {
      console.error('No auth token found')
      return
    }

    const chatRequest: ChatRequest = {
      model: 'GigaChat',
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
      n: 1,
      stream: false,
      update_interval: 0,
    }

    try {
      const response = await axios.post<ChatResponse>('/api/giga/chat', chatRequest, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      console.log('Message sent successfully:', response.data)
      return response.data
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  return {checkToken, checkModels, sendMessage}
}
