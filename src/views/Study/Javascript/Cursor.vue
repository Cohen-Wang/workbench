<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <div class="panel-title">获取光标</div>
    </div>
    <div class="panel-body">
      <p>
        <label>输入框测试:</label>
        <label>
          <input type="text" style="width:220px" @click="getCursortPosition"/>
        </label>
        <span>光标位置:</span>
        <span></span>
      </p>
      <p>
        <label>文本框测试:</label>
        <textarea rows="5" style="width:220px" @click="getCursortPosition"/>
        <span>光标位置:</span>
        <span></span>
      </p>
      <div>
        <label>可编辑div:</label>
        <div contenteditable="true" class="edit-div" @click="getCursortPosition"></div>
        <span>光标位置:</span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>

const getCursortPosition = function(e) {
  var eleP = e.target.parentNode // 获取父级元素
  var pos = 0
  if (e.target.nodeName === 'DIV') {
    pos = getDivPosition(e.target)
  } else {
    pos = getPosition(e.target)
  }
  var spanEle = (eleP.childNodes)[7]
  spanEle.innerText = pos
}

// 可编辑div获取坐标
const getDivPosition = function(element) {
  console.log('getDivPosition')
  var caretOffset = 0
  var doc = element.ownerDocument || element.document
  var win = doc.defaultView || doc.parentWindow
  var sel
  if (typeof win.getSelection !== 'undefined') { // 谷歌、火狐
    sel = win.getSelection()
    if (sel.rangeCount > 0) { // 选中的区域
      var range = win.getSelection().getRangeAt(0)
      var preCaretRange = range.cloneRange() // 克隆一个选中区域
      preCaretRange.selectNodeContents(element) // 设置选中区域的节点内容为当前节点
      preCaretRange.setEnd(range.endContainer, range.endOffset) // 重置选中区域的结束位置
      caretOffset = preCaretRange.toString().length
    }
  } else if ((sel = doc.selection) && sel.type !== 'Control') { // IE
    var textRange = sel.createRange()
    var preCaretTextRange = doc.body.createTextRange()
    preCaretTextRange.moveToElementText(element)
    preCaretTextRange.setEndPoint('EndToEnd', textRange)
    caretOffset = preCaretTextRange.text.length
  }
  return caretOffset
}

// 输入框获取光标
const getPosition = function(element) {
  console.log('getPosition')
  let cursorPos = 0
  // IE
  if (document.selection) {
    var selectRange = document.selection.createRange()
    console.log('selectRange:', selectRange)
    selectRange.moveStart('character', -element.value.length)
    cursorPos = selectRange.text.length
  } else if (element.selectionStart || element.selectionStart === '0') { // 非 IE
    console.dir('element:', element)
    console.log('element.selectionStart:', element.selectionStart)
    cursorPos = element.selectionStart
  }
  return cursorPos
}

export default {
  name: 'Cursor',
  methods: {
    getCursortPosition
  }
}
</script>

<style scoped>
  p {
    display: flex;
    flex-direction: row;
  }

  .btn {
    height: 24px;
    margin: 0 10px;
  }

  .edit-div {
    display: inline-block;
    width: 225px;
    border: 1px solid #decdcd;
  }
</style>
