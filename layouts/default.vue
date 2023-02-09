<template>
  <div>
    <header>
      <slot name="header">
        Default Header
      </slot>
    </header>
    <div>
      <div>Menu</div>
      <slot name="menu">
        No navigation
      </slot>
    </div>
    <main>
      <slot />
    </main>
  </div>
</template>