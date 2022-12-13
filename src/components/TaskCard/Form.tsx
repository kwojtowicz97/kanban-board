import React from 'react'
import styles from './TaskCard.module.css'
import { EditorState } from 'draft-js'
import RichTextEditor from '../RichTextEditor/RichTextEditor'
import { TTask } from '../../providers/KanbanProvider'

type TForm = {
  children: React.ReactNode
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void
  closeHandler: () => void
  submitButtonText: string
  task?: TTask
}

type TFormFieldProps = {
  className?: string
  labelClassName?: string
  label?: string
  name: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

interface TInputFieldProps extends TFormFieldProps {
  inputClassName?: string
  type: React.HTMLInputTypeAttribute
  value: string
  required?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface TSelectFieldProps extends TFormFieldProps {
  selectClassName?: string
  values: string[]
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  required?: boolean
  selectStyle?: React.CSSProperties
}

interface TRichTextEditorProps extends TFormFieldProps {
  value: EditorState
  onChange: (editorState: EditorState) => void
}

export const Form = ({
  submitButtonText,
  children,
  submitHandler,
  closeHandler,
  task,
}: TForm) => {
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.title}>{task ? 'Task preview' : 'New task'}</div>
      <div className={styles.content}>{children}</div>
      <div className={styles.buttons}>
        <button type={'button'} onClick={closeHandler}>
          Cancel
        </button>
        <button type={'submit'} className={styles.addTask}>
          {submitButtonText}
        </button>
      </div>
    </form>
  )
}

export const FormFieldWrapper = ({
  className,
  labelClassName,
  label,
  name,
  children,
  style,
}: TFormFieldProps) => {
  return (
    <div style={style} className={className || styles.inputGroup}>
      {label ? (
        <label className={labelClassName} htmlFor={name}>
          {label}
        </label>
      ) : null}
      {children}
    </div>
  )
}

export const InputField = ({
  className,
  labelClassName,
  inputClassName,
  label,
  name,
  type,
  value,
  required,
  onChange,
  style,
}: TInputFieldProps) => {
  return (
    <FormFieldWrapper
      style={style}
      labelClassName={labelClassName}
      name={name}
      label={label}
      className={className}
    >
      <input
        type={type}
        name={name}
        className={inputClassName}
        value={value}
        required={required}
        onChange={onChange}
      />
    </FormFieldWrapper>
  )
}

export const SelectField = ({
  className,
  labelClassName,
  selectClassName,
  label,
  name,
  value,
  required,
  onChange,
  values,
  selectStyle,
  style,
}: TSelectFieldProps) => {
  return (
    <FormFieldWrapper
      style={style}
      label={label}
      name={name}
      className={className}
      labelClassName={labelClassName}
    >
      <select
        style={selectStyle}
        className={selectClassName}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
      >
        {values.map((value) => (
          <option key={value + Math.random()} value={value}>
            {value}
          </option>
        ))}
      </select>
    </FormFieldWrapper>
  )
}

export const RichTextEditorField = ({
  label,
  name,
  className,
  labelClassName,
  onChange,
  value,
  style,
}: TRichTextEditorProps) => {
  return (
    <FormFieldWrapper
      style={style}
      className={className}
      labelClassName={labelClassName}
      label={label}
      name={name}
    >
      <RichTextEditor onChange={onChange} value={value} />
    </FormFieldWrapper>
  )
}
