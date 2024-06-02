'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { inter } from '@/app/ui/fonts';
 
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'Home',
    href: '/dashboard',
  },
  {
    name: 'Customer',
    href: '/dashboard/customer',
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
  },
  {
    name: 'Produk',
    href: '/dashboard/produk',
  },
  {
    name: 'Pesanan',
    href: '/dashboard/pesanan',
  }
];
 
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div> {/* Menambahkan flex container untuk horizontal alignment */}
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-fuchsia-300 hover:text-white-600 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-fuchsia-300 text-white-100': pathname === link.href,
            },
          )}
        >
          <p className={`${inter.className} hidden md:block`}>{link.name}</p>
        </Link>
      ))}
    </div>
  );
}