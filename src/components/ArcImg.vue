<script setup lang="ts"></script>

<template>
  <svg
    width="1440"
    height="1024"
    viewBox="0 0 1440 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1441.1 1.78854e-06L-0.898132 0L-0.898133 253.559C295.059 200.717 659.085 204.997 1042.33 278.886C1181.69 305.754 1315.26 340.221 1441.1 380.857L1441.1 1.78854e-06Z"
      class="background"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M479.578 1724.4C-312.069 1593.21 -894.287 1208.1 -853.816 819.245C-809.876 397.061 -48.5688 130.342 846.611 223.511C1537.61 295.429 2106.39 560.764 2309.7 872.241C2061.97 614.077 1598.12 386.042 1042.33 278.886C158.589 108.503 -622.965 308.253 -703.321 725.042C-775.187 1097.79 -261.866 1517.9 479.578 1724.4Z"
      class="first-arc"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M382.029 1695.6C-316.267 1496.01 -795.118 1104.4 -733.644 745.118C-662.058 326.734 115.13 110.616 1002.25 262.404C1712.8 383.98 2278.36 704.703 2438.57 1042.54C2257.74 718.044 1717.97 409.149 1042.33 278.886C158.589 108.503 -622.965 308.253 -703.321 725.042C-771.99 1081.21 -306.371 1480.62 382.029 1695.6Z"
      class="second-arc"
    />
  </svg>
</template>

<style scoped lang="scss">
@import '../src/styles/main.scss';
.background {
  fill: $colors-dark-background;
}

.first-arc {
  fill: $colors-primary;
}

.second-arc {
  fill: $colors-secondary;
}
</style>
