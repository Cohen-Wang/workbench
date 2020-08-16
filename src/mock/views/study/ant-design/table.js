import Mock from 'mockjs'
import sampleSize from 'lodash.samplesize'

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
