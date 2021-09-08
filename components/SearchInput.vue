<template>
  <div>
    <div 
      class="input-field search-main">
      <i class="material-icons-outlined align-middle"> search </i>
      <input
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        placeholder="Search Articles"
        @focus="toggleShowResult(true)"
      />
    </div>
    <div v-if="articles.length && this.showResult" class="search-result">
      <div v-for="article of articles" :key="article.slug" class="search-result-single">
        <NuxtLink
          :to="{ name: 'article-slug', params: { slug: article.slug } }"
          @click.native="toggleShowResult()"
        >
          <h4>{{ article.title }}</h4>
          <span 
            v-for="(tag, index) in article.taggroup" 
            :key="`tag-${index}`"
            class="article-tag" 
            :class="tag">
              {{ tag }}
          </span> 
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
      this.articles.length ? this.toggleShowResult(true) : this.toggleShowResult(false)
    },
  },
  methods: {
    toggleShowResult(status) {
      if (status) {
        this.showResult = status
      } else {
        this.showResult = !this.showResult
      }
      
    }
  },
}
</script>

<style lang="scss">
.input-field {
  display: inline-block;
  border-radius: 7px;
  border: none;
  box-shadow: 0 0 13px rgb(0 0 0 / 10%);
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
}
.search-main input {
  outline: none;
  border: none;
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
.article-tag {
  font-size: 80%;
  padding: 5px;
  margin-right: 10px;
  &.ZBrush {
    background: #000;
    color: #fff;
  }
  &.Blender {
    color: #fff;
    background: #d68317;
  }
  &.Photoshop {
    color: #fff;
    background: #1d65d1;
  }
}

</style>