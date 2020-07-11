<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">text-overflow</div>
    </div>
    <div class="panel-body panel-body-box">
      <p class="main-title">空格处理white-space属性</p>
      <div class="container">
        <div class="col">
          <blockquote>
            pre：使用pre属性值的时候，空白和换行将会被保留,同时超出容器边缘也不会换行。
          </blockquote>
          <p><code>中文</code></p>
          <div style="white-space: pre">
            百度新闻 是 包含海量资讯 的 新闻服务 平台， 真实 反映 每时每
            刻的新闻热点。
          </div>
          <p><code>英文</code></p>
          <div style="white-space: pre">
            President Trump used aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa the spotlight
            of the Fourth of July weekend to sow national divide during a
            national crisis.
          </div>
        </div>

        <div class="col">
          <blockquote>
            normal：默认属性值，多余的空白会被浏览器忽略掉，只会保留一个空格效果。
          </blockquote>
          <p><code>中文</code></p>
          <div style="white-space: normal">
            百度新闻 是 包含海量资讯 的 新闻服务 平台， 真实 反映 每时每
            刻的新闻热点。
          </div>
          <p><code>英文</code></p>
          <div style="white-space: normal">
            President Trump used aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa the spotlight
            of the Fourth of July weekend to sow national divide during a
            national crisis.
          </div>
        </div>

        <div class="col">
          <blockquote>
            nowrap：强制在同一行内显示所有文本，合并文本间的多余空白，直到碰到了换行标签<br/>为止。
          </blockquote>
          <p><code>中文</code></p>
          <div style="white-space: nowrap">
            百度新闻 是 包含海量资讯 的 新闻服务 平台， 真实 反映 每时每
            刻的新闻热点。
          </div>
          <p><code>英文</code></p>
          <div style="white-space: nowrap">
            President Trump used aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa the spotlight
            of the Fourth of July weekend to sow national divide during a
            national crisis.
          </div>
        </div>

        <div class="col">
          <blockquote>
            pre-line：合并空白序列，但保留换行符，IE8以下浏览器不支持此属性。
          </blockquote>
          <p><code>中文</code></p>
          <div style="white-space: pre-line">
            百度新闻 是 包含海量资讯 的 新闻服务 平台， 真实 反映 每时每
            刻的新闻热点。
          </div>
          <p><code>英文</code></p>
          <div style="white-space: pre-line">
            President Trump used aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa the spotlight
            of the Fourth of July weekend to sow national divide during a
            national crisis.
          </div>
        </div>

        <div class="col">
          <blockquote>
            pre-wrap：保留空白符序列，但是正常进行换行，IE8以下浏览器不支持此属性。
          </blockquote>
          <p><code>中文</code></p>
          <div style="white-space: pre-wrap">
            百度新闻 是 包含海量资讯 的 新闻服务 平台， 真实 反映 每时每
            刻的新闻热点。
          </div>
          <p><code>英文</code></p>
          <div style="white-space: pre-wrap">
            President Trump used aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa the spotlight
            of the Fourth of July weekend to sow national divide during a
            national crisis.
          </div>
        </div>
      </div>
      <hr style="margin: 200px 0;"/>

      <p class="main-title">文本换行word-wrap属性</p>
      <div class="container">
        <div class="col">
          <blockquote>
            normal：默认值，保持浏览器的默认处理，只在允许的断字点换行，也就是非连续的英文字符数字或者汉字可以进行换行。
          </blockquote>
          <p><code>中文</code></p>
          <div style="word-wrap: normal;">
            百度新闻 是 包含海量资讯 的 新闻服务 平台， 真实 反映 每时每
            刻的新闻热点。
          </div>
          <p><code>英文</code></p>
          <div style="word-wrap: normal;">
            President Trump used aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa the spotlight
            of the Fourth of July weekend to sow national divide during a
            national crisis.
          </div>
        </div>

        <div class="col">
          <blockquote>
            break-word：此属性值可以实现内容换行，也就是可以实现在边界内换行，不能够超出边界。它不会将单词截断进行换行，要尽可能的保持单词的完整性。
          </blockquote>
          <p><code>中文</code></p>
          <div style="word-wrap: break-word;">
            百度新闻 是 包含海量资讯 的 新闻服务 平台， 真实 反映 每时每
            刻的新闻热点。
          </div>
          <p><code>英文</code></p>
          <div style="word-wrap: break-word;">
            President Trump used aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa the spotlight
            of the Fourth of July weekend to sow national divide during a
            national crisis.
          </div>
        </div>
      </div>
      <hr style="margin: 200px 0;"/>

      <p class="main-title">自动换行word-break属性</p>
      <div class="container">
        <div class="col">
          <blockquote>
            normal：中文到边界上的汉字换行，英文从整个单词换行
          </blockquote>
          <p><code>中文</code></p>
          <div style="word-break: normal;">
            百度新闻 是 包含海量资讯 的 新闻服务 平台， 真实 反映 每时每
            刻的新闻热点。
          </div>
          <p><code>英文</code></p>
          <div style="word-break: normal;">
            President Trump used aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa the spotlight
            of the Fourth of July weekend to sow national divide during a
            national crisis.
          </div>
        </div>

        <div class="col">
          <blockquote>
            keep-all：对于英文长文本不能换行，但对于中文的处理，各浏览器不一致。
          </blockquote>
          <p><code>中文</code></p>
          <div style="word-break: keep-all;">
            百度新闻 是 包含海量资讯 的 新闻服务 平台， 真实 反映 每时每
            刻的新闻热点。
          </div>
          <p><code>英文</code></p>
          <div style="word-break: keep-all;">
            President Trump used aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa the spotlight
            of the Fourth of July weekend to sow national divide during a
            national crisis.
          </div>
        </div>

        <div class="col">
          <blockquote>
            break-all：
            对于英文长单词来说，会截断单词换行，长单词占据当前行剩余空间。但对于中文的处理，各浏览器不一致，截图为在chrome中的表现。（中文到边界上的汉字换行，但不允许标点置于段首）
          </blockquote>
          <p><code>中文</code></p>
          <div style="word-break: break-all;">
            百度新闻 是 包含海量资讯 的 新闻服务 平台， 真实 反映 每时每
            刻的新闻热点。
          </div>
          <p><code>英文</code></p>
          <div style="word-break: break-all;">
            President Trump used aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa the spotlight
            of the Fourth of July weekend to sow national divide during a
            national crisis.
          </div>
        </div>
      </div>
      <hr style="margin: 200px 0;"/>

      <p class="main-title">自动换行text-wrap属性</p>
      <div class="container">
        <div class="col">
          <blockquote>avoid</blockquote>
          <p><code>中文</code></p>
          <div style="text-wrap: avoid">
            百度新闻 是 包含海量资讯 的 新闻服务 平台， 真实 反映 每时每
            刻的新闻热点。
          </div>
          <p><code>英文</code></p>
          <div style="text-wrap: avoid">
            President Trump used aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa the spotlight
            of the Fourth of July weekend to sow national divide during a
            national crisis.
          </div>
        </div>

        <div class="col">
          <blockquote>revert</blockquote>
          <p><code>中文</code></p>
          <div style="text-wrap: revert;">
            百度新闻 是 包含海量资讯 的 新闻服务 平台， 真实 反映 每时每
            刻的新闻热点。
          </div>
          <p><code>英文</code></p>
          <div style="text-wrap: revert;">
            President Trump used aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa the spotlight
            of the Fourth of July weekend to sow national divide during a
            national crisis.
          </div>
        </div>
      </div>
      <hr style="margin: 200px 0;"/>

      <p class="main-title">文本溢出 text-overflow属性</p>
      <div class="container">
        <div class="col">
          <blockquote>
            clip：此属性值表示直接裁切，并不显示省略标记(...)。
          </blockquote>
          <p><code>中文</code></p>
          <div style="white-space: nowrap; overflow: hidden; text-overflow: clip;">
            百度新闻 是 包含海量资讯 的 新闻服务 平台， 真实 反映 每时每
            刻的新闻热点。
          </div>
          <p><code>英文</code></p>
          <div
            style="white-space: nowrap; overflow: hidden; text-overflow: clip;">
            President Trump used aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa the spotlight
            of the Fourth of July weekend to sow national divide during a
            national crisis.
          </div>
        </div>

        <div class="col">
          <blockquote>
            ellipsis：此属性可以设置当文本溢出时将显示省略标记(...)。
          </blockquote>
          <p><code>中文</code></p>
          <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            百度新闻 是 包含海量资讯 的 新闻服务 平台， 真实 反映 每时每
            刻的新闻热点。
          </div>
          <p><code>英文</code></p>
          <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            President Trump used aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa the spotlight
            of the Fourth of July weekend to sow national divide during a
            national crisis.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextOverflow'
}
</script>

<style lang="less" scoped>
.main-title {
  font: 900 34px/1 "微软雅黑";
  text-align: center;
}

.container {
  padding: 20px 0;
  display: flex;

  .col {
    border-right: 2px dashed #eeeeee;
    padding: 0 10px;
    overflow: hidden;
    flex: 1;

    div {
      background-color: #eeeeee;
      width: 150px;
      height: 100px;
      margin-bottom: 20px;
    }
  }
}
</style>
