import React from 'react';
import './style.scss';
import MenuItem from '../../components/MenuItem/MenuItem';

import { birthdayCakes } from '../../Data';
const BirthdayCakePage = () => {
  return (
    <div className='landing'>
      <div className='header'></div>

      <div className='landing-body'>
        <div className='call-to-action'>
          <div className='call-buttons'>
            <button>Birthday</button>
          </div>

          <div className='action call-products'>
            {birthdayCakes.map(item => {
              return <MenuItem key={item.id} item={item} />;
            })}

            {/* The Modal */}
            <div id='myModal' className='modal'>
              {/* The Close Button */}
              <span className='close'>&times;</span>

              {/* Modal Content (The Image) */}
              <img className='modal-content' id='img01' alt='' />

              {/* Modal Caption (Image Text) */}
              <div id='caption'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCakePage;
