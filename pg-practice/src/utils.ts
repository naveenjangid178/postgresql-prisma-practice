import { Client } from 'pg';

export async function getClient() {
    // const client = new Client("postgres://wzsxsnxg:LHZ9Cv4QoZ1zctxapkOq2ch672-o9UQe@trumpet.db.elephantsql.com/wzsxsnxg");
    const client = new Client({
        connectionString: "postgresql://postgres:COxEAiueSqoyBPYmAFCwfvpqvCqmYFEG@postgres.railway.internal:5432/railway",
        ssl: {
            rejectUnauthorized: false, // Necessary for hosted databases with SSL
        },
    })
    await client.connect();
    return client;
}