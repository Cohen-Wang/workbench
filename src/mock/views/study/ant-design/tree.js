import Mock from 'mockjs'

Mock.mock('/ant-design/tree', 'get', (req, res) => {
  return Mock.mock({
    'records|2': [
      {
        'id|+1': 1,
        'title': '@cname',
        'key|+1': 10000,
        'children|2-3': [
          {
            'id|+1': 1,
            'title': '@cname',
            'key|+1': 10000,
            'children|2-3': [
              {
                'id|+1': 1,
                'title': '@cname',
                'key|+1': 10000
              }
            ]
          }
        ]
      }
    ]
  })
})
