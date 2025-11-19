import { fail, type RequestEvent } from '@sveltejs/kit';
import { saveContactMessage } from '$lib/db';

function sanitizeInput(input: string): string {
	return input
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#x27;')
		.replace(/\//g, '&#x2F;')
		.trim();
}

function isValidEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function validateLength(value: string, min: number, max: number): boolean {
	const length = value.trim().length;
	return length >= min && length <= max;
}

export const actions = {
	default: async ({ request }: RequestEvent) => {
		const formData = await request.formData();
		
		const name = formData.get('name')?.toString() || '';
		const email = formData.get('email')?.toString() || '';
		const subject = formData.get('subject')?.toString() || '';
		const message = formData.get('message')?.toString() || '';

		const sanitizedData = {
			name: sanitizeInput(name),
			email: sanitizeInput(email),
			subject: sanitizeInput(subject),
			message: sanitizeInput(message)
		};

		if (!validateLength(sanitizedData.name, 2, 100)) {
			return fail(400, {
				error: 'Name must be between 2 and 100 characters.',
				name,
				email,
				subject,
				message
			});
		}

		if (!isValidEmail(sanitizedData.email) || !validateLength(sanitizedData.email, 5, 254)) {
			return fail(400, {
				error: 'Please enter a valid email address.',
				name,
				email,
				subject,
				message
			});
		}

		if (!validateLength(sanitizedData.subject, 3, 200)) {
			return fail(400, {
				error: 'Subject must be between 3 and 200 characters.',
				name,
				email,
				subject,
				message
			});
		}

		if (!validateLength(sanitizedData.message, 10, 2000)) {
			return fail(400, {
				error: 'Message must be between 10 and 2000 characters.',
				name,
				email,
				subject,
				message
			});
		}

		const suspiciousPatterns = /(script|javascript|onerror|onload|eval|expression|vbscript|<iframe|<object|<embed)/i;
		const allText = `${sanitizedData.name} ${sanitizedData.email} ${sanitizedData.subject} ${sanitizedData.message}`;
		
		if (suspiciousPatterns.test(allText)) {
			return fail(400, {
				error: 'Invalid input detected. Please remove any script or code from your message.',
				name,
				email,
				subject,
				message
			});
		}

		try {
			const insertId = await saveContactMessage(sanitizedData);
			console.log(`Contact message saved with ID: ${insertId}`);
			
			return {
				success: true,
				message: 'Your message has been sent successfully!'
			};
		} catch (error) {
			console.error('Database error:', error);
			return fail(500, {
				error: 'Failed to save your message. Please try again later.',
				name,
				email,
				subject,
				message
			});
		}
	}
};
