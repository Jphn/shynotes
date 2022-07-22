<template>
	<div class="w-content">
		<h2>shyNotes</h2>

		<span>“Dedication is a talent all on it’s on.”</span>

		<div class="w-social">
			<a href="https://www.linkedin.com/in/jphn75179216/">
				<img src="@/assets/images/linkedin-logo.svg" alt="linkedin" />
			</a>

			<a href="https://www.instagram.com/jopee_l/">
				<img src="@/assets/images/instagram-logo.svg" alt="instagram" />
			</a>

			<a href="https://github.com/Jphn">
				<img src="@/assets/images/github-logo.svg" alt="github" />
			</a>
		</div>

		<p>Copyright ©2022 shyNotes. Developed by @Jphn.</p>
	</div>
</template>

<style scoped>
	.w-content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		justify-content: center;
		align-items: center;
	}

	span {
		font-size: 2rem;
		font-family: 'Roboto Condensed', sans-serif;

		text-align: center;
	}

	.w-social {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}

	p {
		font-size: 1.8rem;
	}

	img {
		width: 3.4rem;
		height: 3.4rem;
	}
</style>
