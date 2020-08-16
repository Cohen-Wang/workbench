import Mock from 'mockjs'

Mock.mock('/antv-g2/line', 'get', (req, res) => {
  return Mock.mock({
    'records|20-150': [
      {
        'id|+1': 1,
        'year|+1': 1990,
        'value': '@integer(10, 100)'
      }
    ]
  })
})
