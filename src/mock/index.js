import Mock from 'mockjs'
import sampleSize from 'lodash.samplesize'

// 使用mock模拟数据
Mock.mock('/ant-design/table', 'get', (req, res) => {
  return Mock.mock({
    'records|100-200': [
      {
        'id|+1': 1,
        'name': '@cname',
        'portrait': '@image',
        'tags|1': () => {
          const arr = [
            { title: '达人', color: 'red' },
            { title: '小人', color: 'pink' },
            { title: '疯子', color: 'orange' },
            { title: '棚子', color: 'green' },
            { title: '狂人', color: 'cyan' },
            { title: '欲望者', color: 'blue' },
            { title: '情人', color: 'purple' }
          ]
          return sampleSize(arr, ~~(Math.random() * 3) + 1)
        },
        'birthday': '@date("yyyy年MM月dd日")',
        'telephone': () => {
          const prefix = ['131', '132', '135', '136', '150', '152', '189']
          return sampleSize(prefix, 1) + Mock.mock(/\d{8}/)
        },
        'email': '@email',
        'website': '@website',
        'college|1': ['清华大学', '北京大学', '复旦大学', '南开大学'],
        'address': {
          'county': '@county',
          'region': '@region',
          'province': '@province',
          'city': '@city',
          'zip': '@zip'
        }
      }
    ]
  })
})

// 使用mock模拟数据
Mock.mock('/antv-g2/radar', 'get', (req, res) => {
  const items = ['语文', '数学', '英语', '化学', '物理', '生物', '自然', '经济']
  return Mock.mock({
    'records|3-10': [
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
