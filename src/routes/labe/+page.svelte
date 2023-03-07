<script>
  const animationConfiguration = (Blotter) => {
    const material = materialInit(Blotter);
    const blotter = new Blotter(material);
    const elements = document.querySelectorAll('.blotted-text');
    elements.forEach((el) => elementConfiguration(Blotter, blotter, el));
  };

  const elementConfiguration = (Blotter, blotter, element) => {
    const text = new Blotter.Text(element.innerHTML);
    blotter.add(text);
    element.innerHTML = '';
    const generated = blotter.forText(text);
    console.log(generated);
    element.appendChild(generated);
  };

  const materialInit = (Blotter) => {
    const material = new Blotter.LiquidDistortMaterial();

    material.uniform.uSpeed.value = 0.6;
    material.uniform.uVolatility.value = 0.8;
    material.uniform.uSeed.value = 0.4;
    return material;
  };

  const blotterInit = () => {
    if (Blotter) animationConfiguration(Blotter);
  };
</script>

<svelte:head>
  <script src="src/lib/blotter/blotter.min.js" on:load={blotterInit}>
  </script>
</svelte:head>

<div>
  <h1 class="blotted-text">I am coming home right now</h1>
</div>
