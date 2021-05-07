import { Button, List, Typography, Divider } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addStep } from '../../helpers/helpers';

const data = [
  'Детка, тебе дается возможность пройти тест',
  'В процессе выполнения заданий ты увидишь либо кнопки для перехода на следующий уровень либо все произойдет автоматически',
  'Если ты выбираешь правильный вариант ответа то данное приложение оповестит тебя об этом',
  'Если ты выбираешь не правильный вариант ответа то ожидай не предсказуемых действий , и будь готова к страшным последствиям',
  'В каждом сообщении что открывается тебе при выборе любого варианта внизу будет кнопка "ОК" для закрытия модального окна или перехода на другую страницу',
  'Настоятельно рекомендую не переходить назад, в случае если тебе надо перейти назад то лучше обновить сайт',
  'Желаю удачи , Жми кнопку "Идем дальше"',
];

const Welcome = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Divider orientation="left">Привет Детка!</Divider>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <List
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark></Typography.Text> {item}
          </List.Item>
        )}
      />
      <Button onClick={() => dispatch(addStep('1'))} style={{ margin: '20px', backgroundColor: '#1890ff', color: 'white', padding: '0 20px', borderRadius: '5px' }}>
        Идем дальше!
      </Button>
      </div>
    </>
  );
};

export default Welcome;
