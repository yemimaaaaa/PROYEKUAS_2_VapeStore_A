// import { CustomerField } from '@/app/lib/definitions';
// import Link from 'next/link';
// import {
//   CheckIcon,
//   ClockIcon,
//   CurrencyDollarIcon,
//   UserCircleIcon,
//   InboxArrowDownIcon,
//   PhoneIcon,
// } from '@heroicons/react/24/outline';
// import { Button } from '@/app/ui/button';
// import { createInvoice } from '@/app/lib/actions';

// export default function Form({ customers }: { customers: CustomerField[] }) {
//   return (
//     <form action={createInvoice}>
//       <div className="rounded-md bg-gray-50 p-4 md:p-6">
//         {/* Customer Name */}
//         <div className="mb-4">
//           <label htmlFor="id" className="mb-2 block text-sm font-medium">
//             Choose customer
//           </label>
//           <div className="relative">
//             <select
//               id="id"
//               name="customerId"
//               className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               defaultValue=""
//             >
//               <option value="" disabled>
//                 Select a customer
//               </option>
//               {customers.map((customer) => (
//                 <option key={customer.id} value={customer.id}>
//                   {customer.nama}
//                 </option>
//               ))}
//             </select>
//             <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
//           </div>
//         </div>

//         {/* Invoice No Telp */}  
//         {/* <div className="mb-4">
//                 <label htmlFor="no_telp" className="mb-2 block text-sm font-medium">
//                     Input no_telp
//                 </label>
//                 <div className="relative mt-2 rounded-md">
//                     <div className="relative">
//                         <input
//                             id="no_telp" 
//                             name="no_telp"  // Pastikan nama input sesuai yang diharapkan di backend
//                             type="text"
//                             step="0.01"
//                             placeholder="Enter no_telp"
//                             className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//                         />
//                         <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//                     </div>
//                 </div>
//             </div> */}

//         {/* Invoice Amount */}
//         <div className="mb-4">
//                 <label htmlFor="total_harga" className="mb-2 block text-sm font-medium">
//                     Input Total Harga
//                 </label>
//                 <div className="relative mt-2 rounded-md">
//                     <div className="relative">
//                         <input
//                             id="total_harga" 
//                             name="total_harga"  // Pastikan nama input sesuai yang diharapkan di backend
//                             type="number"
//                             step="0.01"
//                             placeholder="Enter amount"
//                             className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//                         />
//                         <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//                     </div>
//                 </div>
//             </div>

//         {/* Invoice Status */}
//         <fieldset>
//           <legend className="mb-2 block text-sm font-medium">
//             Set the invoice status
//           </legend>
//           <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
//             <div className="flex gap-4">
//               <div className="flex items-center">
//                 <input
//                   id="pending"
//                   name="status"
//                   type="radio"
//                   value="pending"
//                   className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
//                 />
//                 <label
//                   htmlFor="pending"
//                   className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
//                 >
//                   Pending <ClockIcon className="h-4 w-4" />
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   id="paid"
//                   name="status"
//                   type="radio"
//                   value="paid"
//                   className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
//                 />
//                 <label
//                   htmlFor="paid"
//                   className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
//                 >
//                   Paid <CheckIcon className="h-4 w-4" />
//                 </label>
//               </div>
//             </div>
//           </div>
//         </fieldset>

//         {/* Invoice Kuantitas */}
//         <div className="mb-4">
//           <label htmlFor="kuantitas" className="mb-2 block text-sm font-medium">
//             Input Kuantitas
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//                 id="kuantitas"
//                 name="kuantitas"
//                 type="string"
//                 step="0.01"
//                 placeholder="Enter kuantitas"
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//               <InboxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>
//         {/* Upload Foto Customer */}
//         {/* <div className="mb-4">
//           <label htmlFor="image" className="mb-2 block text-sm font-medium">
//             Upload Image
//           </label>
//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <input
//               id="image"
//               name="image"
//               type="file"
//               accept="image/*"
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//               />
//               <InboxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div> */}

//       </div>
//       <div className="mt-6 flex justify-end gap-4">
//         <Link
//           href="/dashboard/invoices"
//           className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
//         >
//           Cancel
//         </Link>
//         <Button type="submit">Create Invoice</Button>
//       </div>
//     </form>
//   );
// }


import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  BanknotesIcon,
  CheckBadgeIcon,
  CheckIcon,
  ClockIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  UserCircleIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions';

export default function Form({ customers }: { customers: CustomerField[] }) {
  return (
    <form action={createInvoice}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a customer
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

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="total_harga" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="total_harga"
                name="total_harga"
                type="number"
                step="0.01"
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-black-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-fuchsia-300 px-3 py-1.5 text-xs font-medium text-white-600"
                >
                  Paid <CheckBadgeIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        
        {/* metode pembayaran */}
          <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the payment method
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="E-Wallet"
                  name="pembayaran"
                  type="radio"
                  value="E-Wallet"
                  //defaultChecked={invoice.pembayaran === 'E-Wallet'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-black-600 focus:ring-2"
                />
                <label
                  htmlFor="E-Wallet"
                  className="ml-2 flex cursor-pointer items-center gap-2 rounded-full bg-fuchsia-300 px-8 py-2 text-xs font-medium text-black-600"
                >
                  E-Wallet<WalletIcon className="h-4 w-4" />
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="Cash"
                  name="pembayaran"
                  type="radio"
                  value="Cash"
                 //defaultChecked={invoice.pembayaran === 'Cash'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-black-600 focus:ring-2"
                />
                <label
                  htmlFor="Cash"
                  className="ml-2 flex cursor-pointer items-center gap-2 rounded-full bg-fuchsia-300 px-8 py-2 text-xs font-medium text-black-600"
                >
                  Cash <CurrencyDollarIcon className="h-4 w-4" />
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="Transfer Bank"
                  name="pembayaran"
                  type="radio"
                  value="Transfer Bank"
                  //defaultChecked={invoice.pembayaran === 'Transfer Bank'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600 focus:ring-2"
                />
                <label
                  htmlFor="Transfer Bank"
                  className="ml-2 flex cursor-pointer items-center gap-2 rounded-full bg-fuchsia-300 px-8 py-2 text-xs font-medium text-black-600"
                >
                  Transfer Bank <BanknotesIcon className="h-4 w-4" />
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="Credit Card"
                  name="pembayaran"
                  type="radio"
                  value="Credit Card"
                  //defaultChecked={invoice.pembayaran === 'Credit Card'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600 focus:ring-2"
                />
                <label
                  htmlFor="Credit Card"
                  className="ml-2 flex cursor-pointer items-center gap-2 rounded-full bg-fuchsia-300 px-8 py-2 text-xs font-medium text-black-600"
                >
                  Credit Card <CreditCardIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}
