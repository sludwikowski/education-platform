import { Inter } from 'next/font/google'

import AuthForm from '../components/AuthForm'

// import { Button, Input } from 'ui'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      {/* <Button intent="secondary">Zaloguj się</Button>
      <Input intent="primary" placeholder="First Name" /> */}
      <AuthForm />
    </main>
  )
}
