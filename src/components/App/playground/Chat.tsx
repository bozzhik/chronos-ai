'use client'

import {useEffect, useState} from 'react'
import {useGiga} from '@/hooks/useGiga'
import {cn} from '@/lib/utils'

import Prompt, {promptVariants} from '#/UI/Prompt'
const inputPlaceholders = {
  default: ' >> your message..',
  short: ' >> ',
}

export default function Chat() {
  const {checkToken, sendMessage} = useGiga()
  const [inputText, setInputText] = useState<string>(inputPlaceholders.default)
  const [prompts, setPrompts] = useState<{type: 'user' | 'assistant'; text: string}[]>([])
  const [isInputReadOnly, setIsInputReadOnly] = useState<boolean>(false)
  const [placeholder, setPlaceholder] = useState<string>(inputPlaceholders.default)

  useEffect(() => {
    checkToken()
  }, [checkToken])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.startsWith(inputPlaceholders.short)) {
      setInputText(value)
    }
  }

  const handleSendMessage = async () => {
    const message = inputText.slice(3).trim()
    if (message === '') return

    const response = await sendMessage(message)
    if (response) {
      setIsInputReadOnly(true)
      setPrompts((prevPrompts) => [...prevPrompts, {type: 'user', text: inputText}])

      setPrompts((prevPrompts) => [...prevPrompts, {type: 'assistant', text: response.choices[0].message.content}])

      setInputText(inputPlaceholders.default)
      setPlaceholder(inputPlaceholders.default)
      setIsInputReadOnly(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const handleFocus = () => {
    setInputText(inputPlaceholders.short)
    setPlaceholder(inputPlaceholders.short)
  }

  return (
    <section className="flex flex-col gap-16 xl:gap-12 sm:gap-3 pb-14">
      {prompts.map((prompt, index) => (
        <Prompt key={index} type={prompt.type} text={prompt.text} />
      ))}

      <div className={cn('w-full ml-9', promptVariants.default, promptVariants.user)}>
        <input type="text" className="w-full bg-transparent border-none caret-secondary outline-none placeholder:pl-2 placeholder:text-secondary [text-shadow:_0_0_10px_var(--secondary-shadow)]" value={inputText} onChange={handleInputChange} onKeyPress={handleKeyPress} onFocus={handleFocus} readOnly={isInputReadOnly} placeholder={placeholder} />
      </div>
    </section>
  )
}
