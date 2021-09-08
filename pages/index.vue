<template>
  <div class="w-100 d-flex justify-content-center mt-2">
    <div class="col-lg-9">
      <div v-if="articles.length" class="arcticles-excerpt">
        <div
          v-for="article of articles"
          :key="article.slug"
          class="search-result-single"
        >
          <NuxtLink
            :to="{ name: 'article-slug', params: { slug: article.slug } }"
          >
            
            <div class="w-100">
              <h4 class="heading-hl">{{ article.title }}</h4>
            </div>
          </NuxtLink>
            <tag-base
              v-for="(tag, index) in article.taggroup"
              :key="`tag-${index}`"
              :data-tag-type="tag"
            >
              {{ tag }}
            </tag-base>
            <div class="search-result-description">
              {{ article.description }}
            </div>

        </div>
      </div>
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
  async asyncData({ $content }) {
    const articles = await $content('articles')
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
