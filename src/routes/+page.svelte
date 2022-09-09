<svelte:head>
	<title>KekOnTheWorld | Rewriting</title>
</svelte:head>

<script lang="ts">
	const title = "Rewriting...";

	const opacityDuration = 200;
	const letterSpacing = 50;

	const _animate: { [key: number]: boolean } = {};

	function animate(letter: number) {
		if (!_animate[letter]) {
			_animate[letter] = true;

			setTimeout(() => (_animate[letter] = false), 1000);
		}
	}

	let c = 0;
	const cmax = title.length * letterSpacing + opacityDuration;

	const intv = setInterval(() => {
		if (c % letterSpacing === 0) animate(c / letterSpacing);

		if (c > cmax) clearInterval(intv);

		c += 5;
	}, 5);

	const onTouchMove = function (e) {
		for (const touch of e.changedTouches) {
		}
	} as svelte.JSX.TouchEventHandler<Window>;
</script>

<svelte:window on:touchmove={onTouchMove} />

<main>
	<h1 class="text-5xl">
		{#each title as letter, i}
			{@const _i = i * letterSpacing}
			<span
				on:mouseenter={() => animate(i)}
				style:opacity={Math.min(1, Math.max(0, c - _i) / opacityDuration)}
				class:animate={_animate[i]}>{letter}</span
			>
		{/each}
	</h1>
	<p class="text-lg">Come back later to see something awensome</p>
</main>

<style lang="postcss">
	main {
		@apply w-full h-full flex flex-col justify-center items-center gap-5 bg-gradient-to-t from-red-400 to-orange-300;
	}

	p {
		opacity: 0;
		animation: 1s fadein ease forwards;
		animation-delay: 1s;
	}

	@keyframes fadein {
		to {
			opacity: 1;
		}
	}

	h1 span {
		opacity: 0;
		display: inline-block;
		animation-fill-mode: both;
		animation-duration: 1s;
		cursor: pointer;
		user-select: none;
	}

	h1 span.animate {
		animation-name: rubberBand;
	}

	@keyframes rubberBand {
		0% {
			transform: scale3d(1, 1, 1);
		}
		30% {
			transform: scale3d(1.25, 0.75, 1);
		}
		40% {
			transform: scale3d(0.75, 1.25, 1);
		}
		50% {
			transform: scale3d(1.15, 0.85, 1);
		}
		65% {
			transform: scale3d(0.95, 1.05, 1);
		}
		75% {
			transform: scale3d(1.05, 0.95, 1);
		}
		100% {
			transform: scale3d(1, 1, 1);
		}
	}
</style>
