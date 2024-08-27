'use client'

import {useEffect} from 'react'
import {useGiga} from '@/hooks/useGiga'

import Prompt from '#/UI/Prompt'

export default function Chat() {
  const {checkToken, checkModels} = useGiga()

  useEffect(() => {
    checkToken()
    checkModels()
  }, [checkToken, checkModels])

  return (
    <section className="flex flex-col gap-16 xl:gap-12 sm:gap-3">
      <Prompt text="wait.." />

      {/* <Prompt type="user" text="You are head north." /> */}
    </section>
  )
}
