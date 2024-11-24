'use client'

import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX, Play, Pause, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { cn } from '@/lib/utils'

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isVolumeVisible, setIsVolumeVisible] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const audio = new Audio()
    audio.src = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ENEMY-WvP8QWqQZpX3IOBDjB5r8ZlnVMAAr9.mp3'
    audio.loop = true
    audioRef.current = audio

    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration)
      console.log('Audio loaded, duration:', audio.duration)
    })

    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime)
    })

    audio.addEventListener('error', (e) => {
      console.error('Audio error:', e)
      setError('Failed to load audio. Please check your internet connection and try again.')
    })

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.remove()
        audioRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        await audioRef.current.pause()
      } else {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Playback error:', error)
            setError('Failed to play audio. Please try again.')
          })
        }
      }
      setIsPlaying(!isPlaying)
    } catch (err) {
      console.error('Playback error:', err)
      setError('Failed to play audio. Please try again.')
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleTimeChange = (newTime: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newTime[0]
    }
  }

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume[0])
  }

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
    }
  }

  if (!isMounted) return null

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="bg-purple-200/90 backdrop-blur-sm rounded-lg p-4 shadow-lg flex items-center gap-2 transition-all duration-300 hover:bg-purple-300/90">
        <div className="flex items-center gap-2">
          <Button
            onClick={togglePlay}
            variant="ghost"
            size="icon"
            className="text-purple-800 hover:text-purple-900 transition-colors"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
          
          <Button
            onClick={resetAudio}
            variant="ghost"
            size="icon"
            className="text-purple-800 hover:text-purple-900 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>

          <div className="relative">
            <Button
              onMouseEnter={() => setIsVolumeVisible(true)}
              onMouseLeave={() => setIsVolumeVisible(false)}
              variant="ghost"
              size="icon"
              className="text-purple-800 hover:text-purple-900 transition-colors"
            >
              {volume === 0 ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            </Button>
            
            <div
              className={cn(
                "absolute bottom-full mb-2 p-2 bg-purple-200/90 rounded-lg transition-all duration-300",
                isVolumeVisible ? "opacity-100 visible" : "opacity-0 invisible"
              )}
              onMouseEnter={() => setIsVolumeVisible(true)}
              onMouseLeave={() => setIsVolumeVisible(false)}
            >
              <Slider
                defaultValue={[1]}
                max={1}
                step={0.1}
                value={[volume]}
                onValueChange={handleVolumeChange}
                orientation="vertical"
                className="h-24"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col min-w-[200px]">
          <Slider
            defaultValue={[0]}
            max={duration}
            step={1}
            value={[currentTime]}
            onValueChange={handleTimeChange}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-purple-900 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
      
      {error && (
        <div className="absolute bottom-full mb-2 p-2 bg-red-500/90 text-white rounded-lg text-sm">
          {error}
        </div>
      )}
    </div>
  )
}