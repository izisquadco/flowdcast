import React from 'react'
import { AdMobBanner } from 'react-native-admob'

// import { Container } from './styles';

interface Props {
  id: string
}

const Ad: React.FC<Props> = ({ id }) => {
  return (
    <AdMobBanner
      adSize='fullBanner'
      adUnitID={id}
      testDevices={[AdMobBanner.simulatorId]}
    />
  )
}

export default Ad
