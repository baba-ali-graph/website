<script lang="ts">
  import { darken, lighten } from 'polished';
  import ServiceLayout from 'src/layout/service-layout.svelte';
  import { sectionBackgrounds } from 'src/constants';
</script>

<ServiceLayout --bg-color={sectionBackgrounds.ToolsAndIntegrations} title="Tools and Integration"
  >s
  <p slot="description">
    Already have a system running, but you need to integrate with other tools and services? Whether
    it’s a bot that collect insights periodically and mails them to you or a custom service that
    sends congratulatory message to your clients. I’m sure about cooking something that is just
    right for your needs.
  </p>
  <img
    slot="illustration"
    src="/3d-illustrations/tools-and-integration.png"
    alt="Web development hero image"
  />
</ServiceLayout>
