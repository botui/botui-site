import { useEffect, useState } from "react"
import { signInWithGoogle, onAuthChange } from "@/common/auth"

export function AuthBtn() {
  const [isBusy, setBusy] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthChange((user) => {
      setUser(user)
    })
  }, [])

  return user ? (
    <div>
      <p>
        Hi <b>{user.displayName}</b>,
      </p>
      <p>
        You are on the waitlist! {"We'll"} notify you on <b>{user.email}</b> once
        {" you're "}in.
      </p>
    </div>
  ) : (
    <>
      <p style={{ padding: "10px" }}>
        {"We're accepting new signups on rolling basis, join now:"}
      </p>
      <button
        disabled={isBusy}
        style={{
          backgroundColor: "rgb(59 130 246)",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
        className="btn"
        onClick={() => {
          setBusy(true)
          signInWithGoogle()
            .then((user) => {
              setUser(user)
              setBusy(false)
            })
            .catch((err) => {
              console.error(err)
              setBusy(false)
            })
        }}>
        {isBusy ? "Hold on..." : "Join the waitlist"}
      </button>
    </>
  )
}
