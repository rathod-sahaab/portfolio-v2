import React from "react"

import { AiOutlineCopyrightCircle } from "@react-icons/all-files/ai/AiOutlineCopyrightCircle"

const Footer = () => {
  return (
    <footer className="max-w-[1140px] p-6 m-auto text-center mt-12 flex items-center justify-center">
      <AiOutlineCopyrightCircle /> <span>Abhay Raj Singh, {new Date().getFullYear()}</span>
    </footer>
  )
}

export default Footer
