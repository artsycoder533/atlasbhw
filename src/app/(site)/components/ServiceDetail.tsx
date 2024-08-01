import { Service } from '@/types'
import React from 'react'

type Props = {
    data: Service
}

const ServiceDetail = ({data}: Props) => {
  return (
    <div>{data.title}</div>
  )
}

export default ServiceDetail