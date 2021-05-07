import react, { useState } from 'react';
import { Card, Col, Row, Modal, Button, Typography, Popover } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addStep } from '../../helpers/helpers';
import secondImage from '../../images/2.jpg';
import Mehanik1 from '../../images/mehanik1.jpg';
import Mehanik2 from '../../images/mehanik2.jpg';
import Mehanik3 from '../../images/mehanik3.jpg';
import Mehanik4 from '../../images/mehanik4.jpg';
import Mehanik5 from '../../images/mehanik5.jpg';
import '../podskazka.css';
import zloi from '../../images/iam4tipazloi.png';
import vesel from '../../images/iam1veselii.png';
const { Meta } = Card;
const { Title } = Typography;

const Level6 = ({ showGif }) => {
  const content = (
    <div>
      <p>Серьезно? ты просишь подсказку?</p>
    </div>
  );
  const [statusGo, setStatusGo] = useState(false);
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.answers);
  const [textModal, setTextModal] = useState({
    success: 'Поздравляю, детка, идем дальше',
    unsucess: 'Лампочки сами себя не поменяют',
  });
  const checkAnswers = (textPlace) => {
    if (textPlace === 'Механик от Бога') {
      win();
      setStatusGo(true);
    } else {
      console.log(false);
      wrong();
    }
  };
  const wrong = () => {
    document.getElementById('zloiAza').className += ' Translate';
    setTimeout(() => {
      document.getElementById('zloiAza').className = 'zloi';
    }, 2000);
  };
  const win = () => {
    document.getElementById('veseliiAza').className += ' Translatveseliie';
    setTimeout(() => {
      document.getElementById('veseliiAza').className = 'veselii';
      dispatch(addStep('7'));
      showGif();
    }, 3000);
  };
  return (
    <>
      <img
        id="zloiAza"
        className="zloi"
        src={zloi}
        style={{
          width: 100,
          opacity: 0,
          position: 'absolute',
          zIndex: 100,
          top: '40%',
          left: '50%',
          marginRight: '-50%',
          transform: ' translate(-50%, -50%) ',
        }}
      />
      <img
        id="veseliiAza"
        className="veselii"
        src={vesel}
        style={{
          width: 240,
          position: 'absolute',
          opacity: 0,
          zIndex: 100,
          bottom: 0,
          right: '10%',
        }}
      />
      <div
        className=""
        style={{
          maxWidth: '1400px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '30px',
        }}
      >
        <Card
          hoverable
          style={{ width: 250, height: 350 }}
          cover={<img alt="example" style={{ height: 200 }} src={Mehanik5} />}
        >
          <Meta title="Механик на все руки" />
          <Button
            style={{ marginTop: '10px' }}
            onClick={() => checkAnswers('Механик на все руки')}
          >
            Выбрать
          </Button>
        </Card>

        <Card
          hoverable
          style={{ width: 250, height: 350 }}
          cover={<img alt="example" src={Mehanik2} style={{ height: 200 }} />}
        >
          <Meta title="Механик не дай Бог" />
          <Button
            style={{ marginTop: '10px' }}
            onClick={() => checkAnswers('Механик не дай Бог')}
          >
            Выбрать
          </Button>
        </Card>
        <Card
          hoverable
          style={{ width: 250, height: 350 }}
          cover={<img alt="example" src={Mehanik3} style={{ height: 200 }} />}
        >
          <Meta title="Механик от Бога" />
          <Button
            style={{ marginTop: '10px' }}
            onClick={() => checkAnswers('Механик от Бога')}
          >
            Выбрать
          </Button>
        </Card>
        <Card
          hoverable
          style={{ width: 250, height: 350 }}
          cover={
            <img alt="Механик Азамат" src={Mehanik4} style={{ height: 200 }} />
          }
        >
          <Meta title="Механик Азамат" />
          <Button
            style={{ marginTop: '10px' }}
            onClick={() => checkAnswers('Механик Азамат')}
          >
            Выбрать
          </Button>
        </Card>
      </div>
    </>
  );
};
export default Level6;
