import react, { useState } from 'react';
import { Slider, Typography, Modal, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addStep } from '../../helpers/helpers';
import firstImage from '../../images/level51.jpg';
import secondImage from '../../images/level52.jpg';
const { Title } = Typography;

const style = {
  display: 'inline-block',
  height: 300,
  marginLeft: 70,
};

const marks = {
  0: '0°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

const Level5 = ({ showGif }) => {
  const [showModal, setshowModal] = useState(false);
  const [statusGo, setStatusGo] = useState(false);
  const dispatch = useDispatch();
  const [textModal, setTextModal] = useState({
    success: 'Поздравляю, детка, идем дальше',
    unsucess: 'Давай больше, смотри как мы смотримся!',
  });

  const chaged = (e) => {
    const firstNumber = e[0];
    const secondMuber = e[1];
    const raznica = secondMuber - firstNumber;

    if (raznica > 86) {
      setshowModal(true);
      setStatusGo(true);
    } 
    if (raznica > 50 & raznica < 86) {
      setshowModal(true);
    }
  };
  return (
    <>
      <Modal
        visible={showModal}
        closable
        title={statusGo ? textModal.success : textModal.unsucess}
        footer={
          <Button
            onClick={() => {
              if (statusGo) {
                setshowModal(false);
                dispatch(addStep('6'));
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
          src={statusGo ? firstImage : secondImage}
          style={{ width: '400px', margin: '0 40px' }}
        />
      </Modal>
      <Title>Выбери шкалу любви</Title>
      <div
        style={{
          width: 600,
          height: 400,
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginRight: '-50%',
          transform: ' translate(-50%, -50%) ',
        }}
      >
        <div style={style}>
          <Slider
            vertical
            range
            marks={marks}
            defaultValue={[0, 10]}
            onChange={chaged}
          />
        </div>
      </div>
    </>
  );
};
export default Level5;
