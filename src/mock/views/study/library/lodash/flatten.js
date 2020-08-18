import Mock from 'mockjs'

Mock.mock('/library/lodash/flatten', 'get', (req, res) => {
  return Mock.mock({
    'records|2': [
      {
        'id|+1': 1,
        'name': '@cname',
        'age': '@integer(40, 80)',
        'children|2': [
          {
            'name': '@cname',
            'age': '@integer(40, 80)',
            'children|2': [
              {
                'name': '@cname',
                'age': '@integer(40, 80)',
                'children|2': [
                  {
                    'name': '@cname',
                    'age': '@integer(40, 80)'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  })
})
