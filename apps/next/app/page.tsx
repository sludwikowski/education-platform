import { Inter } from 'next/font/google'

import AuthForm from '../components/AuthForm'

// import { Button, Input } from 'ui'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      {/* <Button intent="secondary">Zaloguj się</Button>
      <Input intent="primary" placeholder="First Name" /> */}
      <AuthForm />
    </main>
  )
}
