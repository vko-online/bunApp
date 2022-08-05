import { StyleSheet } from 'react-native'
// import RangeSlider from 'react-native-range-slider-expo'
import { List } from 'react-native-paper'

import { View } from 'src/components/Themed'

import { setFilter } from 'src/store/slices/filter'
import { useAppDispatch, useAppSelector } from 'src/store'
import React, { useCallback } from 'react'

const minAge = 18
const maxAge = 40

export default function FilterModal (): JSX.Element {
  const dispatch = useAppDispatch()
  const filter = useAppSelector(state => state.filter)

  const handleChange = useCallback(<T extends keyof typeof filter> (key: T, value: typeof filter[T]): void => {
    dispatch(setFilter({
      ...filter,
      [key]: value
    }))
  }, [filter])

  return (
    <View style={s.container}>
      <List.Section>
        <List.Subheader>AVAILABLE FILTERS</List.Subheader>
        <List.Item
          title='Online'
          description='Show only buns that are currently online'
          onPress={() => handleChange('online', !filter.online)}
          right={() => (
            <List.Icon icon={filter.online ? 'checkbox-outline' : 'checkbox-blank-outline'} />
          )}
        />
        <List.Subheader>Age range</List.Subheader>
        {/* <RangeSlider
          min={minAge} max={maxAge}
          fromValueOnChange={val => handleChange('fromAge', val)}
          toValueOnChange={val => handleChange('toAge', val)}
          initialFromValue={filter.fromAge}
          initialToValue={filter.toAge}
          step={1}
          showValueLabels
          showRangeLabels
          containerStyle={s.slider}
        /> */}
      </List.Section>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  slider: {
    paddingHorizontal: 20
  }
})
