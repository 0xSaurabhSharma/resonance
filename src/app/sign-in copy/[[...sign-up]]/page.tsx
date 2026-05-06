import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUp
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg"
          }
        }}
      ></SignUp>
    </div>
  )
}