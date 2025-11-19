<script lang="ts">
    let formData = $state({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	let submitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		console.log('Form submitted:', formData);
		submitted = true;
		
		// Reset form after 3 seconds
		setTimeout(() => {
			submitted = false;
			formData = {
				name: '',
				email: '',
				subject: '',
				message: ''
			};
		}, 3000);
	}
</script>

<div class="row">
	<div class="col-lg-8 mx-auto">
		<h1 class="mb-4">Contact Us</h1>
		
		{#if submitted}
			<div class="alert alert-success" role="alert">
				<h4 class="alert-heading">Thank you!</h4>
				<p>Your message has been sent successfully. We'll get back to you soon.</p>
			</div>
		{/if}

		<div class="card">
			<div class="card-body">
				<form on:submit={handleSubmit}>
					<div class="mb-3">
						<label for="name" class="form-label">Name</label>
						<input 
							type="text" 
							class="form-control" 
							id="name" 
							bind:value={formData.name}
							required 
							placeholder="Enter your name"
						/>
					</div>

					<div class="mb-3">
						<label for="email" class="form-label">Email address</label>
						<input 
							type="email" 
							class="form-control" 
							id="email" 
							bind:value={formData.email}
							required 
							placeholder="name@example.com"
						/>
					</div>

					<div class="mb-3">
						<label for="subject" class="form-label">Subject</label>
						<input 
							type="text" 
							class="form-control" 
							id="subject" 
							bind:value={formData.subject}
							required 
							placeholder="What is this about?"
						/>
					</div>

					<div class="mb-3">
						<label for="message" class="form-label">Message</label>
						<textarea 
							class="form-control" 
							id="message" 
							rows="5" 
							bind:value={formData.message}
							required 
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
