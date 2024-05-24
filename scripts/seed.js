const { db } = require('@vercel/postgres');
const {
  customers, 
  transaksi, 
  users, 
  laporan,
  produk} = require('../app/lib/placeholder-data.js');
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
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "customers" table`);

    // Insert data into the "customer" table
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (id, nama, no_telp, pesanan, date, image_url)
        VALUES (${customer.id}, ${customer.nama}, ${customer.no_telp}, ${customer.pesanan}, ${customer.date}, ${customer.image_url})
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
        id_produk UUID NOT NULL,
        nama VARCHAR(255) NOT NULL,
        kategori VARCHAR(255) NOT NULL,
        harga INT NOT NULL,
        stok INT NOT NULL,
        date DATE NOT NULL,
        image_url VARCHAR(255) DEFAULT 'default_image_url'
      );
    `;

    console.log(`Created "produk" table`);

    // Insert data into the "produk" table
    const insertedProduk = await Promise.all(
      produk.map(
        (produk) => client.sql`
        INSERT INTO produk (id_produk, nama, kategori, harga, stok, date, image_url)
        VALUES (${produk.id_produk}, ${produk.nama}, ${produk.kategori}, ${produk.harga}, ${produk.stok}, ${produk.date}, ${produk.image_url || 'default_image_url'})
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

async function seedTransaksi(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "transaksi" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS transaksi (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        customer_id UUID NOT NULL,
        total_harga INT NOT NULL,
        status VARCHAR(255) NOT NULL,
        kuantitas VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "transaksi" table`);

    // Insert data into the "transaksi" table
    const insertedTransaksi = await Promise.all(
      transaksi.map(
        (transaksi) => client.sql`
        INSERT INTO transaksi (customer_id, total_harga, status, kuantitas, date, image_url)
        VALUES (${transaksi.customer_id}, ${transaksi.total_harga}, ${transaksi.status}, ${transaksi.kuantitas}, ${transaksi.date}, ${transaksi.image_url || 'default_image_url'})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedTransaksi.length} transaksi`);

    return {
      createTable,
      transaksi: insertedTransaksi,
    };
  } catch (error) {
    console.error('Error seeding transaksi:', error);
    throw error;
  }
}


async function seedLaporan(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "laporan" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS laporan (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        transaksi_id UUID NOT NULL,
        jenis_laporan VARCHAR(255) NOT NULL,
        metode_pembayaran VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "laporan" table`);

    // Insert data into the "laporan" table
    const insertedLaporan = await Promise.all(
      laporan.map(
        (laporan) => client.sql`
        INSERT INTO laporan (transaksi_id, jenis_laporan, metode_pembayaran, date, image_url)
        VALUES (${laporan.transaksi_id}, ${laporan.jenis_laporan}, ${laporan.metode_pembayaran}, ${laporan.date}, ${laporan.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedLaporan.length} laporan`);

    return {
      createTable,
      laporan: insertedLaporan,
    };
  } catch (error) {
    console.error('Error seeding laporan:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedCustomers(client);
  await seedProduk(client);
  await seedTransaksi(client);
  await seedLaporan(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});