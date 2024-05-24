import Image from 'next/image';
import { lusitana, rowdies } from './fonts';

export default function PuffLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row justify-center items-center leading-none text-white mt-50`}
    >
      <div className="absolute top-0 left-0 p-4"> {/* Position text top left */}
        <p className={`${rowdies.className} text-[25px]`}>Puff Paradise</p>
      </div>

      <Image
        src="/assets/puff4.png"
        width={400}
        height={400}
        className="hidden md:block mr-2"
        alt="Logo"
      />

      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      {/* <p className="text-[44px]">Puff Paradise</p> */}
    </div>
  );
}