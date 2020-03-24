<template functional>
  <div>
    <component :is="injections.components.ComponentWithSlots">
      <template slot="header">Шапка</template>
      <template slot="footer">Подвал</template>
      <div>Контент</div>
    </component>
  </div>
</template>

<script>
import ComponentWithSlots from "./component";

export default {
  inject: {
    components: {
      default: {
        ComponentWithSlots
      }
    }
  }
}
</script>