import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Fruits & Vegetables",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Home Care",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Staples",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Beverages",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Dairy & Bakery",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Personal Care",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Beauty",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Home & Kitchen",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
