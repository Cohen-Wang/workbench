import Mock from 'mockjs'

Mock.mock('/ant-design/transfer', 'get', (req, res) => {
  return Mock.mock({
    'records|20-30': [
      {
        'id|+1': 1,
        'key|+1': 1,
        'title': '@cname',
        'chosen': '@Boolean'
      }
    ]
  })
})
