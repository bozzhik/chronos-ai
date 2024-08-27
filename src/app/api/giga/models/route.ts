import {NextResponse} from 'next/server'
import {Agent} from 'https'
import axios from 'axios'

import {ModelsResponse} from '@/types/gigachat'

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  const access_token = authHeader?.split(' ')[1]

  if (!access_token) {
    return NextResponse.json({error: 'Access token is required'}, {status: 400})
  }

  const httpsAgent = new Agent({
    rejectUnauthorized: false,
  })

  try {
    const modelsResponse = await axios.get<ModelsResponse>('https://gigachat.devices.sberbank.ru/api/v1/models', {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
      httpsAgent,
    })

    return NextResponse.json(modelsResponse.data)
  } catch (error) {
    console.error('Error fetching models:', error)
    return NextResponse.json({error: 'Failed to fetch models'}, {status: 500})
  }
}
