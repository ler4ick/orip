/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type React from 'react'

import styles from './TaskModal.module.scss'
import classNames from 'classnames/bind'

import PNG_DELETE from '../../../public/images/delete.png'
import SVG_CHECKMARK from '../../../public/images/checkmark.svg'

import { Field, Form, Formik } from 'formik'

import { TextField } from '@mui/material'
import { type ITask } from '../../redux/appConfig'
import Select from '../../components/Select'

const cx = classNames.bind(styles)

interface ITaskModal {
  className?: string
  item?: ITask | null
  onClose: () => void
  type: 'edit' | 'create'
}

const TaskModal: React.FC<ITaskModal> = ({
  className = '',
  item,
  onClose,
  type
}) => {
  const initialValues =
    type === 'edit'
      ? { ...item }
      : {
          id: null,
          title: null,
          description: null,
          status: null,
          responsible: null
        }
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ handleSubmit }) => (
        <Form>
          <div className={cx('container')}>
            <div className={cx('news-item', className)}>
              <div className={cx('news-item__title')}>
                <Field as={TextField} name="title" label="Название" />
              </div>
              <div className={cx('news-item__text')}>
                <Field as={TextField} name="description" label="Описание" />
              </div>
              <div className={cx('news-item__text')}>
                <Field
                  as={Select}
                  options={[
                    {
                      label: 'completed',
                      value: 'completed'
                    },
                    {
                      label: 'todo',
                      value: 'todo'
                    },
                    {
                      label: 'awaiting',
                      value: 'awaiting'
                    }
                  ]}
                  name="status"
                  label="Статус"
                />
              </div>
              {type === 'create' && (
                <div className={cx('news-item__text')}>
                  <Field
                    as={Select}
                    options={[
                      {
                        label: 'Зубенко М.П.',
                        value: 1
                      },
                      {
                        label: 'Карлуша В.Ю.',
                        value: 2
                      }
                    ]}
                    name="responsible"
                    label="Ответственный"
                  />
                </div>
              )}

              <img
                className={cx('news-item__edit-button')}
                src={SVG_CHECKMARK}
                alt="photo"
                width="100%"
                height="100%"
                onClick={() => {
                  handleSubmit()
                }}
              />
              <div className={cx('news-item__delete-button')} onClick={onClose}>
                <img src={PNG_DELETE} alt="photo" width="100%" height="100%" />
              </div>
            </div>
          </div>
          <div className={cx('outer-container')}></div>
        </Form>
      )}
    </Formik>
  )
}

export default TaskModal
