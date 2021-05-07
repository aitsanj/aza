import react, { useState } from 'react';
import { Card, Col, Row, Modal, Button, Typography, Popover } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addStep } from '../../helpers/helpers';
import firstImage from '../../images/level31.jpg';
import secondImage from '../../images/level32.jpg';
import car from '../../images/car.jpg';
import comp from '../../images/Comp.jpg';
import deti from '../../images/deti.jfif';
import sumka from '../../images/sumka.webp';
import ifone from '../../images/ifone.jpg';
import rai from '../../images/rai.jpg';
import '../podskazka.css';
const { Meta } = Card;
const { Title } = Typography;
const Level3 = ({ showGif }) => {
  const [showModal, setshowModal] = useState(false);
  const [statusGo, setStatusGo] = useState(false);
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.answers);
  const [textModal, setTextModal] = useState({
    success: 'Поздравляю, детка, идем дальше',
    unsucess: 'Ну ка ну ка , вспоминай',
  });

  const checkAnswers = (textPlace) => {
    if (textPlace === 'Ноутбук') {
      setshowModal(true);
      setStatusGo(true);
    } else {
      setshowModal(true);
    }
  };
  return (
    <>
      <Title>Что я обещал тебе подарить?</Title>
      <Modal
        visible={showModal}
        closable
        title={statusGo ? textModal.success : textModal.unsucess}
        footer={
          <Button
            onClick={() => {
              if (statusGo) {
                setshowModal(false);
                dispatch(addStep('4'));
                showGif();
              }
              setshowModal(false);
            }}
          >
            OK
          </Button>
        }
      >
        <img
          src={statusGo ? secondImage : firstImage}
          width={'400px'}
          style={
            statusGo
              ? { width: 300, height: 400, margin: '0 100px' }
              : { width: 250, height: 400, margin: '0 100px' }
          }
        />
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
              cover={
                <img
                  alt="example"
                  src={deti}
                  style={{ width: 350, height: 240 }}
                />
              }
            >
              <Meta title="Дети" />
              <Button
                style={{ marginTop: '10px' }}
                onClick={() => checkAnswers('Дети')}
              >
                Выбрать
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 350 }}
              cover={
                <img
                  alt="example"
                  src={sumka}
                  style={{ width: 350, height: 240 }}
                />
              }
            >
              <Meta title="Сумка" />
              <Button
                style={{ marginTop: '10px' }}
                onClick={() => checkAnswers('Сумка')}
              >
                Выбрать
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 350 }}
              cover={
                <img
                  alt="example"
                  src={car}
                  style={{ width: 350, height: 240 }}
                />
              }
            >
              <Meta title="Машина" />
              <Button
                style={{ marginTop: '10px' }}
                onClick={() => checkAnswers('Машина')}
              >
                Выбрать
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 350 }}
              cover={
                <img
                  alt="example"
                  src={ifone}
                  style={{ width: 250, height: 240 }}
                />
              }
            >
              <Meta title="Apple IPhone" />
              <Button
                style={{ marginTop: '10px' }}
                onClick={() => checkAnswers('Apple IPhone')}
              >
                Выбрать
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 350 }}
              cover={
                <img
                  alt="example"
                  src={comp}
                  style={{ width: 350, height: 240 }}
                />
              }
            >
              <Meta title="Ноутбук" />
              <Button
                style={{ marginTop: '10px' }}
                onClick={() => checkAnswers('Ноутбук')}
              >
                Выбрать
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 350 }}
              cover={
                <img
                  alt="example"
                  src={rai}
                  style={{ width: 350, height: 240 }}
                />
              }
            >
              <Meta title="Райская жизнь" />
              <Button
                style={{ marginTop: '10px' }}
                onClick={() => checkAnswers('Райская жизнь')}
              >
                Выбрать
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Level3;
