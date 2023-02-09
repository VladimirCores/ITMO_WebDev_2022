<script setup lang='ts'>
const user = useUser().getUser();
definePageMeta({
  layout: 'custom',
});
const booksList = useState('books');
console.log('booksList', booksList.value);
</script>
<template>
  <div>
    <div>Books Page: {{ user.name }}</div>
    <NuxtLink to="/">Home</NuxtLink>
    <div v-for="(book, index) in booksList">{{index + 1}}. {{ book.title }}</div>
  </div>
</template>
