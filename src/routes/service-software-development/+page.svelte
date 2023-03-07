<script lang="ts">
  import { lighten } from 'polished';
  import ServiceLayout from 'src/layout/service-layout.svelte';
  import MainContent from 'src/components/MainContent.svelte';
  import { sectionBackgrounds } from 'src/constants';
</script>

<ServiceLayout
  --bg-color={sectionBackgrounds.SoftwareDevelopment}
  title="Custom Software Development"
>
  <p slot="description">
    Running an organization? With top-notch software automating your processes away, it becomes
    easier to optimize and scale for success.
  </p>
  <img
    slot="illustration"
    src="/3d-illustrations/custom-software.png"
    alt="Web development hero image"
  />
</ServiceLayout>
