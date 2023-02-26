<script lang="ts">
</script>

<footer id="footer">
	<p>&copy; <span class="font-dela">KekOnTheWorld</span> 2023</p>
	<div class="links">
		<a href="/legal/imprint">Imprint</a>
	</div>
	<a href={"#"}>Back to top</a>
</footer>

<style lang="postcss">
	footer {
		@apply flex flex-col gap-y-2 py-8 font-inter bg-white/20 backdrop-blur-lg;
	}

	:global(head.dark ~ body) footer {
		@apply bg-black/40;
	}
</style>
