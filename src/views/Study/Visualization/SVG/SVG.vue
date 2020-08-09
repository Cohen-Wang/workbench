<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">SVG基础</div>
    </div>
    <div class="panel-body panel-body-box">
      <div class="box">
        <blockquote>A</blockquote>
      </div>
      <div class="box">
        <blockquote>C</blockquote>
        <a-button type="dashed" @click="showDialog('SVGCircle')">circle</a-button>
        <a-button type="dashed" @click="showDialog('SVGClipPath')">clipPath</a-button>
      </div>
      <div class="box">
        <blockquote>E</blockquote>
        <a-button type="dashed" @click="showDialog('SVGEllipse')">ellipse</a-button>
      </div>
      <div class="box">
        <blockquote>I</blockquote>
        <a-button type="dashed" @click="showDialog('SVGImage')">image</a-button>
      </div>
      <div class="box">
        <blockquote>L</blockquote>
        <a-button type="dashed" @click="showDialog('SVGLine')">line</a-button>
      </div>
      <div class="box">
        <blockquote>P</blockquote>
        <a-button type="dashed" @click="showDialog('SVGPolygon')">polygon</a-button>
        <a-button type="dashed" @click="showDialog('SVGPolyline')">polyline</a-button>
        <a-button type="dashed" @click="showDialog('SVGPath')">path</a-button>
      </div>
      <div class="box">
        <blockquote>R</blockquote>
        <a-button type="dashed" @click="showDialog('SVGRect')">rect</a-button>
      </div>
      <div class="box">
        <blockquote>T</blockquote>
        <a-button type="dashed" @click="showDialog('SVGText')">text</a-button>
      </div>
      <div class="box">
        <blockquote>U</blockquote>
        <a-button type="dashed" @click="showDialog('SVGUse')">use</a-button>
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
  methods: {
    showDialog(refName) {
      this.$refs[refName].showDialog()
    }
  }
}
</script>

<style scoped>

</style>
