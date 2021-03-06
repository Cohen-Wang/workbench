import Mock from 'mockjs'

Mock.mock('/antv-g2/radar', 'get', (req, res) => {
  const items = ['语文', '数学', '英语', '化学', '物理', '生物', '自然', '经济', '相声', '耕地', '宇宙', '哲学', '电子', '心机']
  return Mock.mock({
    'records|3-14': [
      {
        'id|+1': 1,
        'item': () => {
          return items.splice(~~(Math.random() * items.length), 1)[0]
        },
        '铜站': '@integer(40, 80)',
        '龚站': '@integer(40, 80)',
        '总厂': '@integer(40, 80)'
      }
    ]
  })
})
