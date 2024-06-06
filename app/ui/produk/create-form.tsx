import { ProdukField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  InboxArrowDownIcon,
  UserCircleIcon,
  EnvelopeIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createProduk, createInvoice } from '@/app/lib/actions';

export default function Form({ produk }: { produk: ProdukField[] }) {
  return (
    <form action={createProduk}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nama
          </label>
          <div className="relative">
            <input
              type='text'
              id='customerId'
              name='name'
              placeholder='Enter Your Name'
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              // defaultValue="Enter Your Name"
            >
              {/* <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option> */}
              {/* ))}
            </select> */}
            </input>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/*Customers Email */}
        <div className="mb-4">
          <label htmlFor="no_telp" className="mb-2 block text-sm font-medium">
            Kategori
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="no_telp"
                name="no_telp"
                type="text"
                placeholder="Enter Your Kategori"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="harga" className="mb-2 block text-sm font-medium">
            Harga
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="harga"
                name="harga"
                type="number"
                step="0.01"
                placeholder="Enter USD Harga"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/*Customers Email */}
        <div className="mb-4">
          <label htmlFor="stok" className="mb-2 block text-sm font-medium">
            Stok
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="stok"
                name="stok"
                type="text"
                placeholder="Enter Stock"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
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
 
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Produk</Button>
      </div>
 
    </form>
  );
}