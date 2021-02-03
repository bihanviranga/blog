<script context="module">
	import { findPost } from "../../posts";

	// sapper calls this to load our data
	export function preload(page) {
		const post = findPost(page.params.permalink);
		// return a list of props
		return { post };
	}
</script>

<script>
	// this prop is filled from the result of the preload function
	export let post;
</script>

<h1>{post.title}</h1>

{@html post.html}

