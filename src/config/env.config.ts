import dotenv from 'dotenv';

dotenv.config();

const DATABASE = process.env.DATABASE_URL || '';

export default DATABASE;