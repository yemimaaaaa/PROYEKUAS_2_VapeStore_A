import Image from 'next/image';
import { kanit, inter } from '@/app/ui/fonts';
import {
  ProdukTables
} from '@/app/lib/definitions';
import { fetchFilteredProduk } from '@/app/lib/data';
import { DeleteProduk, UpdateProduk } from '@/app/ui/produk/buttons';

export default async function ProdukTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const produk = await fetchFilteredProduk(query, currentPage);

  return (
    <div className={`${inter.className} w-full`}>
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {produk?.map((produk) => (
                  <div
                    key={produk.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={produk.image_url}
                              className="rounded-full"
                              alt={`${produk.nama}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p>{produk.nama}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {produk.kategori}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      {/* <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Pending</p>
                        <p className="font-medium">{produk.pending}</p>
                      </div> */}
                      {/* <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Paid</p>
                        <p className="font-medium">{produk.total_paid}</p>
                      </div> */}
                    </div>
                    {/* <div className="pt-4 text-sm">
                      <p>{produk.total_invoices} invoices</p>
                    </div> */}
                    <div className='flex justify-end gap-2'>
                      <UpdateProduk id={produk.id} />
                      <DeleteProduk id={produk.id} />
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Nama
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Kategori
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Harga
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Stok
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Total Paid
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {produk.map((produk) => (
                    <tr key={produk.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={produk.image_url}
                            className="rounded-full"
                            alt={`${produk.nama}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{produk.nama}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {produk.kategori}
                      </td>
                      {/* <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {produk.total_invoices}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {produk.total_pending}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {produk.total_paid}
                      </td> */}
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex justify-end gap-3">
                          <UpdateProduk id={produk.id} />
                          <DeleteProduk id={produk.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
