import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoicesById, fetchCustomers } from '@/app/lib/data'; // Sesuaikan nama fungsi fetch
import { notFound } from 'next/navigation';

export default async function EditInvoicePage({ params }: { params: { id: string } }) {
  const id = params.id;
  // Mengambil data invoice dan customers secara paralel
  const [invoice, customers] = await Promise.all([
    fetchInvoicesById(id), // Pastikan nama fungsi sesuai dengan implementasi Anda
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound(); // Jika invoice tidak ditemukan, alihkan ke halaman 404
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`, // Hindari hardcode ID
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
