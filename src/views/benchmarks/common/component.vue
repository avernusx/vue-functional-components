<template>
  <div>{{ number }} {{ dataVariable }} {{ computedVariable }}</div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      dataVariable: 'состояние компонента'
    }
  },
  computed: {
    computedVariable() {
      return this.dataVariable + ' ' + this.number
    }
  }
}
</script>