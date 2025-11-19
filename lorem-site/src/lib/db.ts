import mysql from 'mysql2/promise';

const pool = mysql.createPool({
	host: process.env.DB_HOST || 'localhost',
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || 'root',
	database: process.env.DB_NAME || 'lorem_db',
	port: parseInt(process.env.DB_PORT || '3306'),
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});

export interface ContactMessage {
	id?: number;
	name: string;
	email: string;
	subject: string;
	message: string;
	created_at?: Date;
}

export async function saveContactMessage(data: Omit<ContactMessage, 'id' | 'created_at'>): Promise<number> {
	const connection = await pool.getConnection();
	try {
		const [result] = await connection.execute(
			'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
			[data.name, data.email, data.subject, data.message]
		);
		return (result as any).insertId;
	} finally {
		connection.release();
	}
}

export default pool;
