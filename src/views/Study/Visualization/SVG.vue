<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">SVG基础</div>
    </div>
    <div class="panel-body panel-body-box">
      <!-- 矩形 -->
      <div class="box">
        <blockquote>rect</blockquote>
        <pre class="well" v-text="rectSVG"></pre>
        <div v-html="rectSVG"></div>
      </div>
      <!-- 圆角矩形 -->
      <div class="box">
        <blockquote>圆角rect</blockquote>
        <pre class="well" v-text="radiusRectSVG"></pre>
        <div v-html="radiusRectSVG"></div>
      </div>
      <!-- 圆 -->
      <div class="box">
        <blockquote>circle</blockquote>
        <pre class="well" v-text="circleSVG"></pre>
        <div v-html="circleSVG"></div>
      </div>
      <!-- 椭圆 -->
      <div class="box">
        <blockquote>ellipse</blockquote>
        <pre class="well" v-text="ellipseSVG"></pre>
        <div v-html="ellipseSVG"></div>
      </div>
      <!-- 直线 -->
      <div class="box">
        <blockquote>line</blockquote>
        <pre class="well" v-text="lineSVG"></pre>
        <div v-html="lineSVG"></div>
      </div>
      <!-- 封闭直线 -->
      <div class="box">
        <blockquote>polygon</blockquote>
        <pre class="well" v-text="polygonSVG"></pre>
        <div v-html="polygonSVG"></div>
      </div>
      <!-- 不封闭直线 -->
      <div class="box">
        <blockquote>polyline</blockquote>
        <pre class="well" v-text="polylineSVG"></pre>
        <div v-html="polylineSVG"></div>
      </div>
      <!-- 文字 -->
      <div class="box">
        <blockquote>text</blockquote>
        <pre class="well" v-text="textSVG"></pre>
        <div v-html="textSVG"></div>
      </div>
      <!-- 路径 -->
      <div class="box">
        <blockquote>path</blockquote>
        <pre class="well" v-text="pathSVG"></pre>
        <div v-html="pathSVG"></div>
      </div>
      <!-- 剪切路径 -->
      <div class="box">
        <blockquote>clipPath</blockquote>
        <pre class="well" v-text="clipPathSVG"></pre>
        <div v-html="clipPathSVG"></div>
      </div>
      <!-- 图片 -->
      <div class="box">
        <blockquote>image</blockquote>
        <pre class="well" v-text="imageSVG"></pre>
        <div v-html="imageSVG"></div>
        <img :src="testImage" width="200" height="100" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import testImage from '@/assets/image/test.jpg'

export default {
  name: 'SVGStudy',
  data() {
    return {
      testImage,
      rectSVG:
`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="300" style="background-color: #e8e8e8;">
  <rect width="200" height="100" x="0" y="10" style="fill:yellow; stroke: green; stroke-width: 4"></rect>
  <rect width="25%" height="50%" x="250" y="10" style="fill:yellow; stroke: green; stroke-width: 4"></rect>
  <rect width="100" height="100" x="500" y="10" rx="50%"  style="fill:yellow; stroke: green; stroke-width: 4"></rect>
</svg>
`,
      radiusRectSVG:
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <rect width="200" height="100" x="20" y="10" rx="100" ry="200" style="fill:yellow; stroke: green; stroke-width: 4"></rect>
</svg>
`,
      circleSVG:
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <circle cx="150" cy="150" r="80" style="fill:yellow; stroke: green; stroke-width: 4"></circle>
</svg>
`,
      ellipseSVG:
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <ellipse cx="150" cy="150" rx="40" ry="90" style="fill:yellow; stroke: green; stroke-width: 4"></ellipse>
</svg>
`,
      lineSVG:
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <line x1="100" y1="100" x2="200" y2="200" style="fill:yellow; stroke: green; stroke-width: 4"></line>
</svg>
`,
      polygonSVG:
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <polygon points="10,200,200,50,250,250" style="fill:yellow; stroke: green; stroke-width: 4"></polygon>
</svg>
`,
      polylineSVG:
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <polyline points="10,200,200,50,250,250" style="fill:yellow; stroke: green; stroke-width: 4"></polyline>
</svg>
`,
      textSVG:
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <text x="100" y="150"  style="fill:yellow; stroke: green; stroke-width: 1;">
    hello <tspan fill="red">world</tspan>
  </text>
</svg>
`,
      pathSVG:
`
<svg width="190px" height="160px">
  <path d="M10 10 C 20 20, 40 20, 50 10" stroke="3" fill="red"/>
  <path d="M70 10 C 70 20, 120 20, 120 10" stroke="3" fill="red"/>
  <path d="M130 10 C 120 20, 180 20, 170 10" stroke="3" fill="red"/>
  <path d="M10 60 C 20 80, 40 80, 50 60" stroke="3" fill="red"/>
  <path d="M70 60 C 70 80, 110 80, 110 60" stroke="3" fill="red"/>
  <path d="M130 60 C 120 80, 180 80, 170 60" stroke="3" fill="red"/>
  <path d="M10 110 C 20 140, 40 140, 50 110" stroke="3" fill="red"/>
  <path d="M70 110 C 70 140, 110 140, 110 110" stroke="3" fill="red"/>
  <path d="M130 110 C 120 140, 180 140, 170 110" stroke="3" fill="red"/>
</svg>
`,
      clipPathSVG:
`
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <defs>
    <clipPath id="clipPath">
      <text x="10" y="70" style="font-size: 40px;">我是中国人</text>
    </clipPath>
  </defs>

  <g style="clip-path:url(#clipPath)">
    <rect x="10" y="30" width="150" height="100" fill="red"/>
    <circle r="10" cx="110" cy="55" fill="blue"/>
  </g>
</svg>
`,
      imageSVG:
`
<svg xmlns="http://www.w3.org/2000/svg" width="900" height="300" style="background-color: #e8e8e8;">
  <image xlink:href="${testImage}" x="10" y="10" width="200" height="100"/>

  <defs>
    <clipPath id="myClipPath">
      <rect x="250" y="10" width="100" height="100" rx="50%" ry="50"></rect>
    </clipPath>
    <clipPath id="myClipPathCircle">
      <circle cx="500" cy="70" r="50"></circle>
    </clipPath>
  </defs>

  <image xlink:href="${testImage}" x="250" y="10" width="100" height="100" style="clip-path:url(#myClipPath)"/>
  <image xlink:href="${testImage}" x="450" y="-10" width="150" height="150" style="clip-path:url(#myClipPathCircle)"/>
</svg>
`
    }
  },
  created() {
    console.log('testImage:', testImage)
  }
}
</script>

<style scoped>

</style>
