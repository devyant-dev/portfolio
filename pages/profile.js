import React from 'react';
import style from '@/styles/Profile.module.scss';
import Contact from '@/component/Contact';
import Education from '@/component/Education';
import Skills from '@/component/Skills';
import WorkEx from '@/component/WorkEx';




const profile = () => {


  return (
    <div className='page_container'>
      <section className={style.profile_wrapper}>
        <div className={style.profile_img}>
\         <img src="" alt="profile_image" />
        </div>

        <dir className={style.profile_txt}>
          sdsfsdf
        </dir>
      </section>

      <section className={style.resume_wrapper}>
        <div className={style.resume_part01}>
          <Contact />
          <Education />
        </div>


        <div className={style.resume_part02}>
          <Skills />
          <WorkEx />
        </div>

        
      </section>

    </div>
  );
};

export default profile;