<script lang="ts">
  import { lighten } from 'polished';
  import ServiceLayout from 'src/layout/service-layout.svelte';
  import MainContent from 'src/components/MainContent.svelte';
  import { sectionBackgrounds } from 'src/constants';
</script>

<ServiceLayout --bg-color={sectionBackgrounds.WebDevelopment} title="Website Development">
  <p slot="description">
    With the continual influx of individuals and businesses into the digital space, having a website
    that stands out can be quite important in keeping you ahead of the competiton and giving you an
    edge over your competitors
  </p>
  <img
    slot="illustration"
    src="/3d-illustrations/web-development.png"
    alt="Web development hero image"
  />
</ServiceLayout>
