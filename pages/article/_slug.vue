<template>
  <div class="w-100 d-flex justify-content-center article-single-focused">
    <!-- <div class="col-lg-1">
      <nav class="article-inline-nav">
        <ul>
          <li v-for="link of article.toc" :key="link.id">
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div> -->

    <div class="col-lg-9">
      <article class="article-post">
        <h3 class="w-100">{{ article.title }}</h3>
        <img :src="article.img" :alt="article.alt" />
        <tag-base>
          <i class="material-icons-outlined align-middle">edit_calendar</i>
          {{ formatDate(article.updatedAt) }}
        </tag-base>
        <tag-base>
          <i class="material-icons-outlined align-middle"> auto_stories </i>
          {{ article.reading.text }}
        </tag-base>
        <tag-base
          v-for="(tag, index) in article.taggroup"
          :key="`tag-${index}`"
          :data-tag-type="tag"
        >
          {{ tag }}
        </tag-base>

        <nuxt-content class="article-content" :document="article" />

        <prev-next :prev="prev" :next="next" />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: [],
    }
  },
  methods: {
    formatDate(date) {
      const options = { month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    article.taggroup = []
    article.tags.split(',').forEach((tag) => {
      article.taggroup.push(tag.trim())
    })

    return {
      article,
      prev,
      next,
    }
  },
  head() {
    return {
      title: `${this.article.title} - villlana's docs`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.article.description}`,
        },
      ],
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
