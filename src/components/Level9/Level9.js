import { Button, Popover } from 'antd';
import react from 'react';
import { useDispatch } from 'react-redux';
import { addStep } from '../../helpers/helpers';

const Level9 = ({ showGif }) => {
  const content = (
    <div>
      <p>Тут только один ответ верный!</p>
    </div>
  );

  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          width: 600,
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginRight: '-50%',
          transform: ' translate(-50%, -50%) ',
          display: 'flex',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column'
        }}
      >
        <h2>Готова ли ты к приключению длиною в жизнь?</h2>
        <div style={{display:'flex', justifyContent: 'space-between', width: '300px'}}>
        <Button>ДА</Button>
        <Button
          onClick={() => {
            showGif();
            dispatch(addStep('10'));
          }}
        >
          ВСЕГДА ДА
        </Button>
        </div>
      </div>

      <Popover content={content} title="Title">
        <Button
          type="primary"
          className="button"
          style={{ position: 'absolute', top: '10%', right: '5%' }}
        >
          Получить подсказку
        </Button>
      </Popover>
    </>
  );
};
export default Level9;
