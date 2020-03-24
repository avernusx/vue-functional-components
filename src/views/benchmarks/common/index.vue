<template>
  <div>
    <TestComponent v-for="item, idx in items" :number="idx" :key="idx"/>
  </div>
</template>

<script>
import TestComponent from './component'

export default {
  components: { TestComponent },
  data() {
    return {
      items: Array(100000)
    }
  }
}
</script>