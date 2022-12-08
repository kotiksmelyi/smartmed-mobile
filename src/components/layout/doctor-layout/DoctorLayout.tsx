import { AppLogo } from '@components/UI/icons/logo/AppLogo';
import { NotificationIcon } from '@components/UI/icons/notification/NotificationIcon';

import testImg from '@assets/test-img.jpg';

import { doctorLayoutData } from './doctor-layout-data';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

import styles from './doctor-layout.module.scss';

const DoctorLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.aside}>
        <div className={styles.aside_logo}>
          <AppLogo />
        </div>
        <div className={styles.link_container}>
          {doctorLayoutData.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <div>
                {menu.icon}
                <span>{menu.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.main}>
        <nav className={styles.nav}>
          <Avatar
            className={styles.avatar}
            size='large'
            src={testImg}
            icon={<UserOutlined />}
          />
          <div className={styles.avatar_text}>
            <h5>Виталий Врач</h5>
            <a>Выйти</a>
          </div>
          <NotificationIcon className={styles.bell} />
          <div className={styles.bell_counter}>1</div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default DoctorLayout;
