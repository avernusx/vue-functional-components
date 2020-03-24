<script>
let ComponentWithSlots = {
  functional: true,
  render(createElement, context) {
    return (
      createElement('div', [
        createElement('header', context.slots().header),
        createElement('div', context.slots().default),
        createElement('footer', context.slots().footer)
      ])
    )
  }
}

let ParentComponent = {
  functional: true,
  render(createElement) {
    return (
      createElement(ComponentWithSlots, {}, [
        createElement('div', { slot: 'header' }, 'Шапка'),
        createElement('div', { slot: 'default' }, 'Контент'),
        createElement('div', { slot: 'footer' }, 'Подвал')
      ])
    )
  }
}

export default {
  render(createElement) {
    return createElement(ParentComponent)
  }
}
</script>

