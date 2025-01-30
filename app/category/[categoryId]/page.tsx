import React, { FC } from 'react'

const CategoryProducts:FC<{params:any}> = async ({params}) => {
  const {categoryId} = await params;
  console.log(categoryId);
  return (
    <div>CategoryProducts</div>
  )
}

export default CategoryProducts