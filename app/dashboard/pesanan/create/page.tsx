import Form from '@/app/ui/invoices/create-form'; 
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchCustomers();

  // Initialize empty `pesanan` object for the form
  const pesanan = {
    // Add default values or structure for your `pesanan` object if needed
    // Example:
    customerId: null,
    items: [], 
    date: new Date(),
    // ... other properties
  };

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/pesanan' }, // Corrected href to match "Invoices" label
          {
            label: 'Create Pesanan', // Corrected label to "Create Invoice"
            href: '/dashboard/pesanan/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />  
    </main>
  );
}
