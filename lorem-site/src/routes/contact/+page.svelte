<script lang="ts">
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<div class="row">
	<div class="col-lg-8 mx-auto">
		<h1 class="mb-4">Contact Us</h1>
		
		{#if form?.success}
			<div class="alert alert-success" role="alert">
				<h4 class="alert-heading">Thank you!</h4>
				<p>{form.message}</p>
			</div>
		{/if}

		{#if form?.error}
			<div class="alert alert-danger" role="alert">
				<strong>Error:</strong> {form.error}
			</div>
		{/if}

		<div class="card">
			<div class="card-body">
				<form method="POST">
					<div class="mb-3">
						<label for="name" class="form-label">Name</label>
						<input 
							type="text" 
							class="form-control" 
							id="name"
							name="name"
							value={form?.name || ''}
							required 
							minlength="2"
							maxlength="100"
							placeholder="Enter your name"
						/>
					</div>

					<div class="mb-3">
						<label for="email" class="form-label">Email address</label>
						<input 
							type="email" 
							class="form-control" 
							id="email"
							name="email"
							value={form?.email || ''}
							required 
							maxlength="254"
							placeholder="name@example.com"
						/>
					</div>

					<div class="mb-3">
						<label for="subject" class="form-label">Subject</label>
						<input 
							type="text" 
							class="form-control" 
							id="subject"
							name="subject"
							value={form?.subject || ''}
							required 
							minlength="3"
							maxlength="200"
							placeholder="What is this about?"
						/>
					</div>

					<div class="mb-3">
						<label for="message" class="form-label">Message</label>
						<textarea 
							class="form-control" 
							id="message"
							name="message"
							rows="5"
							value={form?.message || ''}
							required 
							minlength="10"
							maxlength="2000"
							placeholder="Your message here..."
						></textarea>
					</div>

					<button type="submit" class="btn btn-primary">Send Message</button>
					<a href="/" class="btn btn-secondary ms-2">Back to Home</a>
				</form>
			</div>
		</div>

		<div class="row mt-5">
			<div class="col-md-4">
				<div class="card text-center">
					<div class="card-body">
						<h5 class="card-title">📧 Email</h5>
						<p class="card-text">contact@lorem-site.com</p>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card text-center">
					<div class="card-body">
						<h5 class="card-title">📞 Phone</h5>
						<p class="card-text">+1 (555) 123-4567</p>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card text-center">
					<div class="card-body">
						<h5 class="card-title">📍 Location</h5>
						<p class="card-text">123 Lorem St, City</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
