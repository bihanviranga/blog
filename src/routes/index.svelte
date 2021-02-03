<script>
	import { posts } from "../posts";
</script>

<style>
	h1,
	p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 2em;
		}
	}
</style>

<svelte:head>
	<title>Bihan's Blog</title>
</svelte:head>

<h1>Hello, world!</h1>

<p>This is a simple description about my blog.</p>

{#each posts as post}
	<article>
		<a href={`/blog/${post.permalink}`}>
			<h2>{post.title}</h2>
			<p>{post.summary}</p>
		</a>
	</article>
{/each}
