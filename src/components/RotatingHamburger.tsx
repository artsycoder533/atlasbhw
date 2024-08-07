"use client"
import React from 'react'

type Props = {
    open: boolean;
    setOpen: (val: boolean) => void;
}

const RotatingHamburger = ({open, setOpen}: Props) => {
  return (
    <>
    <button
      aria-label="menu"
      aria-haspopup="menu"
      tabIndex={0}
      onClick={() => setOpen(!open)}
      className="flex-shrink-0 w-14 h-12 flex flex-col justify-center items-center relative lg:hidden border-none">
      <span
        className={
          "w-full h-[6px] bg-primary-text rounded-lg transition-all ease-in duration-300 absolute " +
          (open ? "origin-center rotate-[400deg] bg-accent" : "translate-y-[-16px]")
        }
      />
      <span
        className={`w-full h-[6px] bg-primary-text rounded-lg transition-opacity absolute ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={
          "w-full h-[6px] bg-accent rounded-lg transition-all ease-in duration-300 absolute " +
          (open ? "origin-center -rotate-45" : "translate-y-[16px]")
        }
      />
    </button>
  </>
  )
}

export default RotatingHamburger