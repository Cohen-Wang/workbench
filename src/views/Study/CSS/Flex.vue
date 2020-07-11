<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <p class="panel-title">Flex布局</p>
    </div>
    <div class="panel-body panel-body-box">
      <!-- 父元素属性 -->
      <h1 style="text-align: center;font: 900 50px/1 '微软雅黑' ">
        父容器属性
      </h1>
      <div class="container">
        <!-- justify-content -->
        <div class="col">
          <blockquote>justify-content</blockquote>
          <p><code>默认</code></p>
          <div class="box flex">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
          <p><code>style="justify-content: flex-start"</code></p>
          <div class="box flex" style="justify-content: flex-start">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
          <p><code>style="justify-content: flex-end"</code></p>
          <div class="box flex" style="justify-content: flex-end">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
          <p><code>style="justify-content: center"</code></p>
          <div class="box flex" style="justify-content: center">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
          <p><code>style="justify-content: space-between"</code></p>
          <div class="box flex" style="justify-content: space-between">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
          <p><code>style="justify-content: space-around"</code></p>
          <div class="box flex" style="justify-content: space-around">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
          <p><code>style="justify-content: space-evenly"</code></p>
          <div class="box flex" style="justify-content: space-evenly">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
        </div>

        <!-- align-items -->
        <div class="col">
          <blockquote>align-items</blockquote>
          <p><code>默认</code></p>
          <div class="box flex">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
          <p><code>style="align-items: flex-start"</code></p>
          <div class="box flex" style="align-items: flex-start">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
          <p><code>style="align-items: flex-end"</code></p>
          <div class="box flex" style="align-items: flex-end">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
          <p><code>style="align-items: center"</code></p>
          <div class="box flex" style="align-items: center">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
          <p><code>style="align-items: stretch" 不能加高度</code></p>
          <div class="box flex" style="align-items: stretch">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
          <p><code>style="align-items: baseline"</code></p>
          <div class="box flex" style="align-items: baseline">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
        </div>

        <!-- flex-direction -->
        <div class="col">
          <blockquote>flex-direction</blockquote>
          <p><code>默认</code></p>
          <div class="box flex">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
          <p><code>style="flex-direction: row"</code></p>
          <div class="box flex" style="flex-direction: row">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
          <p><code>style="flex-direction: row-reverse"</code></p>
          <div class="box flex" style="flex-direction: row-reverse">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
          <p><code>style="flex-direction: column"</code></p>
          <div class="box flex" style="flex-direction: column">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
          <p><code>style="flex-direction: column-reverse"</code></p>
          <div class="box flex" style="flex-direction: column-reverse">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
        </div>

        <!-- flex-wrap -->
        <div class="col">
          <blockquote>flex-wrap</blockquote>
          <p><code>默认</code></p>
          <div class="box flex">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
            <div class="pox yellow">4</div>
            <div class="pox purple">5</div>
            <div class="pox pink">6</div>
          </div>
          <p><code>style="flex-wrap: nowrap"</code></p>
          <div class="box flex" style="flex-wrap: nowrap">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
            <div class="pox yellow">4</div>
            <div class="pox purple">5</div>
            <div class="pox pink">6</div>
          </div>
          <p><code>style="flex-wrap: wrap"</code></p>
          <div class="box flex" style="flex-wrap: wrap">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
            <div class="pox yellow">4</div>
            <div class="pox purple">5</div>
            <div class="pox pink">6</div>
          </div>
          <p><code>style="flex-wrap: wrap-reverse"</code></p>
          <div class="box flex" style="flex-wrap: wrap-reverse">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
            <div class="pox yellow">4</div>
            <div class="pox purple">5</div>
            <div class="pox pink">6</div>
          </div>
        </div>

        <!-- align-content -->
        <div class="col">
          <blockquote>align-content</blockquote>
          <p><code>默认</code></p>
          <div class="box flex">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
            <div class="pox yellow">4</div>
            <div class="pox purple">5</div>
            <div class="pox pink">6</div>
          </div>
          <p title="style=flex-wrap: wrap;align-content: flex-start">
            <code
              style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis"
              >style="flex-wrap: wrap;align-content: flex-start"</code
            >
          </p>
          <div
            class="box flex"
            style="flex-wrap: wrap;align-content: flex-start"
          >
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
            <div class="pox yellow">4</div>
            <div class="pox purple">5</div>
            <div class="pox pink">6</div>
          </div>
          <p><code>style="align-content: flex-end"</code></p>
          <div class="box flex" style="flex-wrap: wrap;align-content: flex-end">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
            <div class="pox yellow">4</div>
            <div class="pox purple">5</div>
            <div class="pox pink">6</div>
          </div>
          <p><code>style="align-content: center"</code></p>
          <div class="box flex" style="flex-wrap: wrap;align-content: center">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
            <div class="pox yellow">4</div>
            <div class="pox purple">5</div>
            <div class="pox pink">6</div>
          </div>
          <p><code>style="align-content: space-between"</code></p>
          <div
            class="box flex"
            style="flex-wrap: wrap;align-content: space-between"
          >
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
            <div class="pox yellow">4</div>
            <div class="pox purple">5</div>
            <div class="pox pink">6</div>
          </div>
          <p><code>style="align-content: space-around"</code></p>
          <div
            class="box flex"
            style="flex-wrap: wrap;align-content: space-around"
          >
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
            <div class="pox yellow">4</div>
            <div class="pox purple">5</div>
            <div class="pox pink">6</div>
          </div>
          <p><code>style="align-content: space-evenly"</code></p>
          <div
            class="box flex"
            style="flex-wrap: wrap;align-content: space-evenly"
          >
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
            <div class="pox yellow">4</div>
            <div class="pox purple">5</div>
            <div class="pox pink">6</div>
          </div>
        </div>
      </div>

      <hr style="margin: 200px 0;" />

      <!-- 子元素属性 -->
      <h1 style="text-align: center;font: 900 50px/1 '微软雅黑' ">
        子容器属性
      </h1>
      <div class="container">
        <div class="col">
          <blockquote>flex属性</blockquote>
          <p><code>默认</code></p>
          <div class="box flex">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
        </div>

        <div class="col">
          <blockquote>flex属性</blockquote>
          <p><code>默认</code></p>
          <div class="box flex">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
        </div>

        <div class="col">
          <blockquote>flex属性</blockquote>
          <p><code>默认</code></p>
          <div class="box flex">
            <div class="pox red">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
          </div>
        </div>

        <div class="col">
          <blockquote>flex属性</blockquote>
          <p><code>flex: auto; 等于1 1 auto; 元素较少，会拉长</code></p>
          <div class="box flex">
            <div class="pox red" style="flex: auto">1</div>
            <div class="pox green">2</div>
          </div>
          <p><code>flex: auto; 等于1 1 auto; 元素较多，会变被平均短</code></p>
          <div class="box flex">
            <div class="pox red" style="flex: auto">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
            <div class="pox yellow">4</div>
            <div class="pox purple">5</div>
            <div class="pox pink">6</div>
            <div class="pox chocolate">7</div>
          </div>

          <p><code>flex: none; 等于0 0 auto; 元素较少，不变</code></p>
          <div class="box flex">
            <div class="pox red" style="flex: none">1</div>
            <div class="pox green">2</div>
          </div>
          <p><code>flex: none; 等于0 0 auto; 元素较多，不变</code></p>
          <div class="box flex">
            <div class="pox red" style="flex: none">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
            <div class="pox yellow">4</div>
            <div class="pox purple">5</div>
            <div class="pox pink">6</div>
            <div class="pox chocolate">7</div>
          </div>

          <p><code>flex: 1; 1 1 0%; 元素较少，会拉长</code></p>
          <div class="box flex">
            <div class="pox red" style="flex: 1">1</div>
            <div class="pox green">2</div>
          </div>
          <p><code>flex: 1; 1 1 0%; 元素较多，会无限短</code></p>
          <div class="box flex">
            <div class="pox red" style="flex: 1">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
            <div class="pox yellow">4</div>
            <div class="pox purple">5</div>
            <div class="pox pink">6</div>
            <div class="pox chocolate">7</div>
          </div>

          <p><code>flex: 0; 0 1 0%; 元素较少，无限短</code></p>
          <div class="box flex">
            <div class="pox red" style="flex: 0">1</div>
            <div class="pox green">2</div>
          </div>
          <p><code>flex: 0; 0 1 0%; 元素较多，无限短</code></p>
          <div class="box flex">
            <div class="pox red" style="flex: 0">1</div>
            <div class="pox green">2</div>
            <div class="pox blue">3</div>
            <div class="pox yellow">4</div>
            <div class="pox purple">5</div>
            <div class="pox pink">6</div>
            <div class="pox chocolate">7</div>
          </div>
        </div>
      </div>

      <hr style="margin: 200px 0;" />

      <!-- 案例 -->
      <h1 style="text-align: center;font: 900 50px/1 '微软雅黑' ">案例</h1>
      <div class="container">
        <div class="col" style="width: 33.33%;">
          <p class="lead">案例一</p>
          <div class="case case-1">
            <div class="case-1-item">
              <a-avatar
                shape="square"
                :size="64"
                icon="user"
                style="backgroundColor: #f56a00"
              />
              <span>正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正正</span>
            </div>
          </div>

          <div class="case case-1">
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正正正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正正正正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正正正正正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正正正正正正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正正正正正正正</span>
            </div>
          </div>

          <div class="case case-1">
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正正正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正正正正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正正正正正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正正正正正正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正正正正正正正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正正正正正正正正</span>
            </div>
            <div class="case-1-item">
              <a-avatar shape="square" :size="64" icon="user" />
              <span>正正正正正正正正正正</span>
            </div>
          </div>
        </div>

        <div class="col">
          <p class="lead">案例二</p>
          <div class="case case-2">
            <div class="case-2-left">
              <a-input
                placeholder-class="placeholder-input"
                placeholder="Basic usage"
              />
            </div>
            <div class="case-2-right">
              <a-avatar shape="square" :size="32" icon="user" />
              <a-avatar shape="square" :size="32" icon="user" />
            </div>
          </div>

          <div class="case case-2">
            <div class="case-2-left">
              <a-input
                placeholder-class="placeholder-input"
                placeholder="Basic usage"
              />
            </div>
            <div class="case-2-right">
              <a-avatar shape="square" :size="32" icon="user" />
              <a-avatar shape="square" :size="32" icon="user" />
              <a-avatar shape="square" :size="32" icon="user" />
            </div>
          </div>

          <div class="case case-2">
            <div class="case-2-left">
              <a-input
                placeholder-class="placeholder-input"
                placeholder="Basic usage"
              />
            </div>
            <div class="case-2-right">
              <a-avatar shape="square" :size="32" icon="user" />
              <a-avatar shape="square" :size="32" icon="user" />
              <a-avatar shape="square" :size="32" icon="user" />
              <a-avatar shape="square" :size="32" icon="user" />
            </div>
          </div>
        </div>

        <div class="col">
          <p class="lead">案例三</p>
          <div class="case case-3">
            <div class="case-3-left">
              <a-avatar shape="square" :size="64" icon="user" />
            </div>
            <div class="case-3-middle">
              <span class="top">你好，老王</span>
              <span class="bottom">系统管理员</span>
            </div>
            <div class="case-3-right">
              <a-button type="link">设置</a-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Flex"
};
</script>

