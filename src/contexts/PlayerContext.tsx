import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react'
import TrackPlayer, { Track, State, Event } from 'react-native-track-player'

interface ExtendedTrack extends Track {
  artwork?: string
}

interface PlayerContextProps {
  isPlaying: boolean
  isPaused: boolean
  isStopped: boolean
  isEmpty: boolean
  currentTrack: ExtendedTrack | null
  play: (track?: ExtendedTrack) => void
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
  const [playerState, setPlayerState] = useState<State | null>(null)
  const [currentTrack, setCurrentTrack] = useState<ExtendedTrack | null>(null)

  useEffect(() => {
    const listener = TrackPlayer.addEventListener(
      Event.PlaybackState,
      ({ state }: { state: State }) => {
        setPlayerState(state)
      },
    )
    return () => {
      listener.remove()
    }
  }, [])

  const play = useCallback(
    async (track?: ExtendedTrack) => {
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
    isPlaying: playerState === State.Playing,
    isPaused: playerState === State.Paused,
    isStopped: playerState === State.Stopped,
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
