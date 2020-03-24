<template>
  <div>
    <TestComponent v-for="item, idx in items" :number="idx" :key="idx"/>
  </div>
</template>

<script>
let TestComponent = {
  functional: true,
  render(createHtml, context) {
    let number = context.props.number
    let dataVariable = 'состояние компонента'
    let computedVariable = dataVariable + ' ' + number
    return (
      <div>
        {number} {dataVariable} {computedVariable}
      </div>
    )
  }
}

export default {
  components: { TestComponent },
  data() {
    return {
      items: Array(100000)
    }
  }
}
</script>