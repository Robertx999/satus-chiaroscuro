<script>
	import { onMount } from 'svelte';

	let date = new Date();

	$: time = date;
	$: month = date.getMonth();

	let monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	onMount(() => {
		setInterval(() => {
			date = new Date();
		}, 1000);
	});
</script>

<div class="flex flex-col">
	<div class="grid grid-flow-col gap-5 justify-between text-center auto-cols-max">
		<div
			class="flex flex-col p-2 bg-neutral/80 border border-slate-600 backdrop-blur rounded-box text-neutral-content"
		>
			<span class="mask countdown font-mono text-5xl">
				<span style="--value:{time.getHours()};" />
			</span>
			hours
		</div>
		<div
			class="flex flex-col p-2 bg-neutral/80 border border-slate-600 backdrop-blur rounded-box text-neutral-content"
		>
			<span class="mask countdown font-mono text-5xl">
				<span style="--value:{time.getMinutes()};" />
			</span>
			min
		</div>
		<div
			class="flex flex-col p-2 bg-neutral/80 border border-slate-600 backdrop-blur rounded-box text-neutral-content"
		>
			<span class="mask countdown font-mono text-5xl">
				<span style="--value:{time.getSeconds()};" />
			</span>
			sec
		</div>
	</div>
	<div class="h-5" />
	<div
		class="leading-8 flex flex-row justify-evenly p-3 bg-neutral/80 border border-slate-600 backdrop-blur rounded-box text-neutral-content text-center text-2xl"
	>
		<span class="flex flex-row gap-2 font-bold">
			{monthNames[month]}
			<div
				class="px-1 bg-neutral border border-slate-600 rounded-md text-neutral-content leading-7"
			>
				{time.getDate()}
			</div>
		</span>
		<span>{dayNames[time.getDay()]}</span>
	</div>
</div>

<style>
	.mask {
		mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
	}
</style>
