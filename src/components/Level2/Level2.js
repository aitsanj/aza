import react, { useState } from 'react';
import { Card, Col, Row, Modal, Button, Typography, Popover } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addStep } from '../../helpers/helpers';
import Place1 from '../../images/place1.jpg';
import Place2 from '../../images/place2.jpg';
import Place3 from '../../images/place3.jpg';
import Place4 from '../../images/place4.jpg';
import Place5 from '../../images/place5.jpg';
import Place6 from '../../images/place6.jfif';
import '../podskazka.css';
import firstimage from '../../images/level21.jpg';
import secondimage from '../../images/level22.jpg';
const { Meta } = Card;
const { Title } = Typography;
const Level2 = ({ showGif }) => {
  const content = (
    <div>
      <p>Серьезно? ты просишь подсказку?</p>
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

  const checkAnswers = (textPlace) => {
    if (textPlace === 'Трамплин') {
      setshowModal(true);
      setStatusGo(true);
    } else {
      setshowModal(true);
    }
  };
  return (
    <>
      <Title>Где мы начали встречаться?</Title>
      <Modal
        visible={showModal}
        closable
        title={statusGo ? textModal.success : textModal.unsucess}
        width={'450px'}
        footer={
          <Button
            onClick={() => {
              if (statusGo) {
                setshowModal(false);
                dispatch(addStep('3'));
                showGif();
              }
              setshowModal(false);
            }}
          >
            OK
          </Button>
        }
      >
        <img src={statusGo ? firstimage : secondimage} width={'400px'} />
      </Modal>
      <div
        className="site-card-wrapper"
        style={{ maxWidth: '1140px', margin: 'auto' }}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 350 }}
              cover={<img alt="example" src={Place6} />}
            >
              <Meta title="Озеро Маншук Маметовой" />
              <Button
                style={{ marginTop: '10px' }}
                onClick={() => checkAnswers('Озеро Маншук Маметовой')}
              >
                Выбрать
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 350 }}
              cover={<img alt="example" style={{ height: 232 }} src={Place4} />}
            >
              <Meta title="БАО" />
              <Button
                style={{ marginTop: '10px' }}
                onClick={() => checkAnswers('БАО')}
              >
                Выбрать
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 350 }}
              cover={<img alt="example" src={Place1} />}
            >
              <Meta title="Трамплин" />
              <Button
                style={{ marginTop: '10px' }}
                onClick={() => checkAnswers('Трамплин')}
              >
                Выбрать
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 350 }}
              cover={<img alt="example" src={Place3} />}
            >
              <Meta title="Озеро на Ленина" />
              <Button
                style={{ marginTop: '10px' }}
                onClick={() => checkAnswers('Озеро на Ленина')}
              >
                Выбрать
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 350 }}
              cover={<img alt="example" src={Place5} />}
            >
              <Meta title="Капчагай" />
              <Button
                style={{ marginTop: '10px' }}
                onClick={() => checkAnswers('Капчагай')}
              >
                Выбрать
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 350 }}
              cover={<img alt="example" src={Place2} />}
            >
              <Meta title="Медео" />
              <Button
                style={{ marginTop: '10px' }}
                onClick={() => checkAnswers('Медео')}
              >
                Выбрать
              </Button>
            </Card>
          </Col>
        </Row>
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
export default Level2;
