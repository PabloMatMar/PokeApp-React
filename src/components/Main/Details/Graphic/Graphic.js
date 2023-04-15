import React, { useEffect, useContext } from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import useScreenSize from '../../../../hook/useScreenSize';
import { pokemonContext } from '../../../../context/pokemonContext';

const Graphic = (props) => {

  const { chartSize, setChartSize } = useContext(pokemonContext);
  const { width } = useScreenSize();

  useEffect(() => {
    //Creo esta funcion para regular el tamaño en funcion del width de la pantalla (podria crear 10 if a mano en lugar de esta funcion pero me parece menos escalable y mucho mas feo)
    let num = 700;
    let size = 505;
    let letter = 18.5;
    function chartSize() {
      for (let i = 0; i < 13; i++) {
        num = num - 40;
        size = size - 20;
        letter = letter - 0.5;
        if (i > 11) num = size - 20;
        if (width > num) {
          setChartSize([size, letter])
          return chartSize;
        }
      };
    };
    chartSize();
  }, [width, setChartSize])

  const noSmoothing = points => {
    let d = 'M' + points[0][0].toFixed(4) + ',' + points[0][1].toFixed(4);
    for (let i = 1; i < points.length; i++)
      d += 'L' + points[i][0].toFixed(4) + ',' + points[i][1].toFixed(4);

    return d + 'z';
  };

  const defaultOptions = {
    axes: true,
    scales: 5,
    captions: true,
    captionMargin: 30,
    dots: true,
    zoomDistance: 1.2,
    setViewBox: (options) => `-${options.captionMargin} 0 ${options.size + options.captionMargin * 2} ${options.size}`,
    smoothing: noSmoothing,
    axisProps: () => ({ className: 'axis' }),
    scaleProps: () => ({ className: 'scale', fill: 'none' }),
    shapeProps: () => ({ className: 'shape' }),
    captionProps: () => ({
      className: 'caption',
      textAnchor: 'middle',
      fontSize: chartSize[1],
      fontFamily: 'sans-serif'
    }),
    dotProps: () => ({
      className: 'dot',
      mouseEnter: (dot) => { console.log(dot) },
      mouseLeave: (dot) => { console.log(dot) }
    }),
    rotation: 0
  };


  return <div className='chart'>
    <h3>Base Stats</h3>
    <RadarChart
      captions={{
        Special_attack: 'Special attack',
        Attack: 'Attack',
        Defense: 'Defense',
        Special_defense: 'Special defense',
        Life: 'Life',
        Speed: 'Speed'
      }}
      data={props.data}
      size={chartSize[0]}
      options={defaultOptions}
    />
  </div>;
};

export default Graphic;