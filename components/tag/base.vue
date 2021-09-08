<template>
  <span class="article-tag" :class="dynamicClassData" @click="$emit('click')">
    <img v-if="dynamicImagePath !== ''" height="30" :src="`${dynamicImagePath}`" />
    <!-- Default Value -->
    <slot></slot>
  </span>
</template>

<script>
import { isDefined } from '~/plugins/variables'
export default {
  data() {
    return {
      dynamicClassData: '',
      tags: {
        ZBrush: 'zbrush_white.png',
        Photoshop: 'photoshop.png',
        Blender: 'blender.png',
        DAZ: 'daz3d.png',
        Skyrim: 'prisbae.png'
      },
      dynamicImagePath: ''
    }
  },
  mounted() {
    if (isDefined(this.$el.getAttribute('data-tag-type'))) {
      this.dynamicClassData = this.$el.getAttribute('data-tag-type')
    } else {
      this.dynamicImagePath = '';
    }
    try {
      if (this.$el.getAttribute('data-tag-type') in this.tags) {
        const prodprepend = process.env.NODE_ENV === 'production' ? '/v/programs/' : '/programs/'
        this.dynamicImagePath = `${prodprepend}${this.tags[this.$el.getAttribute('data-tag-type')]}`
      }
    } catch (exception) {}
  },
}
</script>