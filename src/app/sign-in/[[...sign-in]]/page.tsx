import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div>
      <h1>Sign IN</h1>
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg"
          }
        }}
      ></SignIn>
    </div>
  )
}