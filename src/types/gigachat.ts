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
