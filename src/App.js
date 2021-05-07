import './App.css';
import React from 'react';
import { Layout, Menu, Breadcrumb, Steps, Button, Modal, Space } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { countLevel } from './assets/constants';
import 'antd/dist/antd.css';
import HeaderMy from './components/Header/Header';
import { Route, Switch, Router } from 'react-router';
import Level1 from './components/Level1/Level1';
import Level2 from './components/Level2/Level2';
import Level3 from './components/Level3/Level3';
import Level4 from './components/Level4/Level4';
import Level5 from './components/Level5/Level5';
import Level6 from './components/Level6/Level6';
import Level7 from './components/Level7/Level7';
import Level8 from './components/Level8/Level8';
import Level9 from './components/Level9/Level9';
import Level10 from './components/Level10/Level10';
import Welcome from './containers/Welcome/Welcome';
import ReactAudioPlayer from 'react-audio-player';
import sound from './images/loboda_-_sluchaynaya.mp3';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import g1 from './images/1g.png';
import g2 from './images/2g.png';
import g3 from './images/3g.png';
import { useState } from 'react';
import mus1 from './images/1mus.mp3';
import mus2 from './images/2mus.mp3';
import mus3 from './images/Mus3.mp3';

class ErrorHandlerComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    console.log(error);
  }

  componentDidCatch(error, errorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      console.log('s');
    }

    return this.props.children;
  }
}
const { Footer, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Step } = Steps;

function App(props) {
  const [counter, setCounter] = useState(0);
  const arr = [
    g1,
    g2,
    g3,
    g2,
    g1,
    g2,
    g3,
    g2,
    g1,
    g2,
    g3,
    g2,
    g1,
    g2,
    g3,
    g2,
    g1,
    g2,
    g3,
    g2,
    g1,
    g2,
    g3,
    g2,
    g1,
    g2,
    g3,
    g2,
    g1,
    g2,
    g3,
    g2,
  ];
  let timer;
  const showGif = () => {
    timer = setInterval(() => {
      setCounter((prevstate) => {
        return prevstate + 1;
      }, stoped());
    }, 150);
  };

  const stoped = () => {
    if (counter > 20) {
      clearTimeout(timer);
      setCounter(0);
    }
  };
  const stepNumber = useSelector((state) => state.constants.stepNumber);
  return (
    <>
      <ErrorHandlerComponents>
        <Layout
          style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <HeaderMy />
          <Content>
            <Switch>
              <Route path="/" exact component={Welcome} />
              <ProtectRoute
                path="/level1"
                // isAllowed={stepNumber >= 1}
                isAllowed={true}
                redirectTo={'/'}
                render={(props) => <Level1 {...props} showGif={showGif} />}
              />
              <ProtectRoute
                path="/level2"
                // isAllowed={stepNumber >= 2}
                isAllowed={true}
                redirectTo={'/'}
                render={(props) => <Level2 {...props} showGif={showGif} />}
              />
              <ProtectRoute
                path="/level3"
                // isAllowed={stepNumber >= 3}
                isAllowed={true}
                redirectTo={'/'}
                render={(props) => <Level3 {...props} showGif={showGif} />}
              />
              <ProtectRoute
                path="/level4"
                // isAllowed={stepNumber >= 4}
                isAllowed={true}
                redirectTo={'/'}
                render={(props) => <Level4 {...props} showGif={showGif} />}
              />
              <ProtectRoute
                path="/level5"
                // isAllowed={stepNumber >= 5}
                isAllowed={true}
                redirectTo={'/'}
                render={(props) => <Level5 {...props} showGif={showGif} />}
              />
              <ProtectRoute
                path="/level6"
                // isAllowed={stepNumber >= 6}
                isAllowed={true}
                redirectTo={'/'}
                render={(props) => <Level6 {...props} showGif={showGif} />}
              />
              <ProtectRoute
                path="/level7"
                // isAllowed={stepNumber >= 7}
                isAllowed={true}
                redirectTo={'/'}
                render={(props) => <Level7 {...props} showGif={showGif} />}
              />
              <ProtectRoute
                path="/level8"
                // isAllowed={stepNumber >= 8}
                isAllowed={true}
                redirectTo={'/'}
                render={(props) => <Level8 {...props} showGif={showGif} />}
              />
              <ProtectRoute
                path="/level9"
                // isAllowed={stepNumber >= 9}
                isAllowed={true}
                redirectTo={'/'}
                render={(props) => <Level9 {...props} showGif={showGif} />}
              />
              <ProtectRoute
                path="/level10"
                // isAllowed={stepNumber >= 10}
                isAllowed={true}
                redirectTo={'/'}
                render={(props) => <Level10 {...props} showGif={showGif} />}
              />
            </Switch>
          </Content>
          <Footer style={{ position: 'sticky', bottom: 0, padding: '16px 50px' }}>
            <ReactAudioPlayer
              src={stepNumber === 20 ? mus3 : stepNumber >= 6 ? mus1 : mus2}
              autoPlay={true}
              controls
              style={{display: 'none'}}
            />
            <Steps current={stepNumber - 1} percent={60}>
              {countLevel.map((step, index) => (
                <Step
                  title={step}
                  key={'0G' + index}
                  // subTitle={stepNumber == index ? 'Waiting' : 'a'}
                  description="description"
                />
              ))}
            </Steps>
          </Footer>
        </Layout>
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10%',
            right: '5%',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {arr.map((el, index) => {
              return (
                <div key={'0' + index} style={{ width: '50px' }}>
                  <img
                    key={'10' + index}
                    src={el}
                    style={
                      counter === index
                        ? { display: 'block', width: '50px' }
                        : { display: 'none' }
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </ErrorHandlerComponents>
    </>
  );
}

const ProtectRoute = ({ isAllowed, redirectTo, ...props }) => {
  return isAllowed ? <Route {...props} /> : <Redirect to={redirectTo} />;
};

export default App;
