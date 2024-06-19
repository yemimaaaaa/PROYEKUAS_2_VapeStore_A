const { db } = require('@vercel/postgres');
const {
  invoices,
  produk,
  customers,
  revenue,
  pesanan,
  users,
  lockedUser,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}
// async function seedlockedUser(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     // Create the "users" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS  (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL,
//         locked TEXT NOT NULL
//       );
//     `;

//     console.log(`Created "lockedUser" table`);

//     // Insert data into the "users" table
//     const insertedsers = await Promise.all(
//       users.map(async (user) => {
//         const hashedPassword = await bcrypt.hash(user.password, 10);
//         return client.sql`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//       }),
//     );

//     console.log(`Seeded ${insertedUsers.length} users`);

//     return {
//       createTable,
//       users: insertedUsers,
//     };
//   } catch (error) {
//     console.error('Error seeding users:', error);
//     throw error;
//   }
// }

async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customer" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        nama VARCHAR(255) NOT NULL,
        no_telp VARCHAR(255) NOT NULL,
        pesanan VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        gender VARCHAR(20) NOT NULL
      );
    `;

    console.log(`Created "customers" table`);

    // Insert data into the "customer" table
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (id, nama, no_telp, pesanan, date, image_url, gender)
        VALUES (${customer.id}, ${customer.nama}, ${customer.no_telp}, ${customer.pesanan}, ${customer.date}, ${customer.image_url}, ${customer.gender})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedCustomers.length} customers`);

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error('Error seeding customer:', error);
    throw error;
  }
}
async function seedProduk(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "produk" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS produk (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        nama VARCHAR(255) NOT NULL,
        kategori VARCHAR(255) NOT NULL,
        harga INT NOT NULL,
        stok INT NOT NULL,
        date DATE NOT NULL,
        image_url VARCHAR(255) DEFAULT 'default_image_url',
        garansi VARCHAR(20) NOT NULL
      );
    `;

    console.log(`Created "produk" table`);

    // Insert data into the "produk" table
    const insertedProduk = await Promise.all(
      produk.map(
        (produk) => client.sql`
        INSERT INTO produk (id, nama, kategori, harga, stok, date, image_url, garansi)
        VALUES (${produk.id}, ${produk.nama}, ${produk.kategori}, ${produk.harga}, ${produk.stok}, ${produk.date}, ${produk.image_url || 'default_image_url'}, ${produk.garansi})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedProduk.length} produk`);

    return {
      createTable,
      produk: insertedProduk,
    };
  } catch (error) {
    console.error('Error seeding produk:', error);
    throw error;
  }
}

async function seedInvoices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "transaksi" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS invoices (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        customer_id UUID NOT NULL,
        total_harga INT NOT NULL,
        status VARCHAR(255) NOT NULL,
        date DATE NOT NULL
      );
    `;

    console.log(`Created "invoices" table`);

    // Insert data into the "transaksi" table
    const insertedInvoices = await Promise.all(
      invoices.map(
        (invoices) => client.sql`
        INSERT INTO invoices (customer_id, total_harga, status, date)
        VALUES (${invoices.customer_id}, ${invoices.total_harga}, ${invoices.status}, ${invoices.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedInvoices.length} invoices`);

    return {
      createTable,
      invoices: insertedInvoices,
    };
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}

// async function seedPesanan(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     // Create the "pesanan" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS pesanan (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         nama VARCHAR(255) NOT NULL,
//         harga INT NOT NULL,
//         barang VARCHAR(255) NOT NULL,
//         jumlah INT NOT NULL,
//         date DATE NOT NULL,
//         keterangan VARCHAR(255) NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//       );
//     `;
//     console.log(`Created "pesanan" table`);

//     // Insert data into the "pesanan" table
//     const insertedPesanan = await Promise.all(
//       pesanan.map(
//         (pesanan) => client.sql`
//         INSERT INTO pesanan (id, nama, harga, barang, jumlah, date, keterangan, image_url)
//         VALUES (${pesanan.id}, ${pesanan.nama}, ${pesanan.harga}, ${pesanan.barang}, ${pesanan.jumlah}, ${pesanan.date}, ${pesanan.keterangan}, ${pesanan.image_url || 'default_image_url'})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedPesanan.length} pesanan`);

//     return {
//       createTable,
//       pesanan: insertedPesanan,
//     };
//   } catch (error) {
//     console.error('Error seeding pesanan:', error);
//     throw error;
//   }
// }


async function seedPesanan(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "pesanan" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS pesanan (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        customer_id UUID NOT NULL,
        harga INT NOT NULL,
        barang VARCHAR(255) NOT NULL,
        jumlah INT NOT NULL,
        date DATE NOT NULL,
        keterangan VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;
    console.log(`Created "pesanan" table`);

    // Insert data into the "pesanan" table
    const insertedPesanan = await Promise.all(
      pesanan.map(
        (pesanan) => client.sql`
        INSERT INTO pesanan (id, customer_id, harga, barang, jumlah, date, keterangan, image_url)
        VALUES (${pesanan.id}, ${pesanan.customer_id}, ${pesanan.harga}, ${pesanan.barang}, ${pesanan.jumlah}, ${pesanan.date}, ${pesanan.keterangan}, ${pesanan.image_url || 'default_image_url'})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedPesanan.length} pesanan`);

    return {
      createTable,
      pesanan: insertedPesanan,
    };
  } catch (error) {
    console.error('Error seeding pesanan:', error);
    throw error;
  }
}

async function seedRevenue(client) {
  try {
    // Create the "revenue" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS revenue (
        month VARCHAR(4) NOT NULL UNIQUE,
        revenue INT NOT NULL
      );
    `;
 
    console.log(`Created "revenue" table`);
 
    // Insert data into the "revenue" table
    const insertedRevenue = await Promise.all(
      revenue.map(
        (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    );
 
    console.log(`Seeded ${insertedRevenue.length} revenue`);
 
    return {
      createTable,
      revenue: insertedRevenue,
    };
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}
 
async function main() {
  const client = await db.connect();
  await seedUsers(client);
  await seedProduk(client);
  await seedCustomers(client);
  await seedInvoices(client);
  await seedPesanan(client);
  await seedRevenue(client);
  await client.end();
}

main().catch((error) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    error,
  );

});

