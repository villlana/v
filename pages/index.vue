<template>
  <div class="w-100 d-flex justify-content-center mt-2">
    <div class="col-lg-9">
      <div v-if="articles.length" class="arcticles-excerpt mt-4">
        <div
          v-for="article of articles"
          :key="article.slug"
          class="search-result-single"
        >
          <NuxtLink
            :to="{ name: 'article-slug', params: { slug: article.slug } }"
          >
            <div class="w-100">
              <h3 class="heading-hl">{{ article.title }}</h3>
            </div>
          </NuxtLink>
          <img
            v-if="article.img"
            :src="article.img"
            class="article-teaser-img"
            :alt="article.alt"
          />
          <div class="article-tags-wrapper">
            <tag-base data-time="true">
              <i class="material-icons-outlined align-middle">edit_calendar</i>
              {{ formatDate(article.updatedAt) }}
            </tag-base>
            <tag-base data-time="true">
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
          </div>

          <div class="search-result-description mt-2">
            {{ article.description }}
          </div>
        </div>
      </div>
      <misc-overlay />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    }
  },
  methods: {
    formatDate(date) {
      const options = { month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .without(['body'])
      .limit(50)
      .sortBy('createdAt', 'desc')
      .fetch()
    articles.forEach((article) => {
      try {
        article.taggroup = []
        article.tags.split(',').forEach((tag) => {
          article.taggroup.push(tag.trim())
        })
      } catch (exception) {}
    })
    return {
      articles,
    }
  },
}
</script>
