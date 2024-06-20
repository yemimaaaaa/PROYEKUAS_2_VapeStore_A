'use client';
 
import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import {
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  BanknotesIcon,
  CreditCardIcon,
  WalletIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateInvoice } from '@/app/lib/actions';
 
export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
 
  return (
    <form action={updateInvoiceWithId}>
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
              defaultValue={invoice.customer_id}
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.nama}>
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
                defaultValue={invoice.total_harga}
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
                  defaultChecked={invoice.status === 'pending'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
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
                  defaultChecked={invoice.status === 'paid'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-fuchsia-300 px-3 py-1.5 text-xs font-medium text-black-600"
                >
                  Paid <CheckBadgeIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        {/* //pembayaran */}
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
                  defaultChecked={invoice.pembayaran === 'E-Wallet'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600 focus:ring-2"
                />
                <label
                  htmlFor="E-Wallet"
                  className="ml-2 flex cursor-pointer items-center gap-2 rounded-full bg-fuchsia-300 px-6 py-2 text-xs font-medium text-black-600"
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
                  defaultChecked={invoice.pembayaran === 'Cash'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600 focus:ring-2"
                />
                <label
                  htmlFor="Cash"
                  className="ml-2 flex cursor-pointer items-center gap-2 rounded-full bg-fuchsia-300 px-6 py-2 text-xs font-medium text-black-600"
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
                  defaultChecked={invoice.pembayaran === 'Transfer Bank'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600 focus:ring-2"
                />
                <label
                  htmlFor="Transfer Bank"
                  className="ml-2 flex cursor-pointer items-center gap-2 rounded-full bg-fuchsia-300 px-6 py-2 text-xs font-medium text-black-600"
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
                  defaultChecked={invoice.pembayaran === 'Credit Card'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600 focus:ring-2"
                />
                <label
                  htmlFor="Credit Card"
                  className="ml-2 flex cursor-pointer items-center gap-2 rounded-full bg-fuchsia-300 px-6 py-2 text-xs font-medium text-black-600"
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
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  );
}