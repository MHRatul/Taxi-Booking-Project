import Booking from "@/components/Booking/Booking";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
   <div>
       
       <div className="ml-6 mt-3 grid grid-cols-1 md:grid-cols-3">
        <div className="border-[2px] mx-auto mb-36">
           <Booking/>
        </div>
        <div className="col-span-2 bg-red-100">

           Map
        </div>
       </div>
   </div>
  )
}
