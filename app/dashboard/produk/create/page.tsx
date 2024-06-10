import Form from '@/app/ui/produk/create-form';
import Breadcrumbs from '@/app/ui/produk/breadcrumbs';
// import { fetchProdukById } from '@/app/lib/data';
import { fetchProduk } from '@/app/lib/data';
export default async function Page() {
//   const produk = await fetchProdukById(id);
     const produk = await fetchProduk();

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

