// import { CustomerField, ProdukForm } from '@/app/lib/definitions';
// import Link from 'next/link';
// import {
//   CheckIcon,
//   ClockIcon,
//   CurrencyDollarIcon,
//   UserCircleIcon,
//   CalculatorIcon,
//   ArchiveBoxIcon
// } from '@heroicons/react/24/outline';
// import { Button } from '@/app/ui/button';
// import { createPesanan } from '@/app/lib/actions';
// import { produk } from '@/app/lib/placeholder-data';

// export default function Form({ customers}: { customers: CustomerField[]}) {
//   return (
//     <form action={createPesanan}>
//       <div className="rounded-md bg-gray-50 p-4 md:p-6">
//         {/* Customer Name */}
//         <div className="mb-4">
//           <label htmlFor="nama" className="mb-2 block text-sm font-medium">
//             Customer Name
//           </label>
//           <div className="relative">
//             <select
//               id="nama"
//               name="nama"
//               className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               defaultValue=""
//             >
//               <option value="" disabled>
//                 Choose Customer Name 
//               </option>
//               {customers.map((customer) => (
//                 <option key={customer.nama} value={customer.nama}>
//                   {customer.nama}
//                 </option>
//               ))}
//             </select>
//             <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
//           </div>
//         </div>

//         {/* Invoice Amount */}
//         <div className="mb-4">
//           <label htmlFor="harga" className="mb-2 block text-sm font-medium">
//             Harga
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="harga"
//                 name="harga"  // Pastikan nama input sesuai yang diharapkan di backend
//                 type="number"
//                 step="0.01"
//                 placeholder="Masukkan Harga"
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//               <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>

//         {/* Pesanan Barang */}
//         <div className="mb-4">
//           <label htmlFor="barang" className="mb-2 block text-sm font-medium">
//             Barang
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="barang"
//                 name="barang"
//                 type="string"
//                 step="0.01"
//                 placeholder="Enter Product Name"
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//               <ArchiveBoxIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>

//     {/* Jumlah */}
//     <div className="mb-4">
//           <label htmlFor="jumlah" className="mb-2 block text-sm font-medium">
//             Jumlah
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="jumlah"
//                 name="jumlah"
//                 type="number"
//                 step="0.01"
//                 placeholder="Enter total product"
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//               <CalculatorIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>

//         {/* Pesanan Status */}
//         <fieldset>
//         <legend className="mb-2 block text-sm font-medium">Select Status</legend>
//         <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
//             <div className="flex gap-4">

//             {/* Option 1: Sedang Diproses */}
//             <div className="flex items-center">
//                 <input
//                 id="sedang_diproses" // Unique ID for the radio button
//                 name="keterangan"  // Common name for the radio group
//                 type="radio"
//                 value="Sedang Di-proses" // Value that will be sent on form submission
//                 className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
//                 defaultChecked // Check if the default status is "Sedang Di-proses"
//                 />
//                 <label
//                 htmlFor="sedang_diproses" // Match with the radio button's ID
//                 className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-yellow-200 px-3 py-1.5 text-xs font-medium text-yellow-800"
//                 >
//                 Sedang Di-proses <ClockIcon className="h-4 w-4" />
//                 </label>
//             </div>

//                 {/* Option 2: Done */}
//                 <div className="flex items-center">
//                     <input
//                     id="done" // Unique ID for the radio button
//                     name="keterangan" // Same name as the other radio button
//                     type="radio"
//                     value="Done" // Value that will be sent on form submission
//                     className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
//                     />
//                     <label
//                     htmlFor="done" // Match with the radio button's ID
//                     className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
//                     >
//                     Done <CheckIcon className="h-4 w-4" />
//                     </label>
//                 </div>
//                 </div>
//             </div>
//             </fieldset>
//       </div>
//       <div className="mt-6 flex justify-end gap-4">
//         <Link
//           href="/dashboard/pesanan"
//           className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
//         >
//           Cancel
//         </Link>
//         <Button type="submit">Create Pesanan</Button>
//       </div>
//     </form>
//   );
// }

'use client';

import { CustomerField, ProdukForm } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  CalculatorIcon,
  ArchiveBoxIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createPesanan } from '@/app/lib/actions';
import { produk } from '@/app/lib/placeholder-data';

export default function Form({ customers }: { customers: CustomerField[] }) {
  return (
    <form action={createPesanan}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="nama" className="mb-2 block text-sm font-medium">
            Nama
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId" //nama
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Pilih Nama Customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.nama}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Pesanan Harga */}
        <div className="mb-4">
          <label htmlFor="harga" className="mb-2 block text-sm font-medium">
            Harga
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="harga"
                name="harga"  // Pastikan nama input sesuai yang diharapkan di backend
                type="number"
                step="0.01"
                placeholder="Masukkan Harga"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Pesanan Barang */}
        <div className="mb-4">
          <label htmlFor="barang" className="mb-2 block text-sm font-medium">
            Barang
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="barang"
                name="barang"
                type="string"
                step="0.01"
                placeholder="Masukkan Nama Barang"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <ArchiveBoxIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Jumlah */}
        <div className="mb-4">
          <label htmlFor="jumlah" className="mb-2 block text-sm font-medium">
            Jumlah
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="jumlah"
                name="jumlah"
                type="number"
                step="0.01"
                placeholder="Masukkan Jumlah Pesanan"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CalculatorIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Pesanan Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Pilih Status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              {/* Option 1: Sedang Diproses */}
              <div className="flex items-center">
                <input
                  id="sedang diproses" // Unique ID for the radio button
                  name="keterangan"  // Common name for the radio group
                  type="radio"
                  value="sedang diproses" // Value that will be sent on form submission
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  defaultChecked // Check if the default status is "Sedang Di-proses"
                />
                <label
                  htmlFor="sedang diproses" // Match with the radio button's ID
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-yellow-200 px-3 py-1.5 text-xs font-medium text-yellow-800"
                >
                  Sedang Di-proses <ClockIcon className="h-4 w-4" />
                </label>
              </div>

              {/* Option 2: Done */}
              <div className="flex items-center">
                <input
                  id="done" // Unique ID for the radio button
                  name="keterangan" // Same name as the other radio button
                  type="radio"
                  value="done" // Value that will be sent on form submission
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="done" // Match with the radio button's ID
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Done <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/pesanan"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Pesanan</Button>
      </div>
    </form>
  );
}

