import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "SignIn",
  description: "SignIn Page of admin"
}

import SignInForm from '@/features/auth/view/SignInForm'
export default function SignIn() {
  return (
    <>
      <SignInForm />
    </>
  )
}
