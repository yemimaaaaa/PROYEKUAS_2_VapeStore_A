import PuffLogo from '@/app/ui/acme-logo';
import { UserIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import bg_hero from '/public//assets/bg_hero.png';
import bground_puff from '/public/bground_puff.png';
import bg_puff1 from '/public/bg_puff1.png';
import { rowdies, montserrat } from './ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-20">
      <div className="absolute inset-0 -z-10"></div>
      <Image
        alt="Background"
        src={bg_puff1}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        quality={100}
      />
      <Image
        alt="Background"
        src={bg_puff1}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        quality={100}
      />
      <div className="z-10 flex flex-col items-center">
          <PuffLogo />
        {/* Login Button below Logo */}
        <Link href="/login">
          <button className={`${montserrat.className} mt-0 flex items-center justify-center gap-2 self-start rounded-lg bg-white-0 border border-white px-6 py-3 text-sm font-medium text-white transition-color hover:bg-gray-400`}>
            <UserIcon className="h-8 w-8" />
            <span>Login</span>
          </button>
        </Link>
      </div>
      <div className="z-10 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-white-0 px-6 py-5 md:w-2/5 md:px-20">
          {/* "Go to Dashboard" in Top Right Corner */}
          <header className="absolute top-4 right-5">
            <Link href="/dashboard/">
              <h1 className={`${rowdies.className} antialiased flex text-white text-[25px] hover:text-purple-200`}>
                Go to Dashboard <ArrowRightCircleIcon className="w-6 mx-2" />
              </h1>
            </Link>
          </header>

          {/* Rest of the content */}
          {/* ... */}
        </div>
        <div className="flex items-center justify-center p-8 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}