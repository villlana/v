<template>
  <div>
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <article>
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <p>tags {{ article.tags }} </p>
      <img :src="article.img" :alt="article.alt" />
      <p>Article last updated: {{ article.updatedAt }}</p>

      <nuxt-content :document="article" />

      <prev-next :prev="prev" :next="next" />
    </article>
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