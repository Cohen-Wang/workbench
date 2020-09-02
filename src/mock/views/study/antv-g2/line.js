import Mock from 'mockjs'

Mock.mock('/antv-g2/line', 'get', (req, res) => {
  return Mock.mock({
    'records|20': [
      {
        'id|+1': 1,
        'year|+1': 1990,
        'city': '北京',
        'value': '@integer(10, 100)'
      },
      {
        'id|+1': 1,
        'year|+1': 1990,
        'city': '成都',
        'value': '@integer(10, 100)'
      },
      {
        'id|+1': 1,
        'year|+1': 1990,
        'city': '上海',
        'value': '@integer(10, 100)'
      }
    ]
  })
})
