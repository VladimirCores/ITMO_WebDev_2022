<script setup lang="ts">

const setting = useRuntimeConfig();
const { data: user, pending: isUserLoading } = useUser().getUser(setting);
const { data: comments, pending: isCommentsLoading } = useComments().getComments(setting);
const { data: books, pending: isBooksLoading } = useFetch('/api/books');
console.log('books:', books);
useState('books', () => books);
console.log('App -> Loading:', setting.DATA_API);
</script>
<template>
  <div v-if="isUserLoading && isCommentsLoading && isBooksLoading">Loading...</div>
  <NuxtLayout v-else>
    <div>User {{ user.name }}</div>
    <NuxtPage :transition="{
        name: 'slide-left',
        mode: 'out-in'
      }" />
  </NuxtLayout>
</template>
