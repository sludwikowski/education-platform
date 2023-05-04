import { Inter } from 'next/font/google'

import { Button, Input } from 'ui'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Button intent="secondary" />
      <Input intent="primary" placeholder="First Name" />
    </main>
  )
}
