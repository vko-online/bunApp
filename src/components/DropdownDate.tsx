import { TextInput } from 'react-native-paper'
import { useRef, useState } from 'react'
import { TextInput as RNTextInput } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { format } from 'date-fns'

export interface Item {
  label: string
  value: string
}
interface Props {
  label: string
  placeholder?: string
  value: Date | null
  onChange: (d: Date) => void
  error?: boolean
}
export default function Dropdown ({ value, placeholder, label, onChange, error }: Props): JSX.Element {
  const [visible, setVisible] = useState(false)
  const [val, setVal] = useState(value)
  const ref = useRef<RNTextInput>(null)

  const openMenu = (): void => setVisible(true)
  const closeMenu = (): void => setVisible(false)
  const handleSet = (iden: Date): void => {
    setVal(iden)
    closeMenu()
    onChange(iden)
    ref.current?.blur()
  }
  return (
    <>
      <TextInput
        mode='outlined'
        label={label}
        value={val != null ? format(val, 'dd MMMM yyyy') : ''}
        ref={ref}
        focusable={false}
        onFocus={openMenu}
        error={error}
        placeholder={placeholder}
      />
      <DateTimePickerModal
        isVisible={visible}
        mode='date'
        onConfirm={handleSet}
        onCancel={closeMenu}
      />
    </>
  )
}
