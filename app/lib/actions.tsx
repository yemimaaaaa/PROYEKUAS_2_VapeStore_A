'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { UpdateInvoices } from '../ui/invoices/buttons';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({ invalid_type_error: 'Please select a customer.',}),
  total_harga: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {invalid_type_error: 'Please select an invoice status.',}),
  kuantitas: z.string({invalid_type_error: 'Please add kuantitas. ',}),
  image_url: z.string(),
  // date: z.string(),
});

const FormSchema2 = z.object({
  id: z.string(),
  nama: z.string(),
  no_telp: z.string(),
  pesanan: z.string(),
  image_url: z.string(),
  // date: z.string(),
});

const FormSchema3 = z.object({
  id: z.string(),
  nama: z.string(),
  kategori: z.string(),
  harga: z.string(),
  stok: z.string(),
  date: z.string(),
  image_url: z.string(),
});

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};
 
const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
const CreateProduk = FormSchema3.omit({ id: true, date: true });
const UpdateProduk = FormSchema3.omit({ id: true, date: true });
const CreateCustomers = FormSchema2.omit({ id: true, date: true });
const UpdateCustomers = FormSchema2.omit({ id: true });

export async function createInvoice(formData: FormData) {
  const img = formData.get('image');
  console.log(img);

  let fileName = '';
  if (img instanceof File) {
    fileName = '/customers/' + img.name;
    console.log('Image uploaded:', fileName);
  };

  const { customerId, total_harga, status, kuantitas, image_url } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    total_harga: formData.get('total_harga'),
    status: formData.get('status'),
    kuantitas: formData.get('kuantitas'),
    image_url: fileName,
  });

  const total_hargaInCents = total_harga * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
        INSERT INTO invoices (customer_id, total_harga, status, date, kuantitas, image_url)
        VALUES (${customerId}, ${total_hargaInCents}, ${status}, ${date}, ${kuantitas}. ${image_url})
      `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, total_harga, status, kuantitas } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    total_harga: formData.get('total_harga'),
    status: formData.get('status'),
    kuantitas: formData.get('kuantitas'),
  });

  const total_hargaInCents = total_harga * 100;

  try {
    await sql`
          UPDATE invoices
          SET customer_id = ${customerId}, total_harga = ${total_hargaInCents}, status = ${status}, kuantitas = ${kuantitas}
          WHERE id = ${id}
        `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

// export async function deleteInvoice(id: string) {
//   throw new Error('Failed to Delete Invoice');
// }
// const CreateCustomers = FormSchema.omit({ id: true, date: true });
// export async function createCustomers(formData: FormData) {
//   const img = formData.get('image');
//   console.log(img);

//   let fileName = '';
//   if (img instanceof File) {
//     fileName = '/customers/' + img.name;
//     console.log('Image uploaded:', fileName);
//   };

//   const { nama, no_telp, pesanan, image_url } = CreateCustomers.parse({
//     nama: formData.get('nama'),
//     no_telp: formData.get('no_telp'),
//     pesanan: formData.get('pesanan'),
//     // date: formData.get('date'),
//     image_url: fileName,
//   });

//   try {
//     await sql`
//         INSERT INTO customers (nama, no_telp, pesanan, image_url)
//         VALUES (${nama}, ${no_telp}, ${pesanan}, ${image_url})
//       `;
//   } catch (error) {
//     return {
//       message: 'Database Error: Failed to Create Customers.',
//     };
//   }

//   revalidatePath('/dashboard/customer');
//   redirect('/dashboard/customer');
// }

export async function createCustomers(formData: FormData) {
  const img = formData.get('image');
  console.log(img);

  let fileName = '';
  if (img instanceof File) {
    fileName = '/customers/' + img.name;
    console.log('Image uploaded:', fileName);
  };

  const { nama, no_telp, pesanan, image_url } = CreateCustomers.parse({
    nama: formData.get('nama'),
    no_telp: formData.get('no_telp'),
    pesanan: formData.get('pesanan'),
    image_url: fileName,
  });
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
        INSERT INTO customers (nama, no_telp, pesanan, image_url, date)
        VALUES (${nama}, ${no_telp}, ${pesanan}, ${image_url}, ${date})
      `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Customers.',
    };
  }
  revalidatePath('/dashboard/customer');
  redirect('/dashboard/customer');
}

export async function updateCustomers(id: string, formData: FormData) {
  const image = formData.get('image');
  console.log(image);
 
  let fileName = '';
  if (image instanceof File) {
    fileName = '/customers/' + image.name;
    console.log('Image uploaded:', fileName);
  };
  const { nama, no_telp, pesanan, image_url } = UpdateCustomers.parse({
    nama: formData.get('nama'),
    no_telp: formData.get('no_telp'),
    pesanan: formData.get('pesanan'),
    image_url: fileName,
  });
 
  const updateFields = { nama, no_telp, pesanan, image_url };
  if (fileName) {
    updateFields.image_url = fileName;
  }
  try {
    await sql`
        UPDATE customers
        SET nama = ${nama}, no_telp = ${no_telp}, pesanan = ${pesanan}, image_url = ${fileName}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Customers.' };
  }
 
  revalidatePath('/dashboard/customer');
  redirect('/dashboard/customer');
}

export async function deleteCustomers(id: string) {
  // throw new Error('Failed to Delete Customers');
  try {
    await sql`DELETE FROM customers WHERE id = ${id}`;
    revalidatePath('/dashboard/customer');
    return { message: 'Deleted Customers.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Customers.' };
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function createProduk(formData: FormData) {
  const img = formData.get('image');
  console.log(img);

  let fileName = '';
  if (img instanceof File) {
    fileName = '/produk/' + img.name;
    console.log('Image uploaded:', fileName);
  };

  const { nama, kategori, harga, stok, image_url } = CreateProduk.parse({
    nama: formData.get('nama'),
    kategori: formData.get('kategori'),
    harga: formData.get('harga'),
    stok: formData.get('stok'),
    // date: formData.get('date'),
    image_url: fileName,
  });

  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
        INSERT INTO produk (nama, kategori, harga, stok, date, image_url)
        VALUES (${nama}, ${kategori}, ${harga}, ${stok}, ${date}, ${image_url})
      `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Produk.',
    };
  }

  revalidatePath('/dashboard/produk');
  redirect('/dashboard/produk');
}

export async function updateProduk(id: string, formData: FormData) {
  const image = formData.get('image');
  console.log(image);
 
  let fileName = '';
  if (image instanceof File) {
    fileName = '/produk/' + image.name;
    console.log('Image uploaded:', fileName);
  };

  const { nama, kategori, harga, stok, image_url} = UpdateProduk.parse({
    nama: formData.get('nama'),
    kategori: formData.get('kategori'),
    harga: formData.get('harga'),
    stok: formData.get('stok'),
    image_url: fileName,
  });
 
  const updateFields = { nama, kategori, harga, stok, image_url };
  if (fileName) {
    updateFields.image_url = fileName;
  }
  try {
    await sql`
    UPDATE produk
    SET nama= ${nama}, kategori=${kategori}, harga = ${harga}, stok = ${stok}, image_url = ${fileName}
    WHERE id = ${id}
  `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Produk.' };
  }
  revalidatePath('/dashboard/produk');
  redirect('/dashboard/produk');
}

export async function deleteProduk(id: string) {
  // throw new Error('Failed to Delete Customers');
  try {
    await sql`DELETE FROM produk WHERE id = ${id}`;
    revalidatePath('/dashboard/produk');
    return { message: 'Deleted Produk.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Produk.' };
  }
}