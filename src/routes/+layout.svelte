<script context="module">
  export const load = async ({ url }) => ({ props: { path: url.pathname } });
</script>

<script>
  import 'src/app.css';
  import HireMe from '../components/HireMe/HireMe.svelte';
  import Header from '../components/Header.svelte';
  import LicenseInfo from '../components/LicenseInfo.svelte';
  import FloatingFooter from '../components/FloatingFooter.svelte';
  import LayoutTransition from 'src/layout/layout-transition.svelte';

  export let path;
</script>

<title> Baba Ali </title>

<div data-theme="dark">
  <HireMe />
  <Header />
  <LayoutTransition {path}>
    <slot />
  </LayoutTransition>
  <LicenseInfo />
  <FloatingFooter />
</div>
