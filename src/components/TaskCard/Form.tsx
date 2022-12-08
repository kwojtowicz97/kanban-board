import { RefObject } from 'react'
import ButtonsContainer from './ButtonsContainer'
import styles from './TaskCard.module.css'

type TForm = {
  children: React.ReactNode
  submitHanddler: () => void
  closeHandler: () => void
  submitButtonText: string
}

type TFormFieldProps = {
  className?: string
  labelClassName?: string
  label: string
  name: string
  children?: React.ReactNode
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
}

export const Form = ({
  submitButtonText,
  children,
  submitHanddler,
  closeHandler,
}: TForm) => {
  return (
    <form onSubmit={submitHanddler} className={styles.form}>
      <div className={styles.title}>New task</div>
      <div className={styles.content}>{children}</div>
      <ButtonsContainer
        closeHandler={closeHandler}
        buttonText={submitButtonText}
      />
    </form>
  )
}

export const FormFieldWrapper = ({
  className,
  labelClassName,
  label,
  name,
  children,
}: TFormFieldProps) => {
  return (
    <div className={className || styles.inputGroup}>
      <label className={labelClassName} htmlFor={name}>
        {label}
      </label>
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
}: TInputFieldProps) => {
  return (
    <FormFieldWrapper
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
}: TSelectFieldProps) => {
  return (
    <FormFieldWrapper
      label={label}
      name={name}
      className={className}
      labelClassName={labelClassName}
    >
      <select
        className={selectClassName}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
      >
        {values.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </FormFieldWrapper>
  )
}
