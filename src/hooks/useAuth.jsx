'use client'
import { useEffect, useState } from 'react'

function useAuth() {
  const [email, setEmail] = useState(null)
  useEffect(() => {
    const storedEmail = localStorage.getItem("email")
    setEmail(storedEmail)
  }, [])
  return email
}

export default useAuth