'use client'

import React from 'react'

import Image from 'next/image'

export default function AuthForm() {
  return (
    <div className="flex h-screen">
      <div className="my-auto ml-10 hidden bg-cover md:block md:h-4/5 md:w-2/6">
        <Image
          src="https://pixabay.com/get/g59757405d843910427a33a16e9019651af95bb554b7977c6911422b52edeadaaa0b32e691b9007c319d9f7aac690d572.jpg"
          alt="background image"
          width={900}
          height={960}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
    </div>
  )
}
