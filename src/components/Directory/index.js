import React from 'react';
import ShopMen from './../../assets/man.jpg'
import ShopWoman from './../../assets/woman.jpg'
import './styles.scss';


const Directory = props => {
    return(
       <div className="directory">
          <div className="wrap">
            <div
                className="item"
                style={{
                 backgroundImage: `url(${ShopMen})`
             }}>
                <a>
                    Shop Man
                </a>
             </div>

             <div
                className="item"
                style={{
                 backgroundImage: `url(${ShopWoman})`
             }}>
                <a>
                    Shop Woman
                </a>
             </div>
          </div>          
       </div>
    );
};

export default Directory;