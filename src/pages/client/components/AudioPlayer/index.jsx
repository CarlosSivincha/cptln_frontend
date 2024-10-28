import { useRef, useEffect, useState } from 'react';

const AudioPlayer = ({ audio }) => {
  const audioRef = useRef(null);
  const [isPlayAudio, setIsPlayAudio] = useState(false);
  const [controlVolume, setControlVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [countDuration, setCountDuration] = useState(0);

  const handleVolumeChange = (e) => {
    setControlVolume(e.target.value);
  };

  useEffect(() => {
    // Verificar que el URL de audio esté disponible antes de cargarlo
    if (audio) {
      audioRef.current.load(); // Cargar el audio cuando se recibe el URL
    }

    // Ajustar el volumen
    audioRef.current.volume = controlVolume;

    // Escuchar cuando el audio esté listo para reproducirse
    const handleCanPlayThrough = () => {
      setDuration(audioRef.current.duration);
      setCountDuration(audioRef.current.currentTime);
    };

    audioRef.current.addEventListener('canplaythrough', handleCanPlayThrough);

    return () => {
      audioRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, [controlVolume, audio]);

  useEffect(() => {
    const updateDuration = () => {
      setCountDuration(audioRef.current.currentTime);
    };

    let intervalId;
    if (isPlayAudio) {
      intervalId = setInterval(updateDuration, 1000);
    } else if (!isPlayAudio) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isPlayAudio]);

  const handlePlay = () => {
    if (audioRef.current.paused) {
      setIsPlayAudio(true);
      audioRef.current
        .play()
        .catch((error) => console.log('Error playing audio:', error));
    } else {
      setIsPlayAudio(false);
      audioRef.current.pause();
    }
  };

  const handleMute = () => {
    setControlVolume(0);
  };

  useEffect(() => {
    if (countDuration === duration) {
      setCountDuration(0);
    }
  }, [countDuration]);

  const progressPercentage = duration > 0 ? (countDuration * 100) / duration : 0;

  const handleClickProgressBar = (e) => {
    const rect = e.currentTarget.getBoundingClientRect(); // Obtener el rectángulo de la barra
    const clickX = e.clientX - rect.left; // Posición del clic en la barra
    const percentage = clickX / rect.width; // Calcular el porcentaje de la barra
    const newTime = percentage * duration; // Calcular el nuevo tiempo

    audioRef.current.currentTime = newTime; // Ajustar el tiempo del audio
    setCountDuration(newTime); // Actualizar el estado actual
  };

  return (
    <>
      <div className='flex items-center w-full p-2 space-x-4 rounded-md bg-slate-900'>
        {/* Cargar Audio */}
        <audio
          ref={audioRef}
          onEnded={() => {
            setIsPlayAudio(false);
          }}
          className='w-full'>
          <source src={audio} type='audio/mp3' />
        </audio>

        {/* Botón de Play y Pause */}
        <button onClick={handlePlay} className='flex'>
          {!isPlayAudio ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-white">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-white">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        {/* Tiempo Actual */}
        <span className="text-white">
          {duration
            ? `${Math.floor(countDuration / 60)
                .toString()
                .padStart(2, '0')}:${(countDuration % 60).toFixed().padStart(2, '0').slice(0, 2)}`
            : '00:00'}
        </span>

        {/* Barra de progreso */}
        <span
          onClick={handleClickProgressBar}
          className='flex w-full h-3 transition-all duration-300 rounded-sm cursor-pointer'
          style={{
            background: `linear-gradient(to right, white ${progressPercentage}%, #1f2937 ${progressPercentage + 0.1}%, #1f2937 100%)`,
          }}
        />

        {/* Tiempo Total */}
        <span className="text-white">
          {duration
            ? `${Math.floor(duration / 60)
                .toString()
                .padStart(2, '0')}:${(duration % 60).toFixed().padStart(2, '0').slice(0, 2)}`
            : '00:00'}
        </span>

        {/* Volumen */}
        <div className='relative items-center inline-block group'>
          <button className='group' onClick={handleMute}>
            {controlVolume > 0 ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-white">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-white">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM19.53 9.47a.75.75 0 0 0-1.06-1.06L16.5 10.38l-1.97-1.97a.75.75 0 0 0-1.06 1.06l1.97 1.97-1.97 1.97a.75.75 0 0 0 1.06 1.06l1.97-1.97 1.97 1.97a.75.75 0 0 0 1.06-1.06L17.56 12.35l1.97-1.97Z" />
              </svg>
            )}
          </button>

          <input
            value={controlVolume}
            onChange={handleVolumeChange}
            className='absolute hidden group-hover:inline-block w-14  top-10 -right-4 z-10 rotate-90'
            type='range'
            step='any'
            min={0}
            max={1}
          />
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;