import { StaffGroup } from '@/types'
import React from 'react'
import Title from './Title'
import StaffMember from './StaffMember'

type Props = {
    data: StaffGroup
}

const StaffMembers = ({data}: Props) => {
    const {title, staffMembers} = data;
  return (
    <section className="max-w-7xl w-[90vw] mx-auto py-12 mb-12" id="staff">
        <div className="flex justify-center mb-6">
        <Title title={title} size="lg"/>
        </div>
        
        <div className="flex flex-col xl:flex-row gap-10">
            {staffMembers.map(staffMember => <StaffMember key={staffMember._id} staff={staffMember} />)}
        </div>
    </section>
  )
}

export default StaffMembers