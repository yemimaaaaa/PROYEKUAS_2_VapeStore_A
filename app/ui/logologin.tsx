// import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { lusitana , rowdies} from '@/app/ui/fonts';
import { Style } from 'util';

export default function PuffLogos() {
  return (
    <div className="flex flex-row justify-center items-center leading-none text-white mt-50">
      {/* <div className="absolute top-0 left-0 p-4"> Position text top left */}
        {/* <p className={`${rowdies.className} text-[35px]`}>Puff Paradise</p> */}
    
      <Image
        src="/assets/puff4.png"
        width={200}
        height={200}
        className="hidden md:block mr-2"
        alt="Logo"
        style={{ position: 'absolute', left: '100px', top:'-12px'}}
      />

      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      {/* <p className="text-[44px]">Puff Paradise</p> */}
    </div>
  );
}