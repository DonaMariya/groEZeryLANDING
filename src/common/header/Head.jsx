import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +91 12 3456 7894</label>
            <i className='fa fa-envelope'></i>
            <label> support@groz.com</label>
          </div>
          <div className='right row RText'>
            <label>More about us</label>
            <label>GetHelp</label>
            <span></span>
            {/* <label>IND</label> */}
            <span></span>
            {/* <label>USD</label> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
