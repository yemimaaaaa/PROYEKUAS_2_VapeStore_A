import Form from '@/app/ui/produk/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { produk } from '@/app/lib/placeholder-data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Produk', href: '/dashboard/produk' },
          {
            label: 'Create Produk',
            href: '/dashboard/produk/create',
            active: true,
          },
        ]}
      />
      <Form produk={produk} />
    </main>
  );
}