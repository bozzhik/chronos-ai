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
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/giga/auth`)
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

  const incrementRequestCount = () => {
    const MAX_REQUESTS_PER_DAY = 500
    const currentCount = parseInt(Cookies.get('giga_count') || '0', 10)

    if (currentCount >= MAX_REQUESTS_PER_DAY) {
      return false
    }

    Cookies.set('giga_count', (currentCount + 1).toString(), {expires: 1})
    return true
  }

  const sendMessage = async (message: string) => {
    const token = Cookies.get('giga_token')

    if (!token) {
      console.error('No auth token found')
      return
    }

    if (!incrementRequestCount()) {
      alert('Request limit reached. Please try again tomorrow.')
      console.error('Request limit reached. Please try again tomorrow.')
      return {error: 'Request limit reached. Please try again tomorrow.'}
    }

    const chatRequest: ChatRequest = {
      model: 'GigaChat',
      messages: [
        {
          role: 'system',
          content: "You are in charge of an ultra-realistic game that generates dynamic and unpredictable adventures based on the player's input. Your task is to craft short, random scenarios that seamlessly blend absurdity and realism, ensuring each response introduces unexpected twists, surprises, and challenges. Start each adventure with unique and imaginative openings, avoiding clichés like 'strange room' or 'no memory.' Always describe the situation and environment in a way that immerses the player, making it feel like they are navigating a living world. Avoid linearity; allow the player's decisions to lead to varied outcomes, creating a sense of urgency and discovery. Your responses should be brief, no more than 20 characters, while maintaining an engaging and whimsical tone. Remember, everything occurs in a fictional realm, completely detached from reality, where the unusual becomes the norm.",
        },
        {
          role: 'user',
          content: message,
        },
      ],
      n: 1,
      stream: false,
      update_interval: 0,
      max_tokens: 40,
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
      return {error: 'Error sending message.'}
    }
  }

  return {checkToken, checkModels, sendMessage}
}
