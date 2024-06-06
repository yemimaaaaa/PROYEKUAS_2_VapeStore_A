import Form from '@/app/ui/customers/create-form';
import Breadcrumbs from '@/app/ui/customers/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customer' },
          {
            label: 'Create Customers',
            href: '/dashboard/customer/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}