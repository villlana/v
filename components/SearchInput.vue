<template>
  <div class="search-wrapper">
    <div class="input-field search-main" id="searchqqq">
      <i class="material-icons-outlined align-middle search-input-icon"> search </i>
      <input
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        placeholder="Search for Articles and more"
        @focus="
          toggleShowResult(true)
          toggleSearchHover(true)
        "
        @blur="toggleSearchHover(false)"
      />
    </div>
    <div v-if="articles.length && this.showResult" class="search-result">
      <h4 class="search-result-title">Search Result:</h4>
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
    formatDate(date) {
      const options = { month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    toggleSearchHover(take) {
      try {
        const baseClass = `input-field search-main`
        const inpId = document.getElementById('searchqqq')
        take
          ? (inpId.classList = `${baseClass} search-input-focused`)
          : (inpId.classList = `${baseClass}`)
      } catch (exception) {}
    },
  },
}
</script>

<style lang="scss">
.search-wrapper {
  @media (min-width: 751px) {
    min-width: 350px;
  }
  @media (max-width: 750px) {
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
  background: var(--input-base-background);
  width: 100%;
  @media (max-width: 750px) {
    width: 90%;
  }
  input {
    width: calc(100% - 30px);
    outline: none;
    border: none;
    height: 48px;
    color: var(--color-text);
    background: var(--input-base-background);
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
  background: var(--search-base-background);
  padding: 15px;
  width: 80%;
  box-shadow: 0 0 13px rgb(0 0 0 / 10%);
  z-index: 999;
  max-width: 900px;
  @media (max-width: 750px) {
    position: relative;
    top: 15px;
    width: 90%;
    margin-bottom: 30px;
  }
}
.search-input-focused {
  border: 3px solid var(--search-border);
  // box-sizing: content-box;
  .search-input-icon {
    margin-left: -3px;
  }
}
.search-result-title {
  display: none;
  @media (max-width: 750px) {
    display: inline-block;
  }
}
</style>