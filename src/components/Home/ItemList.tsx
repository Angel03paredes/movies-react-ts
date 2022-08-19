import React from 'react'

interface ItemListProps {
  name: string
}

function ItemList(props:ItemListProps) {

  return (
    <div className="rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 cursor-pointer">
                {props.name}
    </div>
  )
}

export default ItemList