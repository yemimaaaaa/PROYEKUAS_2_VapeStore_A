import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  InboxArrowDownIcon,
  UserCircleIcon,
  EnvelopeIcon,
  ShoppingCartIcon,
  ClockIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createCustomers } from '@/app/lib/actions';

export default function Form({ customers }: { customers: CustomerField[] }) {
  return (
    <form action={createCustomers}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="nama" className="mb-2 block text-sm font-medium">
            Nama
          </label>
          <div className="relative">
            <select
              id="nama"
              name="nama"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            // type='text'
            // id='customerId'
            // name='nama'
            // placeholder='Enter Your Name'
            // className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            // defaultValue="Enter Your Name"
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.nama} value={customer.nama}>
                  {customer.nama}
                </option>
              ))}
            </select>
            {/* </input> */}
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/*Customers Email */}
        <div className="mb-4">
          <label htmlFor="no_telp" className="mb-2 block text-sm font-medium">
            No. Telp
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="no_telp"
                name="no_telp"
                type="text"
                placeholder="Enter Your No. Telepon"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/*Customers Pesanan */}
        <div className="mb-4">
          <label htmlFor="pesanan" className="mb-2 block text-sm font-medium">
            Pesanan
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <select
                id="customer"
                name="pesanan"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
              // type='text'
              // id='customerId'
              // name='nama'
              // placeholder='Enter Your Name'
              // className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              // defaultValue="Enter Your Name"
              >
                <option value="" disabled>
                  Select a customer
                </option>
                {customers.map((customer) => (
                  <option key={customer.pesanan} value={customer.pesanan}>
                    {customer.pesanan}
                  </option>
                ))}
              </select>
              {/* <input
                id="pesanan"
                name="pesanan"
                type="text"
                placeholder="Enter Your Pesanan"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              /> */}
              <ShoppingCartIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Upload Foto Customer */}
        <div className="mb-4">
          <label htmlFor="image" className="mb-2 block text-sm font-medium">
            Upload Image
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <InboxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* Customer Name */}
        <fieldset>
        <legend className="mb-2 block text-sm font-medium">Set the gender</legend>
        <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
          <div className="flex gap-4">
            {/* Opsi  */}
            <div className="flex items-center">
              <input
                id="P"  // ID harus sesuai dengan label
                name="gender" // Nama harus sama untuk kedua radio button
                type="radio"
                value="P" // Nilai option 
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              />
        <label
          htmlFor="p" // htmlFor sesuai dengan ID radio button
          className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-pink-200 px-3 py-1.5 text-xs font-medium text-pink-600" // Ubah warna menjadi lebih feminin (pink)
        >
          P <UserCircleIcon className="h-4 w-4" /> 
        </label>
       </div>

      {/* Opsi Laki-laki */}
                <div className="flex items-center">
                  <input
                    id="L" // ID harus sesuai dengan label
                    name="gender" // Nama harus sama untuk kedua radio button
                    type="radio"
                    value="L" // Nilai option Laki-laki
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="L" // htmlFor sesuai dengan ID radio button
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-blue-200 px-3 py-1.5 text-xs font-medium text-blue-600" // Ubah warna menjadi lebih maskulin (biru)
                  >
                    L <UserCircleIcon className="h-4 w-4" />
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customer"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Customers</Button>
      </div>

    </form>
  );
}