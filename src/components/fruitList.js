import React from 'react';
import _ from 'lodash'

const RandomFruit = ({index, fruits}) => {
    const fruitLoaded = _.find(fruits, (item) => {
      return item.key === index
    })
    if (!fruitLoaded) return <div>Load fruit #{index}</div>
    else return <div>Fruit= {fruitLoaded.icon}</div>
}

const FruitList = ({fruits}) => {
  
  const list = [{key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}]
  const displayList = _.map(list, (item) => {
    return (
      <RandomFruit key={item.key} index={item.key} fruits={fruits} />
    )
  })

  return (
    <div>
      {displayList}
    </div>
  )
}

export default FruitList