<style lang="less" scoped>
/* 布局 */
.container {
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;

  .col {
    flex: 1;
    border-right: 2px dashed #e8e8e8;
    padding: 0 10px;

    &:nth-child(5n) {
      border-right: none;
    }
  }
}

.box {
  width: 100%;
  height: 120px;
  border: 1px solid #e8e8e8;
  margin-bottom: 50px;
}
.pox {
  width: 20%;
  height: 30%;
  text-align: center;
}
.red {
  background-color: indianred;
}
.yellow {
  background-color: yellowgreen;
}
.purple {
  background-color: mediumpurple;
}
.pink {
  background-color: pink;
}
.chocolate {
  background-color: chocolate;
}
.green {
  background-color: #00ff00;
}
.blue {
  background-color: lightskyblue;
}

/* 学习重点 */
.flex {
  display: flex;
}

/deep/ .ant-avatar {
  background-color: #f56a00;
}

.case {
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  margin-bottom: 50px;
}

/* 案例一 */
.case-1 {
  padding: 20px 0 0 0;

  display: flex;
  /*justify-content: space-around;*/
  justify-content: space-between;
  /*justify-content: space-evenly;*/
  flex-wrap: wrap;

  .case-1-item {
    width: 120px;
    height: 130px;
    padding: 10px 0;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}

/* 案例二 */
.case-2 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .case-2-left {
    flex: 1;
  }

  .case-2-right {
    flex-basis: 150px;
    display: flex;
    justify-content: space-around;
  }
}

.case-3 {
  padding: 20px 0;
  height: 120px;

  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;

  .case-3-left {
    width: 100px;
    /*background-color: #5bc0de;*/

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .case-3-middle {
    /*background-color: #4cae4c;*/

    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .top {
      font: 900 18px/1 "微软雅黑";
    }

    .bottom {
      font: 900 14px/1 "微软雅黑";
      color: rgba(0, 0, 0, 0.65);
    }
  }

  .case-3-right {
    width: 100px;
    /*background-color: #FF456E;*/

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
}
</style>
