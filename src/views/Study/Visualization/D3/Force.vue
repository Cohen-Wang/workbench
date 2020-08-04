<template>
  <div id="force-box" ref="force-box" class="graph-box">
    <!-- ... -->
  </div>
</template>

<script>
import config from './Force/config'
import { realData as data } from './Force/data'
import show from './Force/main'
// 背景图片
import DiscoveryBgLight from '@/assets/image/discovery_bg_light.png'
import DiscoveryBgBlue from '@/assets/image/discovery_bg_blue.png'
import DiscoveryBgDark from '@/assets/image/discovery_bg_dark.png'

const THEME_BG = {
  'light': DiscoveryBgLight,
  'blue': DiscoveryBgBlue,
  'dark': DiscoveryBgDark
}
const nodes = data.nodes
const edges = data.edges
const theme = 'dark'

export default {
  name: 'Force',
  mounted() {
    this.$nextTick(() => {
      document.getElementById('force-box').style.backgroundImage = `url("${THEME_BG[theme]}")`
      this.show()
    })
  },
  methods: {
    show() {
      // 处理连线的source的id
      edges.forEach(edge => {
        edge['source'] = nodes.findIndex(node => node.id === edge.source) // 将id 变为index
      })

      edges.forEach(edge => {
        edge['target'] = nodes.findIndex(node => node.id === edge.target) // 将id 变为index
      })

      show(edges, nodes, config, theme, this.$refs['force-box'])
    }
  }
}
</script>

<style lang="less" scoped>
  .graph-box {
    background: url("../../../../assets/image/discovery_bg_blue.png");
    height: calc(100vh - 115px);
    user-select: none;
  }
</style>
