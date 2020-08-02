<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">SVG基础</div>
    </div>
    <div class="panel-body panel-body-box">
      <!-- 矩形 -->
      <div class="box">
        <blockquote>rect</blockquote>
        <pre class="well" v-text="rect"></pre>
        <div v-html="rect"></div>
      </div>
      <!-- 圆角矩形 -->
      <div class="box">
        <blockquote>圆角rect</blockquote>
        <pre class="well" v-text="radiusRect"></pre>
        <div v-html="radiusRect"></div>
      </div>
      <!-- 圆 -->
      <div class="box">
        <blockquote>circle</blockquote>
        <pre class="well" v-text="circle"></pre>
        <div v-html="circle"></div>
      </div>
      <!-- 椭圆 -->
      <div class="box">
        <blockquote>ellipse</blockquote>
        <pre class="well" v-text="ellipse"></pre>
        <div v-html="ellipse"></div>
      </div>
      <!-- 直线 -->
      <div class="box">
        <blockquote>line</blockquote>
        <pre class="well" v-text="line"></pre>
        <div v-html="line"></div>
      </div>
      <!-- 封闭直线 -->
      <div class="box">
        <blockquote>polygon</blockquote>
        <pre class="well" v-text="polygon"></pre>
        <div v-html="polygon"></div>
      </div>
      <!-- 不封闭直线 -->
      <div class="box">
        <blockquote>polyline</blockquote>
        <pre class="well" v-text="polyline"></pre>
        <div v-html="polyline"></div>
      </div>
      <!-- 文字 -->
      <div class="box">
        <blockquote>text</blockquote>
        <pre class="well" v-text="text"></pre>
        <div v-html="text"></div>
      </div>
      <!-- 文字 -->
      <div class="box">
        <blockquote>path</blockquote>
        <pre class="well" v-text="path"></pre>
        <div v-html="path"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SVG',
  data() {
    return {
      rect:
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <rect width="200" height="100" x="20" y="10" style="fill:yellowgreen; stroke: #5cb85c; stroke-width: 4"></rect>
</svg>
`,
      radiusRect:
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <rect width="200" height="100" x="20" y="10" rx="100" ry="200" style="fill:yellowgreen; stroke: #5cb85c; stroke-width: 4"></rect>
</svg>
`,
      circle:
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <circle cx="150" cy="150" r="80" style="fill:yellowgreen; stroke: #5cb85c; stroke-width: 4"></circle>
</svg>
`,
      ellipse:
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <ellipse cx="150" cy="150" rx="40" ry="90" style="fill:yellowgreen; stroke: #5cb85c; stroke-width: 4"></ellipse>
</svg>
`,
      line:
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <line x1="100" y1="100" x2="200" y2="200" style="fill:yellowgreen; stroke: #5cb85c; stroke-width: 4"></line>
</svg>
`,
      polygon:
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <polygon points="10,200,200,50,250,250" style="fill:yellowgreen; stroke: #5cb85c; stroke-width: 4"></polygon>
</svg>
`,
      polyline:
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <polyline points="10,200,200,50,250,250" style="fill:yellowgreen; stroke: #5cb85c; stroke-width: 4"></polyline>
</svg>
`,
      text:
`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style="background-color: #e8e8e8;">
  <text x="100" y="150"  style="fill:yellowgreen; stroke: #5cb85c; stroke-width: 1;">
    hello <tspan fill="red">world</tspan>
  </text>
</svg>
`,
      path:
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
`
    }
  }
}
</script>

<style scoped>

</style>
