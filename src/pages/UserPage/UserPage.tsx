import React from 'react'
import styles from './user.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function UserPage() {
  return (
    <>
      <div className={cx('user__container')}>
        <div className={cx('user__profile-photo')}></div>
        <div className={cx('user__profile-data')}></div>
      </div>
    </>
  )
}

export default UserPage
