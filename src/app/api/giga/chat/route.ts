import {NextResponse} from 'next/server'
import {Agent} from 'https'
import axios from 'axios'

import {ChatRequest, ChatResponse} from '@/types/gigachat'

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization')
  const access_token = authHeader?.split(' ')[1]

  if (!access_token) {
    return NextResponse.json({error: 'Access token is required'}, {status: 400})
  }

  const {model, messages, n, stream, update_interval, max_tokens}: ChatRequest = await request.json()

  const httpsAgent = new Agent({
    rejectUnauthorized: false,
  })

  const data = JSON.stringify({
    model,
    messages,
    n,
    stream,
    update_interval,
    max_tokens,
  })

  try {
    const response = await axios.post<ChatResponse>('https://gigachat.devices.sberbank.ru/api/v1/chat/completions', data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
      httpsAgent,
      maxBodyLength: Infinity,
    })

    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error fetching chat completion:', error)
    return NextResponse.json({error: 'Failed to fetch chat completion'}, {status: 500})
  }
}
