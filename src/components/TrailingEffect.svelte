<script>
  let isMobile = false;
  let x = -100;
  let y = -100;

  const handleMouseMove = (event) => {
    if (window.innerWidth <= 768) {
      isMobile = true;
      return;
    }

    x = event.clientX;
    y = event.clientY;
  };
</script>

<div on:mousemove={handleMouseMove} style="position: relative; height: 100vh;">
  {#if !isMobile}
    <div class="trailing-effect" style="left: {x}px; top: {y}px;" />
  {/if}
</div>

<style>
  .trailing-effect {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    transition: all 0.3s ease-out;
  }
</style>
