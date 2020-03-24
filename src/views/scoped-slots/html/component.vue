<template functional>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <div class="content">
      <slot/>
    </div>
    <footer>
      <slot name="footer"/>
    </footer>
  </div>
</template>