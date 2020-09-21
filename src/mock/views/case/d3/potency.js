import Mock from 'mockjs'

Mock.mock('/case/d3/potency', 'get', (req, res) => {
  return Mock.mock({
    'records|20-40': [
      {
        'id|+1': 1,
        'name': '@cname',
        'score': '@integer(10, 100)'
      }
    ]
  })
})
