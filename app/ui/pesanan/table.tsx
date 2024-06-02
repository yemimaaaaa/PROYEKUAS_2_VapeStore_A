import Image from 'next/image';
import { lusitana, kanit, inter } from '@/app/ui/fonts';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredPesanan } from '@/app/lib/data';
import { DeletePesanan, UpdatePesanan } from './button';
 
export default async function PesananTable({
  query,
  currentPage
}: {
  query: string;
  currentPage: number;
}) {
  const pesanan = await fetchFilteredPesanan(query, currentPage);
  return (
    <div className={`${kanit.className} w-full`}>
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-fuchsia-200 p-2 md:pt-0">
              <div className="md:hidden">
                {pesanan?.map((pesanan) => (
                  <div
                    key={pesanan.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={pesanan.image_url}
                              className="mr-2 rounded-full"
                              alt={`${pesanan.nama}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p>{pesanan.nama}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {pesanan.barang}
                        </p>
                      </div>
                    </div>
                    {/* <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Pending</p>
                        <p className="font-medium">{customer.total_pending}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Paid</p>
                        <p className="font-medium">{customer.total_paid}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm">
                      <p>{customer.total_invoices} invoices</p>
                    </div> */}
                    <div className="flex justify-end gap-3">
                          <UpdatePesanan id={pesanan.id} />
                          <DeletePesanan id={pesanan.id} />
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-fuchsia-200 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Nama
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Harga
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Barang
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Jumlah
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Date
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Keterangan
                    </th>
                  </tr>
                </thead>
 
                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {pesanan.map((pesanan) => (
                    <tr key={pesanan.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={pesanan.image_url}
                            className="mr-2 rounded-full"
                            alt={`${pesanan.nama}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{pesanan.nama}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {pesanan.harga}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {pesanan.barang}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {pesanan.jumlah}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 ">
                        {formatDateToLocal(pesanan.date)}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 ">
                        {pesanan.keterangan}
                      </td>
                      <td className="whitespace-nowrap bg-white py-3 pl-6 pr-3">
                        <div className="flex justify-end gap-3">
                          <UpdatePesanan id={pesanan.id} />
                          <DeletePesanan id={pesanan.id} />
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
