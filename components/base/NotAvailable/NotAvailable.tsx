/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import style from './NotAvailable.module.scss';
import Close from 'components/assets/close';

const NotAvailable: React.FC<any> = ({ setNotAvailable }) => (
  <div id="ternoaWallet" className={style.Background}>
    <div className={style.Container}>
      <Close onClick={() => setNotAvailable(false)} className={style.Close} />
      <div className={style.Label}>Coming Soon</div>
      <div className={style.Title}>Stay tuned</div>
      <div className={style.Text}>
        This feature is in development phase and will soon be available on our
        platform. Please come back later.
      </div>
      <div onClick={() => setNotAvailable(false)} className={style.Button}>
        Continue
      </div>
    </div>
  </div>
);

export default NotAvailable;
