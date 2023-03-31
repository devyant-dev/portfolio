import style from '@/styles/Profile.module.scss';
import React from 'react';

const WorkEx = () => {
  return (
    <div className={style.work_ex}>
      <p className={ `${style.resume_title} ${style.resume_title_common}` }>
      Work Experience
      </p>
      <div className={style.resume_content_common}>
        여긴 경험
      </div>
    </div>
  )
};

export default WorkEx;