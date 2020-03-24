<script>
let ComponentWithSlots = {
  functional: true,
  render(createElement, context) {
    return (
      <div>
        <header>{context.slots().header}</header>
        <div class="default-slot">{context.slots().default}</div>
        <footer>{context.slots().footer}</footer>
      </div>
    )
  }
}

export default {
  functional: true,
  render() {
    return (
      <div>
        <ComponentWithSlots>
          <div {...{ slot: 'header' }}>Шапка</div>
          <div {...{ slot: 'footer' }}>Подвал</div>
          <div {...{ slot: 'default' }}>Контент</div>
        </ComponentWithSlots>
      </div>
    )
  }
}
</script>