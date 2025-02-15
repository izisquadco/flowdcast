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
  STATE_PLAYING,
  STATE_PAUSED,
  STATE_BUFFERING,
  STATE_STOPPED,
} from 'react-native-track-player'
import { format, setSeconds, startOfDay } from 'date-fns'

interface ExtendedTrack extends Track {
  artwork?: string
}

interface PlayerContextProps {
  previousAction: 'play' | 'pause' | null
  isPlayerVisible: boolean
  isPlaying: boolean
  isPaused: boolean
  isStopped: boolean
  isBuffering: boolean
  isEmpty: boolean
  currentTrack: ExtendedTrack | null
  progress: {
    position: number
    duration: number
    positionString: string
    durationString: string
  }
  showPlayer: () => void
  hidePlayer: () => void
  play: (track?: ExtendedTrack) => void
  pause: () => void
  seekTo: (amount?: number) => void
  jumpTo: (position?: number) => void
}

export const PlayerContext = createContext<PlayerContextProps>({
  previousAction: null,
  isPlayerVisible: false,
  isPlaying: false,
  isPaused: false,
  isStopped: false,
  isBuffering: false,
  isEmpty: true,
  currentTrack: null,
  progress: {
    position: 0,
    duration: 0,
    positionString: '00:00:00',
    durationString: '00:00:00',
  },
  showPlayer: () => null,
  hidePlayer: () => null,
  play: () => null,
  pause: () => null,
  seekTo: () => null,
  jumpTo: () => null,
})

export const PlayerProvider: React.FC = ({ children }) => {
  const [playerState, setPlayerState] = useState<State | null>(null)
  const [currentTrack, setCurrentTrack] = useState<ExtendedTrack | null>(null)

  const [previousAction, setPreviousAction] = useState<'play' | 'pause' | null>(
    null,
  )
  const [isPlayerVisible, setIsPlayerVisible] = useState(false)

  const [progress, setProgress] = useState({
    position: 0,
    duration: 0,
    positionString: '00:00:00',
    durationString: '00:00:00',
  })

  useEffect(() => {
    function transformProgress(value: number) {
      return format(setSeconds(startOfDay(new Date()), value), 'H:mm:ss')
    }

    async function getProgress() {
      const position = await TrackPlayer.getPosition()
      const duration = await TrackPlayer.getDuration()
      const positionString = transformProgress(position)
      const durationString = transformProgress(duration)

      setProgress({ position, duration, positionString, durationString })
    }

    const time = setInterval(() => getProgress(), 1000)

    return () => {
      clearInterval(time)

      setProgress({
        position: 0,
        duration: 0,
        positionString: '00:00:00',
        durationString: '00:00:00',
      })
    }
  }, [])

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

  const showPlayer = useCallback(() => {
    setIsPlayerVisible(true)
  }, [])

  const hidePlayer = useCallback(() => {
    setIsPlayerVisible(false)
  }, [])

  const play = useCallback(
    async (track?: ExtendedTrack) => {
      setPreviousAction('play')

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
    setPreviousAction('pause')

    await TrackPlayer.pause()
  }, [])

  const seekTo = useCallback(async (amount = 30) => {
    const position = await TrackPlayer.getPosition()

    await TrackPlayer.seekTo(position + amount)
  }, [])

  const jumpTo = useCallback(async position => {
    await TrackPlayer.seekTo(position)
  }, [])

  const value: PlayerContextProps = {
    previousAction,
    isPlayerVisible,
    isPlaying: playerState === STATE_PLAYING,
    isPaused: playerState === STATE_PAUSED,
    isStopped: playerState === STATE_STOPPED,
    isBuffering: playerState === STATE_BUFFERING,
    isEmpty: playerState === null,
    currentTrack,
    progress,
    showPlayer,
    hidePlayer,
    pause,
    play,
    seekTo,
    jumpTo,
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
