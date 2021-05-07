import { Button, Radio, Input, Space, Modal, Typography } from 'antd';
import react, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { addStep } from '../../helpers/helpers';
import firstImage from '../../images/iam3dalbaeb.png';
import secondimage from '../../images/iam4tipazloi.png';
const { Title } = Typography;
const Level4 = ({ showGif }) => {
  const [showModal, setshowModal] = useState(false);
  const [statusGo, setStatusGo] = useState(false);
  const dispatch = useDispatch();

  const [state, setState] = useState();
  const optionsAnswers = [
    { label: 'Приготовить бешпармак', value: 'Приготовить бешпармак' },
    { label: 'Любить навечно', value: 'Любить навечно' },
    { label: 'Отдыхать', value: 'Отдыхать' },
    { label: 'Купить кроссовки', value: 'Купить кроссовки' },
    { label: 'Похудеть', value: 'Похудеть' },
    { label: 'Найти Казбе девушку', value: 'Найти Казбе девушку' },
    { label: 'Поменять работу', value: 'Поменять работу' },
    { label: 'Приготовить торт', value: 'Приготовить торт' },
  ];
  const onChange = (e) => {
    console.log(e.target.value);
    setState(e.target.value);

    if (e.target.value === 'Приготовить торт') {
      setshowModal(true);
      setStatusGo(true);
    } else {
      setshowModal(true);
    }
  };
  const [textModal, setTextModal] = useState({
    success: 'Поздравляю, детка, идем дальше',
    unsucess: 'В смысле ?!',
  });
  return (
    <>
      <Title>А теперь что ты обещала мне подарить?</Title>
      <Modal
        visible={showModal}
        closable
        title={statusGo ? textModal.success : textModal.unsucess}
        footer={
          <Button
            onClick={() => {
              if (statusGo) {
                setshowModal(false);
                dispatch(addStep('5'));
                showGif();
              }
              setshowModal(false);
            }}
          >
            OK
          </Button>
        }
      >
        <img src={!statusGo ? secondimage : firstImage} width={'400px'} />
      </Modal>
      <Radio.Group
        style={{
          width: 600,
          height: 400,
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginRight: '-50%',
          transform: ' translate(-50%, -50%) ',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
        onChange={onChange}
        value={state}
        options={optionsAnswers}
      ></Radio.Group>
    </>
  );
};
export default Level4;
