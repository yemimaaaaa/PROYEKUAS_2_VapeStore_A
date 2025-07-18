import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';
import { invoices } from '@/app/lib/placeholder-data';
import { fetchLatestInvoices } from '@/app/lib/data';

export default async function LatestInvoices() { // Remove props
  const latestInvoices = await fetchLatestInvoices();
// export default async function LatestInvoices({
//   latestInvoices,
// }: {
//   latestInvoices: LatestInvoice[];
// }) {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-fuchsia-50 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="px-4">
          {latestInvoices.map((invoices, i) => {
            return (
              <div
                key={invoices.customer_id}
                className={clsx(
                  'flex flex-row items-center justify-between py-5',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={invoices.image_url}
                    alt={`${invoices.nama}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-kanit md:text-base">
                      {invoices.nama}
                    </p>
                    {/* <p className="hidden text-sm text-gray-500 sm:block">
                      {invoice.email}
                    </p> */}
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {invoices.total_harga}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
