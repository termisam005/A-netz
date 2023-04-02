import React from 'react';
import ImgComponent from './ImgComponent';

const PagingComponent = () => {
  return (
      <ul class="paging_ul">
          <li>
              <a className='arrow'>
                  <ImgComponent src={'arr_prev_more.svg'} />
              </a>
          </li>
          <li>
              <a className='arrow'>
                  <ImgComponent src={'arr_prev.svg'} />
              </a>
          </li>
          <li>
              <a class="on">1</a>
          </li>
          <li>
              <a href="">2</a>
          </li>
          <li>
              <a href="">3</a>
          </li>
          <li>
              <a href="">4</a>
          </li>
          <li>
              <a href="">5</a>
          </li>
          <li>
              <a className='arrow'>
                  <ImgComponent src={'arr_next.svg'} />
              </a>
          </li>
          <li>
              <a className='arrow'>
                  <ImgComponent src={'arr_next_more.svg'} />
              </a>
          </li>
      </ul>
  );
};

export default PagingComponent;
