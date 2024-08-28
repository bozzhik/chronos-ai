import {NextResponse} from 'next/server'
import {v4 as uuidv4} from 'uuid'
import {Agent} from 'https'
import axios from 'axios'

import {AuthResponse} from '@/types/gigachat'

export async function GET() {
  const params = new URLSearchParams()
  params.append('scope', 'GIGACHAT_API_PERS')

  const httpsAgent = new Agent({
    rejectUnauthorized: false,
  })

  const rqUID = uuidv4()

  try {
    const response = await axios.post<AuthResponse>('https://ngw.devices.sberbank.ru:9443/api/v2/oauth', params.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        RqUID: rqUID,
        Authorization: `Basic ${process.env.GIGA_TOKEN}`,
      },
      httpsAgent,
    })

    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error fetching auth token:', error)
    return NextResponse.json({error: 'Failed to fetch auth token'}, {status: 500})
  }
}
