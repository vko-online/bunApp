import { TextInput, Menu } from 'react-native-paper'
import { useRef, useState } from 'react'
import { TextInput as RNTextInput } from 'react-native'

export interface Item {
  label: string
  value: string
}
interface Props {
  label: string
  placeholder?: string
  data: Item[]
  value?: string | null
  onChange: (d: string) => void
}
export default function Dropdown ({ value, label, placeholder, data, onChange }: Props): JSX.Element {
  const [visible, setVisible] = useState(false)
  const [val, setVal] = useState(value)
  const ref = useRef<RNTextInput>(null)

  const openMenu = (): void => setVisible(true)
  const closeMenu = (): void => setVisible(false)
  const handleSet = (iden: string): void => {
    setVal(iden)
    closeMenu()
    ref.current?.blur()
    onChange(iden)
  }
  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <TextInput
          mode='outlined'
          label={label}
          value={val ?? ''}
          ref={ref}
          onFocus={openMenu}
          placeholder={placeholder}
        />
        }
    >
      {
        data.map(item => <Menu.Item key={item.value} onPress={() => handleSet(item.value)} title={item.label} />)
      }
    </Menu>
  )
}
