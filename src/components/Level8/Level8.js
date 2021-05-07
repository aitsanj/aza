import { Divider, Button } from 'antd';
import react from 'react';
import { useDispatch } from 'react-redux';
import { addStep } from '../../helpers/helpers';

const Level8 = ({ showGif }) => {
  const dispatch = useDispatch();
  const clickcc = () => {
    dispatch(addStep('9'));
    showGif();
  };
  return (
    <>
      <div
        style={{
          width: 600,
          position: 'absolute',
          top: '300px',
          left: '35%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h3 style={{marginBottom: '20px'}} orientation="left">
          Обещаещь ли ты, что мы будем всегда смотреть на звезды и любоваться??
        </h3>
        <Button onClick={clickcc} style={{ width: 100, alignSelf: 'center' }}>
          ДА
        </Button>
      </div>
    </>
  );
};
export default Level8;
