<template>
  <div class="row">
    <div class="col-lg-1">
      <nav class="article-inline-nav">
        <ul>
          <li v-for="link of article.toc" :key="link.id">
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div class="col-lg-11">
      <article class="article-post">
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <p>tags {{ article.tags }} </p>
        <img :src="article.img" :alt="article.alt" />
        <p>Article last updated: {{ article.updatedAt }}</p>

        <nuxt-content :document="article" />

        <prev-next :prev="prev" :next="next" />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
    }
  },
}
</script>

<style lang="scss">
.article-inline-nav {
    font-size: 13px;
}

.article-inline-nav ul {
    list-style-type: none;
    margin: 0;
    padding-left: 0;
}
</style>
