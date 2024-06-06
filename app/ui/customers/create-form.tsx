import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  InboxArrowDownIcon,
  UserCircleIcon,
  EnvelopeIcon,
  ShoppingCartIcon
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
            <input
              type='text'
              id='customerId'
              name='nama'
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
                    <input
                      id="pesanan"
                      name="pesanan"
                      type="text"
                      placeholder="Enter Your Pesanan"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
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