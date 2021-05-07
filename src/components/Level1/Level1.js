import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Modal, Popover } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addStep } from '../../helpers/helpers';
import firstImage from '../../images/1.jpg';
import secondImage from '../../images/level11.jpg';
import '../podskazka.css';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Level1 = ({ showGif }) => {
  const content = (
    <div>
      <p>Имя? А как ты думаешь, может то как я тебя называю</p>
      <p>Пароль?? Что я вечно забываю? каждый месяц)</p>
    </div>
  );
  const [showModal, setshowModal] = useState(false);
  const [statusGo, setStatusGo] = useState(false);
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.answers);
  const [textModal, setTextModal] = useState({
    success: 'Поздравляю, детка, идем дальше',
    unsucess: 'Что за дела? Пытайся лучше \n Держи мотивацию',
  });
  console.log(answers);

  const onFinish = (values) => {
    if (
      values.username === answers.username &&
      values.password === answers.password
    ) {
      setshowModal(true);
      setStatusGo(true);
    } else {
      setshowModal(true);
    }
  };
  console.log(showModal + 'showmodal');

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Modal
        visible={showModal}
        title={statusGo ? textModal.success : textModal.unsucess}
        width={'450px'}
        
        footer={
          <Button
            onClick={() => {
              if (statusGo) {
                setshowModal(false);
                dispatch(addStep('2'));
                showGif();
              }
              setshowModal(false);
            }}
          >
            ОК
          </Button>
        }
      >
        <img src={statusGo ? firstImage : secondImage} width={'400px'} />
      </Modal>
      <div
        style={{
          width: 400,
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginRight: '-50%',
          transform: ' translate(-50%, -50%) ',

          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <h4 style={{paddingBottom:'20px', paddingLeft: '50px'}}>Пожалуйства авторизуйся</h4>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Имя" name="username">
            <Input />
          </Form.Item>

          <Form.Item label="Пароль" name="password">
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Проверить
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Popover content={content} style={{ transform: 'scale' }}>
        <Button
          className="button"
          type="primary"
          style={{ position: 'absolute', bottom: '30%', right: '5%' }}
        >
          Получить подсказку
        </Button>
      </Popover>
    </>
  );
};
export default Level1;
