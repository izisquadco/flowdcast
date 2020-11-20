import React, { useEffect } from 'react'
import TrackPlayer from 'react-native-track-player'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'

import Routes from './routes'
import theme from './theme'

const episode = {
  artwork:
    'https://firebasestorage.googleapis.com/v0/b/flowpodcast.appspot.com/o/uploads%2F2d74e69c-6817-427f-83d9-c33e2fb18eb8?alt=media&token=84201aec-e56f-4d87-8fc6-d070da49bf48',
  // description:
  // 'Uma conversa franca e livre sobre alguns assuntos relevantes no momento. O papo que você teria com seus amigos em um bar.',
  url: 'https://content.blubrry.com/flowpdc/ep01.mp3',
  // created_at: '2018-10-02T06:14:05-03:00',
  // bytes: '130015095',
  // status: true,
  // duration: '02:15:19',
  title: 'Flow Podcast #01 – MONARK E IGOR',
  // embed:
  // 'https://player.blubrry.com/?media_url=https%3A%2F%2Fmedia.blubrry.com%2Fflowpdc%2Fp%2Fcontent.blubrry.com%2Fflowpdc%2Fep01.mp3#darkOrLight-light&shownotes-ffffff&shownotesBackground-444444&download-ffffff&downloadBackground-003366&subscribe-ffffff&subscribeBackground-fb8c00&share-ffffff&shareBackground-1976d2',
  // feed: {
  //   deezer: 'https://www.deezer.com/br/show/406562',
  //   google:
  //     'https://podcasts.google.com/feed/aHR0cHM6Ly9mbG93cG9kY2FzdC5jb20uYnIvZmVlZC9wb2RjYXN0Lw/episode/aHR0cDovL2NmZTc2MzFmLTdiMTAtYmM1ZS0wN2VmLTYwZDIwNDAxOGUzMg?sa=X&ved=0CAUQkfYCahcKEwj46M-EptDsAhUAAAAAHQAAAAAQGQ',
  //   spotify: 'https://open.spotify.com/episode/4ErEI0ImvtV1FL4OWNV0wN',
  //   youtube: 'QouvU0RhsPU',
  //   apple: 'https://podcasts.apple.com/us/podcast/flow-podcast/id1437955740',
  //   amazon:
  //     'https://music.amazon.com.br/podcasts/798430f9-809d-4ee8-b371-6a8875e5f765/Flow-Podcast',
  // },
  // updated_at: '2020-10-26T17:37:26-03:00',
  id: 'n80FeugR6eRGyw6aGA7b',
  artist: 'Flow',
  // avatar:
  // 'https://yt3.ggpht.com/ytc/AAUvwnh3qcXoKDGfaEE_tqvBu-VCHcUg0lEPXjBNFT4rgA=s512-c-k-c0x00ffffff-no-rj',
}

const App: React.FC = () => {
  useEffect(() => {
    async function setupPlayer() {
      await TrackPlayer.setupPlayer()
      await TrackPlayer.add([episode])
      await TrackPlayer.play()

      setTimeout(() => {
        TrackPlayer.stop()
      }, 2000)
    }

    setupPlayer()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={theme.colors.background}
      />

      <Routes />
    </ThemeProvider>
  )
}

export default App
