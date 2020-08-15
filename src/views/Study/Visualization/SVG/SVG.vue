<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">SVG基础</div>
    </div>
    <div class="panel-body panel-body-box">
      <div v-for="(cfgItem, cfgKey, cfgIndex) in DEFAULT_CONFIG"
            :key="cfgIndex"
            class="box">
        <blockquote>{{ cfgKey }}</blockquote>
        <a-row :gutter="[16, 16]">
          <a-col v-for="(item, index) in cfgItem" :key="index" :xs="24" :sm="12" :md="8" :lg="8" :xl="6" :xxl="4">
            <a-card hoverable @click="showDialog(item.dialogName)">
              <img slot="cover" alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
              <a-card-meta :title="item.title || '暂无标题' " :description="item.description || '暂无描述'"/>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>
    <!-- 组件 -->
    <svg-rect ref="SVGRect"></svg-rect>
    <svg-circle ref="SVGCircle"></svg-circle>
    <svg-ellipse ref="SVGEllipse"></svg-ellipse>
    <svg-line ref="SVGLine"></svg-line>
    <svg-text ref="SVGText"></svg-text>
    <svg-polygon ref="SVGPolygon"></svg-polygon>
    <svg-polyline ref="SVGPolyline"></svg-polyline>
    <svg-path ref="SVGPath"></svg-path>
    <svg-clipPath ref="SVGClipPath"></svg-clipPath>
    <svg-image ref="SVGImage"></svg-image>
    <svg-use ref="SVGUse"></svg-use>
  </div>
</template>

<script>
import SVGRect from './components/SVGRect'
import SVGCircle from './components/SVGCircle'
import SVGEllipse from './components/SVGEllipse'
import SVGLine from './components/SVGLine'
import SVGText from './components/SVGText'
import SVGPolygon from './components/SVGPolygon'
import SVGPolyline from './components/SVGPolyline'
import SVGPath from './components/SVGPath'
import SVGClipPath from './components/SVGClipPath'
import SVGImage from './components/SVGImage'
import SVGUse from './components/SVGUse'

const DEFAULT_CONFIG = {
  A: [],
  B: [],
  C: [
    { dialogName: 'SVGCircle', title: 'circle' },
    { dialogName: 'SVGClipPath', title: 'clipPath' }
  ],
  D: [],
  E: [
    { dialogName: 'SVGEllipse', title: 'ellipse' }
  ],
  F: [],
  G: [],
  H: [],
  I: [
    { dialogName: 'SVGImage', title: 'image' }
  ],
  J: [],
  K: [],
  L: [
    { dialogName: 'SVGLine', title: 'line' }
  ],
  M: [],
  N: [],
  O: [],
  P: [
    { dialogName: 'SVGPolygon', title: 'polygon', description: '封闭直线' },
    { dialogName: 'SVGPolyline', title: 'polyline', description: '不封闭直线' },
    { dialogName: 'SVGPath', title: 'path' }
  ],
  Q: [],
  R: [
    { dialogName: 'SVGRect', title: 'rect' }
  ],
  S: [],
  T: [
    { dialogName: 'SVGText', title: 'text' }
  ],
  U: [
    { dialogName: 'SVGUse', title: 'use' }
  ],
  V: [],
  W: [],
  X: [],
  Y: [],
  Z: []
}

export default {
  name: 'SVGStudy',
  components: {
    'svg-rect': SVGRect,
    'svg-circle': SVGCircle,
    'svg-ellipse': SVGEllipse,
    'svg-line': SVGLine,
    'svg-text': SVGText,
    'svg-polygon': SVGPolygon,
    'svg-polyline': SVGPolyline,
    'svg-path': SVGPath,
    'svg-clipPath': SVGClipPath,
    'svg-image': SVGImage,
    'svg-use': SVGUse
  },
  data() {
    return {
      DEFAULT_CONFIG
    }
  },
  methods: {
    showDialog(refName) {
      this.$refs[refName].showDialog()
    }
  }
}
</script>

<style scoped>

</style>
