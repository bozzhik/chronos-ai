'use client'

import {useEffect, useState, useRef} from 'react'
import {useGiga} from '@/hooks/useGiga'
import {cn} from '@/lib/utils'
import Prompt, {promptVariants} from '#/UI/Prompt'

const inputPlaceholder = ' >> '

export default function Chat() {
  const {checkToken, sendMessage} = useGiga()
  const [inputText, setInputText] = useState<string>(inputPlaceholder)
  const [prompts, setPrompts] = useState<{type: 'user' | 'assistant'; text: string}[]>([])
  const [isInputReadOnly, setIsInputReadOnly] = useState<boolean>(false)
  const [placeholder, setPlaceholder] = useState<string>(inputPlaceholder)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const initialSituationGenerated = useRef<boolean>(false)

  useEffect(() => {
    const initializeChat = async () => {
      try {
        await checkToken()

        if (!initialSituationGenerated.current) {
          initialSituationGenerated.current = true

          const initialPrompt = 'Generate a starting situation for the game'
          const response = await sendMessage(initialPrompt)
          if (response && 'error' in response) {
            console.error('Error response received:', response.error)
            return
          }
          if (response) {
            setIsLoading(false)
            setPrompts((prevPrompts) => [...prevPrompts, {type: 'assistant', text: response.choices[0].message.content}])
          }
        }
      } catch (error) {
        console.error('Error during token check or initial message generation:', error)
      }
    }

    initializeChat()
  }, [checkToken, sendMessage])

  useEffect(() => {
    if (!isLoading && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isLoading])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.startsWith(inputPlaceholder)) {
      setInputText(value)
    }
  }

  const handleSendMessage = async () => {
    const message = inputText.slice(3).trim()
    if (message === '') return

    const response = await sendMessage(message)

    if (response && 'error' in response) {
      console.error('Error response received:', response.error)
      return
    }

    if (response) {
      setIsInputReadOnly(true)
      setPrompts((prevPrompts) => [...prevPrompts, {type: 'user', text: inputText}])

      setPrompts((prevPrompts) => [...prevPrompts, {type: 'assistant', text: response.choices[0].message.content}])

      setInputText(inputPlaceholder)
      setPlaceholder(inputPlaceholder)
      setIsInputReadOnly(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const handleFocus = () => {
    setInputText(inputPlaceholder)
    setPlaceholder(inputPlaceholder)
  }

  if (isLoading) {
    return <Prompt type="assistant" text="Loading.." />
  }

  return (
    <section className="flex flex-col gap-16 xl:gap-12 sm:gap-3 pb-14">
      {prompts.map((prompt, index) => (
        <Prompt key={index} type={prompt.type} text={prompt.text} />
      ))}

      <div className={cn('w-full ml-9', promptVariants.default, promptVariants.user)}>
        <input
          type="text"
          ref={inputRef}
          value={inputText}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyPress={handleKeyPress} // Send on "Enter"
          readOnly={isInputReadOnly}
          placeholder={placeholder}
          className="w-full bg-transparent border-none caret-secondary outline-none placeholder:pl-2 placeholder:text-secondary [text-shadow:_0_0_10px_var(--secondary-shadow)]"
        />
      </div>
    </section>
  )
}
