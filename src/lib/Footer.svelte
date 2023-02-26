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
		@apply flex flex-col gap-y-2 py-8 font-inter
			bg-white/50 border-t-[1px] border-white;
	}

	:global(head.dark ~ body) footer {
		@apply bg-black/40 border-white/20;
	}
</style>
