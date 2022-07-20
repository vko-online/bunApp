import { StyleSheet } from 'react-native'
import { Text, View } from 'src/components/Themed'
import { useMeQuery } from 'src/generated/graphql'
import { Avatar, Title } from 'react-native-paper'
import Row from 'src/components/Row'
// import * as ImagePicker from 'expo-image-picker'
import Helmet from 'src/components/Helmet'

export default function Profile (): JSX.Element {
  const { loading, data, error } = useMeQuery()

  const hasImages = (data?.me?.images.length ?? 0) > 0
  return (
    <Helmet loading={loading} error={error}>
      <View style={s.container}>
        <Row>
          {
            hasImages
              ? <Avatar.Image style={s.avatar} source={{ uri: data?.me?.images[0].path }} />
              : <Text>No images, add new</Text>
          }
          <Title>{data?.me?.name}</Title>
        </Row>
      </View>
    </Helmet>
  )
}

const s = StyleSheet.create({
  container: {
    padding: 20
  },
  avatar: {
    marginRight: 20
  },
  image: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%'
  }
})
