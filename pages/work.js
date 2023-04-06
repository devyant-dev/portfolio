import React from 'react';
import style from '@/styles/Work.module.scss';
import data from '../data/work.json';

const work2 = () => {

  return (
    <div className='page_container'>
      <div className={style.work_container}>
        
        { 
          data.workdata.map( (obj, idx) =>   (<div key={idx} className={style.work_wrapper}>
          <div className={style.work_info_wrap}>
            <p className={style.info_num}>
              0{obj.number}
            </p>
            <p className={style.info_title}>
              {obj.title}
            </p>
            <p className={style.info_project}>
              {obj.info}
            </p>

            <p className={style.info_cate}>
              {obj.count} <br />
              {obj.cate}
            </p>
          </div>

          <div className={style.work_sub_wrap}>
            <div className={style.sub_cate_wrap}>
              <span className={style.sub_cate}>
              {obj.type}
              </span>
            </div>

            <div className={style.sub_icon_wrap}>
              <div className={style.plus_row}></div>
              <div className={style.plus_column}></div>
            </div>

          </div>

        </div>
            )
          )
        }
          
        {/* { data.workdata.length%2 == 0 ? '' : <div className={style.empty_wrapper}></div> }  */}

      </div>
    </div>
  );
};

export default work2;