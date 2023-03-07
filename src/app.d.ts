/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}


declare module "*.svg?component" {
	import {ComponentType, SvelteComponentTyped} from 'svelte'
	import {SVGAttributes} from 'svelte/elements'

	const content: ComponentType<SvelteComponentTyped<SVGAttributes<SVGSVGElement>>>
	export default content
}

declare module "*,svg?src" {
	const content: string
	export default content
}