<template>
  <div class="d-flex w-100 justify-content-between">
    <span v-if="prev" class="btn-article-prev heading-inl">
      <NuxtLink
        v-if="prev"
        :to="{ name: 'article-slug', params: { slug: prev.slug } }"
        class="w-100"
      >
        <i class="material-icons-outlined mr-2 align-middle">arrow_back</i>
        {{ prev.title }}
      </NuxtLink>
    </span>
    <span v-else>&nbsp;</span>
    <span v-if="next" class="btn-article-next heading-inl">
      <NuxtLink
        :to="{ name: 'article-slug', params: { slug: next.slug } }"
        class="w-100"
      >
        <i class="material-icons-outlined mr-2 align-middle">arrow_forward</i>
        {{ next.title }}
      </NuxtLink>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style lang="scss">
.btn-article {
  &-next,
  &-prev {
    padding: 10px;
    min-width: 35%;
    text-align: center;
    a {
      text-decoration: none;
      color: var(--color-text-lighter);
    }
  }
}
</style>