import react, { useState } from 'react';
import { Timeline, Button, Typography, Input } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addStep } from '../../helpers/helpers';
const { Title } = Typography;
const { TextArea } = Input;

const Level7 = ({ showGif }) => {
  const dispatch = useDispatch();

  const [state, setstate] = useState('');
  const onchan = (e) => {
    setstate(e.target.value);
  };
  const clicked = () => {
    if (state === 'Зоопарк') {
      showGif();
      dispatch(addStep('8'));
    }
  };
  const arrayTime = [
    'Travelers Coffee',
    'Балет Лебединое озеро',
    'Катание на велосипедах',
    'Озеро Маншук Маметовой',
    'Катамараны',
    'Зоопарк',
  ];
  return (
    <>
      <Title>Выбери самое восхитительное событие</Title>
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
        }}
      >
        <Timeline mode="alternate" style={{ width: '100%' }}>
          {arrayTime.map((el, index) => {
            return (
              <Timeline.Item
                color={index % 2 === 0 ? 'green' : 'blue'}
                style={{ fontSize: '20px' }}
              >
                {el}
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Input
        placeholder="Лучшее воспоминание"
        bordered={true}
        size="large"
        style={{ width: 200, marginBottom: '10px' }}
        onChange={onchan}
      />
      <Button style={{borderRadius: '10px', color: 'white', backgroundColor: '#1890ff'}} onClick={clicked}>Подтвердить</Button>
      </div>
    </>
  );
};
export default Level7;
