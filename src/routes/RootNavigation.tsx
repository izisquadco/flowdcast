import { createRef, MutableRefObject } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainerRef } from '@react-navigation/native'

export const mutableRef = createRef<boolean | null>()
export const isReadyRef = mutableRef as MutableRefObject<boolean>

export const navigationRef = createRef<NavigationContainerRef>()

export function navigate(name: string, params?: undefined): void {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.navigate(name, params)
    SplashScreen.hide()
  } else {
    SplashScreen.show()
  }
}
