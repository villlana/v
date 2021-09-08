<template>
  <span class="article-tag" :class="dynamicClassData" @click="$emit('click')">
    <img v-if="dynamicImagePath" height="24" :src="`/programs/${dynamicImagePath}`" />
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
        Blender: 'blender.png'
      },
      dynamicImagePath: ''
    }
  },
  mounted() {
    if (isDefined(this.$el.getAttribute('data-tag-type'))) {
      this.dynamicClassData = this.$el.getAttribute('data-tag-type')
    }
    try {
      if (this.$el.getAttribute('data-tag-type') in this.tags) {
        this.dynamicImagePath = this.tags[this.$el.getAttribute('data-tag-type')]
      }
    } catch (exception) {}
  },
}
</script>