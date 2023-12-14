import { InputHTMLAttributes, forwardRef, ForwardedRef } from 'react'
import InputMask from 'react-input-mask'
import { Container } from './Input.styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  mask: string
}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, error, label, mask, type, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <InputMask
        {...props}
        inputRef={ref}
        mask={mask}
        maskChar="_"
        type={type}
      />
      {/* <input id={id} type="text" ref={ref} {...props} /> */}
      {error && <p>{error}</p>}
    </Container>
  )
})
