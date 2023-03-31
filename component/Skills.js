import style from '@/styles/Profile.module.scss';

import React from 'react';

const Skills = () => {
  return (
    <div className={style.skills}>
      <p className={ `${style.resume_title} ${style.resume_title_common}` }>
        Skills
      </p>

      <div className={style.resume_content_common}>
        <div className={style.skill_cont}>
          <p className={style.resume_sub_title}>Front-end</p>

          <div className={style.skill_icon_wrap}>
            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>H</span>
              </div>
              <p className={style.skill_txt}>HTML5</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>H</span>
              </div>
              <p className={style.skill_txt}>HTML5</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>H</span>
              </div>
              <p className={style.skill_txt}>HTML5</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>H</span>
              </div>
              <p className={style.skill_txt}>HTML5</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>H</span>
              </div>
              <p className={style.skill_txt}>HTML5</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>H</span>
              </div>
              <p className={style.skill_txt}>HTML5</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>H</span>
              </div>
              <p className={style.skill_txt}>HTML5</p>
            </div>

            <div className={style.skill_icon}>
              <div className={style.skill_circle}>
                <span>H</span>
              </div>
              <p className={style.skill_txt}>HTML5</p>
            </div>
            
          </div>
          

        </div>


      </div>

    </div>
  );
};

export default Skills;