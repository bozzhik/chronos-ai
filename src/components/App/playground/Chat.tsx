'use client'

import {useEffect, useState} from 'react'
import {useGiga} from '@/hooks/useGiga'
import {cn} from '@/lib/utils'

import Prompt, {promptVariants} from '#/UI/Prompt'

export default function Chat() {
  const {checkToken, sendMessage} = useGiga()
  const [inputText, setInputText] = useState<string>('')
  const [prompts, setPrompts] = useState<{type: 'user' | 'assistant'; text: string}[]>([])
  const [isInputReadOnly, setIsInputReadOnly] = useState<boolean>(false)

  useEffect(() => {
    checkToken()
  }, [checkToken])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return

    setIsInputReadOnly(true)
    setPrompts((prevPrompts) => [...prevPrompts, {type: 'user', text: inputText}])

    const response = await sendMessage(inputText)
    if (response) {
      setPrompts((prevPrompts) => [...prevPrompts, {type: 'assistant', text: response.choices[0].message.content}])
    }

    setInputText('')
    setIsInputReadOnly(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <section className="flex flex-col gap-16 xl:gap-12 sm:gap-3">
      {prompts.map((prompt, index) => (
        <Prompt key={index} type={prompt.type} text={prompt.text} />
      ))}

      <input className={cn(promptVariants.default, promptVariants.user, 'bg-transparent placeholder:text-primary overflow-visible')} type="text" value={inputText} onChange={handleInputChange} onKeyPress={handleKeyPress} readOnly={isInputReadOnly} placeholder="Type your message..." />
    </section>
  )
}
