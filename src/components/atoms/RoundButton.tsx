import React from "react"

const RoundButton = ({
  onClick,
  children,
  active,
}: React.PropsWithChildren<{
  onClick: React.MouseEventHandler<HTMLButtonElement>
  active: boolean
}>) => {
  return (
    <button
      className={
        "text-[1rem] rounded-[9px] border-none px-[1.5em] py-[0.6em] m-1 tracking-[1px] " +
        (active ? "bg-fg-100 text-bg-100" : "text-fg-100 bg-[#030303]  hover:bg-transparent focus:bg-transparent")
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default RoundButton
