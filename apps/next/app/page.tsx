import { Inter } from 'next/font/google'

import { Button } from 'ui'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button />
    </main>
  )
}
