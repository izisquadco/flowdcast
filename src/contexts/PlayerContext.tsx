import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react'
import TrackPlayer, {
  Track,
  State,
  STATE_PAUSED,
  STATE_PLAYING,
  STATE_STOPPED,
} from 'react-native-track-player'

interface PlayerContextProps {
  isPlaying: boolean
  isPaused: boolean
  isStopped: boolean
  isEmpty: boolean
  currentTrack: Track | null
  play: (track?: Track) => void
  pause: () => void
  seekTo: (amount?: number) => void
}

export const PlayerContext = createContext<PlayerContextProps>({
  isPlaying: false,
  isPaused: false,
  isStopped: false,
  isEmpty: true,
  currentTrack: null,
  play: () => null,
  pause: () => null,
  seekTo: () => null,
})

export const PlayerProvider: React.FC = ({ children }) => {
  const [playerState, setPlayerState] = useState<null | State>(null)
  const [currentTrack, setCurrentTrack] = useState<null | Track>(null)

  useEffect(() => {
    const listener = TrackPlayer.addEventListener(
      'playback-state',
      ({ state }: { state: State }) => {
        setPlayerState(state)
      },
    )

    return () => {
      listener.remove()
    }
  }, [])

  const play = useCallback(
    async (track?: Track) => {
      if (!track) {
        if (currentTrack) {
          await TrackPlayer.play()
        }
        return
      }

      if (currentTrack && track.id !== currentTrack.id) {
        await TrackPlayer.reset()
      }

      await TrackPlayer.add([track])
      setCurrentTrack(track)
      await TrackPlayer.play()
    },
    [currentTrack],
  )

  const pause = useCallback(async () => {
    await TrackPlayer.pause()
  }, [])

  const seekTo = useCallback(async (amount = 30) => {
    const position = await TrackPlayer.getPosition()

    await TrackPlayer.seekTo(position + amount)
  }, [])

  const value: PlayerContextProps = {
    isPlaying: playerState === STATE_PLAYING,
    isPaused: playerState === STATE_PAUSED,
    isStopped: playerState === STATE_STOPPED,
    isEmpty: playerState === null,
    currentTrack,
    pause,
    play,
    seekTo,
  }

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  )
}

export function usePlayer(): PlayerContextProps {
  const context = useContext(PlayerContext)

  if (!context) {
    throw new Error('usePlayer must be used within a PlayerContext')
  }

  return context
}
