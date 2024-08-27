export type AuthResponse = {
  access_token: string
  expires_at: number
}

export type ModelsResponse = {
  object: string
  data: {
    id: string
    object: string
    owned_by: string
  }[]
}

export type ChatRequest = {
  model: string
  messages: {
    role: 'system' | 'user' | 'assistant'
    content: string
  }[]
  n: number
  stream: boolean
  update_interval: number
}

export type ChatResponse = {
  choices: {
    message: {
      content: string
      role: 'assistant'
    }
    index: number
    finish_reason: string
  }[]
  created: number
  model: string
  object: string
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}
