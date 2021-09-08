<template>
  <div class="search-wrapper">
    <div class="input-field search-main">
      <i class="material-icons-outlined align-middle"> search </i>
      <input
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        placeholder="Search for Articles and more"
        @focus="toggleShowResult(true)"
      />
    </div>
    <div v-if="articles.length && this.showResult" class="search-result">
      <div
        v-for="article of articles"
        :key="article.slug"
        class="search-result-single"
      >
        <NuxtLink
          :to="{ name: 'article-slug', params: { slug: article.slug } }"
          @click.native="toggleShowResult()"
        >
          <div class="w-100 d-flex">
            <h4 class="heading-hl">{{ article.title }}</h4>
          </div>
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
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      showResult: false,
      articles: [],
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
      this.articles.forEach((article) => {
        try {
          article.taggroup = []
          article.tags.split(',').forEach((tag) => {
            article.taggroup.push(tag.trim())
          })
        } catch (exception) {}
      })
      this.articles.length
        ? this.toggleShowResult(true)
        : this.toggleShowResult(false)
    },
  },
  methods: {
    toggleShowResult(status) {
      if (status) {
        this.showResult = status
      } else {
        this.showResult = !this.showResult
      }
    },
  },
}
</script>

<style lang="scss">
.search-wrapper {
  @media (min-width: 701px) {
    min-width: 402px;
  }
  @media (max-width: 700px) {
    width: 100%;
    text-align: center;
    margin-top: 9px;
  }
}
.input-field {
  display: inline-block;
  border-radius: 7px;
  border: none;
  box-shadow: 0 0 8px rgb(0 0 0 / 10%);
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
}
.search-main {
  background: #ffffff;
  width: 80%;
  input {
    width: calc(100% - 30px);
    outline: none;
    border: none;
    height: 48px;
  }
  &:focus,
  &:focus-visible {
    outline: none;
    border: none;
  }
}
.search-result {
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 86px;
  background: #fff;
  padding: 15px;
  width: 80%;
  box-shadow: 0 0 13px rgb(0 0 0 / 10%);
  z-index: 999;
  max-width: 900px;
  @media (max-width: 700px) {
    positioN: relative;
  }
}
.search-result-single {
  margin-bottom: 15px;
  a {
    text-decoration: none;
  }
}
.search-result-description {
  color: #000;
}
</style>