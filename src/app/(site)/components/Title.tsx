import React from 'react'

type Props = {
    title: string;
    size: 'sm' | 'md' | 'lg';
}

const Title = ({title, size}: Props) => {
  return (
    <>
    {size === 'sm' && <p className='text-primary-gray uppercase relative mb-4 font-bold tracking-wide '>{title} <span className="absolute left-0 -bottom-1 bg-accent h-[3px] w-10"/></p>}
    {size === 'md' && <h2>{title}</h2>}
    {size === 'lg' && <p>{title}</p>}
  </>
  )
}

export default Title
