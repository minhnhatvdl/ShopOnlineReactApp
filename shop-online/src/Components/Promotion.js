import React from 'react';

export const Promotion = () => {
  const stylePromotion = {
    width: '100%',
    height: '400px'
  }
  return(
    <section id="promotion" className="container-fluid pt-5 pb-5" style={stylePromotion}>
      <h1 className="text-center text-white">PROMOTION</h1>
      <div className="container bg-light pt-5 pb-5">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4">
            <div className="container">
              <img src={require('../Images/promotion_1.png')} alt="Promotion" style={{maxWidth: '100%'}} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4">
            <div className="container">
              <img src={require('../Images/promotion_2.png')} alt="Promotion" style={{maxWidth: '100%'}} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4">
            <div className="container">
              <img src={require('../Images/promotion_3.jpg')} alt="Promotion" style={{maxWidth: '100%'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}