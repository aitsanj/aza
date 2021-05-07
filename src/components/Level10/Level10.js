import react, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { winStep } from '../../helpers/helpers';
import ring from '../../images/ring.svg';
import '../podskazka.css';

const Level10 = () => {
  const [arr, setArr] = useState([
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'not exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
    'exist',
  ]);
  useEffect(() => {}, []);
  const dispatch = useDispatch();
  const [win, setWin] = useState(false);
  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomNUmber = getRandom(0, 56);

  const findMe = (e) => {
    document.getElementById(e.target.id).className = 'block clicked';
    if (e.target.dataset.source === 'not exist') {
      setWin(true);
      dispatch(winStep('11'));
    }
    console.log(e.target.dataset.source);
  };
  return (
    <>
      {win && (
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: 100,
            left: 0,
            top: 0,
            background: 'rgba(0,0,0,0.5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={ring} style={{ width: 200 }} className="ring" />
        </div>
      )}

      <div
        style={{
          width: 500,
          height: 500,
          position: 'absolute',
          top: '45%',
          left: '50%',
          marginRight: '-50%',
          transform: ' translate(-50%, -50%) ',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          {arr.map((el, index) => {
            return (
              <div
                id={index}
                className="block"
                data-source={el}
                style={{
                  width: 40,
                  height: 40,
                  background: 'gray',
                  margin: 10,
                }}
                onClick={(e) => findMe(e)}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Level10;
