import { ServicesSection } from "@/types"
import Link from "next/link";
import { urlFor } from "@/utils/helper";
import Image from "next/image";

type Props = {
  data: ServicesSection;
}

const Services = ({data}: Props) => {
 
  return (
    <div className="p-3 grid grid-cols-3 gap-3">{data.servicesList.map(service => {
      console.log(service.image)
      return <Link href={`/services/${service.slug?.current}`} className="flex flex-col w-[300px] h-[300px] p-3 shadow-md">
        <div className="w-full h-full relative">
          <Image src={urlFor(service.image).quality(100).url()} alt={service.title} fill className="object-cover" />        
          </div>
        <div className="flex items-center justify-center p-3 border-b">
          <p className="text-center font-bold">{service.title}</p>
        </div>
      </Link>
    })}</div>
  )
}

export default Services