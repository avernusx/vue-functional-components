<template>
  <div>
    <router-link to="/benchmarks/common">Бенчмарк обычных компонентов</router-link>
    <router-link to="/benchmarks/functional">Бенчмарк функциональных компонентов</router-link>
    <router-link to="/slots/js">Слоты: js-шаблон</router-link>
    <router-link to="/slots/jsx">Слоты: jsx-шаблон</router-link>
    <router-link to="/slots/html">Слоты: html-шаблон</router-link>
    <router-link to="/scoped-slots/js">Слоты с ограниченной областью видимости: js-шаблон</router-link>
    <router-link to="/scoped-slots/jsx">Слоты с ограниченной областью видимости: jsx-шаблон</router-link>
    <router-link to="/scoped-slots/html">Слоты с ограниченной областью видимости: html-шаблон</router-link>
    <router-view/>
  </div>  
</template>