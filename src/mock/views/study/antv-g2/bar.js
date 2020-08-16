import Mock from 'mockjs'

Mock.mock('/antv-g2/bar', 'get', (req, res) => {
  return Mock.mock({
    'records|20-40': [
      {
        'id|+1': 1,
        'type': '@cname',
        'value': '@integer(10, 100)',
        'percent': '@float(60, 100, 2, 2)'
      }
    ]
  })
})
