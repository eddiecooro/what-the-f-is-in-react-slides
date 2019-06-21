// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Magic,
  Appear,
  Anim,
  Layout,
  Link,
  CodePane,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  GoToAction
} from 'spectacle';
import ImageSlide from 'spectacle-image-slide';
import CodeSlide from '../SpectacleCodeSlide';

// Import images
import myself from '../assets/myself.jpg';
import fiberDiagram from '../assets/FiberDiagram.png';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import JSCallStack from './JSCallStack';
import FiberTraversal from './FiberTraversal';
import ConcurrentExample from './ConcurrentExample';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#282C34',
    secondary: '#ABB8C3',
    tertiary: '#E1BD7A',
    quaternary: '#ABB8C3'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        {/* Introduce */}
        <Slide bgColor="primary">
          <Layout>
            <Image
              src={myself}
              style={{ borderRadius: 100 }}
              width="200px"
              height="200px"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyItems: 'center'
              }}>
              <Text
                margin="27px 0 0"
                textAlign="left"
                textColor="secondary"
                bold
                textSize={90}>
                Eddie CooRo
              </Text>
              <Text
                textAlign="left"
                margin="0 0 0"
                textColor="tertiary"
                bold
                textSize={30}>
                React Native developer at Shopgram
              </Text>
            </div>
          </Layout>
        </Slide>
        {/* What The F* Is in React */}
        <Slide>
          <Heading fit textColor="secondary">
            What the F*
            <Appear>
              <div>is in React?</div>
            </Appear>
          </Heading>
        </Slide>
        {/* Fiber */}
        <Slide>
          <Heading fit>Fiber</Heading>
          <Appear>
            <List ordered>
              <ListItem>Time Slicing</ListItem>
              <ListItem>Concurrent Mode</ListItem>
              <ListItem>Suspense</ListItem>
            </List>
          </Appear>
        </Slide>
        <CodeSlide
          bgColor="primary"
          lang="js"
          code={require('raw-loader!../assets/codes/Fiber.example')}
          ranges={require('../assets/codes/Fiber.ranges.json')}
        />
        <Slide>
          <CodeSlide
            bgColor="primary"
            lang="js"
            code={require('raw-loader!../assets/codes/jsx.example')}
            ranges={[{ title: 'JSX', loc: [0, 10] }]}
          />
        </Slide>
        <JSCallStack
          transition={[]}
          bgColor="primary"
          lang="js"
          title="JS Callstack"
          code={require('raw-loader!../assets/codes/JSStack.example')}
          stacks={require('../assets/codes/JSStack.ranges.json')}
        />
        <Slide>
          <Heading fit>{'Scheduler <-> React'}</Heading>
        </Slide>
        <Slide>
          <Image style={{ width: '75%', height: '75%' }} src={fiberDiagram} />
        </Slide>
        <FiberTraversal
          transition={[]}
          bgColor="primary"
          lang="js"
          title="Fiber Traversal"
          code={require('raw-loader!../assets/codes/FiberStack.example')}
          stacks={require('../assets/codes/FiberStack.ranges.json')}
        />
        <Slide>
          <Heading>
            <Link
              target="_blank"
              href="https://github.com/Eddie-CooRo/react-fiber-vs-stack-demo">
              Demo
            </Link>
          </Heading>
        </Slide>
        <Slide>
          <Heading fit>Concurrent mode</Heading>
        </Slide>
        {ConcurrentExample}
        <Slide>
          <Heading>
            <Link
              target="_blank"
              href="https://github.com/Eddie-CooRo/react-fiber-vs-stack-demo">
              Demo
            </Link>
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          bgColor="primary"
          lang="js"
          code={require('raw-loader!../assets/codes/Concurrent.example')}
          ranges={require('../assets/codes/Concurrent.ranges.json')}
        />
        <Slide>
          <Heading fit>Suspense</Heading>
          <Appear>
            <Text>(Ability to pause rendering)</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading>
            <Link
              target="_blank"
              href="https://github.com/Eddie-CooRo/suspense-ssr-demo">
              Demo
            </Link>
          </Heading>
        </Slide>
        <Slide transitionOut={['none']}>
          <Heading fit>Fiber</Heading>
        </Slide>
        <Slide
          margin={0}
          height={'100%'}
          style={{ width: '100%', height: '100%' }}>
          <div
            style={{
              position: 'absolute',
              top: 50,
              right: 50,
              left: 50,
              bottom: 50
            }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                border: '5px solid #ABB8C3',
                display: 'grid',
                gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr',
                gridTemplateColumns: '1fr 2fr 1fr 1fr',
                gridTemplateAreas: `"reactnative reactreconciler react reactserver"
                   "reactnative reactreconciler react reactserver"
                   "reactnative reactdom react reactserver"
                   "reactnative reactdom react reactserver"
                   "reactnative reactevent react reactserver"
                   "reactnative reactevent react reactserver"`
              }}>
              <Appear order={1}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ffa08c',
                    fontWeight: 'bold',
                    gridArea: 'reactnative'
                  }}>
                  <Text>React Native</Text>
                </div>
              </Appear>
              <Appear order={2}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#8cffa0',
                    gridRowStart: 'reactreconciler-start',
                    gridRowEnd: 'reactevent-end',
                    gridColumn: 'reactdom',
                    fontWeight: 'bold'
                  }}>
                  <Text>ReactDOM</Text>
                  <Appear order={8}>
                    <Text textColor={'red'}>(Fire)</Text>
                  </Appear>
                </div>
              </Appear>
              <Appear order={5}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#15fe3e',
                    gridArea: 'reactreconciler',
                    fontWeight: 'bold'
                  }}>
                  <Text>React reconciler</Text>
                  <Appear order={7}>
                    <Text textColor={'red'}>(Fiber)</Text>
                  </Appear>
                </div>
              </Appear>
              <Appear order={6}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#009e1b',
                    gridArea: 'reactevent',
                    fontWeight: 'bold'
                  }}>
                  <Text>Syntathic event system</Text>
                </div>
              </Appear>
              <Appear order={3}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ffff64',
                    gridArea: 'react',
                    fontWeight: 'bold'
                  }}>
                  <Text>React</Text>
                </div>
              </Appear>
              <Appear order={4}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#8ca0ff',
                    gridArea: 'reactserver',
                    fontWeight: 'bold',
                    color: 'black'
                  }}>
                  <Text>React Server Renderer</Text>
                </div>
              </Appear>
            </div>
          </div>
        </Slide>
        <Slide>
          <Heading fit>Fire</Heading>
        </Slide>
        <Slide
          margin={0}
          height={'100%'}
          style={{ width: '100%', height: '100%' }}>
          <div
            style={{
              position: 'absolute',
              top: 50,
              right: 50,
              left: 50,
              bottom: 50
            }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                border: '5px solid #ABB8C3',
                display: 'grid',
                gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr',
                gridTemplateColumns: '1fr 2fr 1fr 1fr',
                gridTemplateAreas: `"reactnative reactreconciler react reactserver"
                   "reactnative reactreconciler react reactserver"
                   "reactnative reactdom react reactserver"
                   "reactnative reactdom react reactserver"
                   "reactnative reactevent react reactserver"
                   "reactnative reactevent react reactserver"`
              }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffa08c',
                  fontWeight: 'bold',
                  gridArea: 'reactnative'
                }}>
                <Text>React Native</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#8cffa0',
                  gridRowStart: 'reactreconciler-start',
                  gridRowEnd: 'reactevent-end',
                  gridColumn: 'reactdom',
                  fontWeight: 'bold'
                }}>
                <Text>ReactDOM</Text>
                <Text textColor={'red'}>(Fire)</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#15fe3e',
                  gridArea: 'reactreconciler',
                  fontWeight: 'bold'
                }}>
                <Text>React reconciler</Text>
                <Text textColor={'red'}>(Fiber)</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#009e1b',
                  gridArea: 'reactevent',
                  fontWeight: 'bold'
                }}>
                <Text>Syntathic event system</Text>
                <Appear>
                  <Text textColor="red">(Flare)</Text>
                </Appear>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffff64',
                  gridArea: 'react',
                  fontWeight: 'bold'
                }}>
                <Text>React</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#8ca0ff',
                  gridArea: 'reactserver',
                  fontWeight: 'bold',
                  color: 'black'
                }}>
                <Text>React Server Renderer</Text>
              </div>
            </div>
          </div>
        </Slide>
        <Slide>
          <Heading fit>Flare</Heading>
          <Appear>
            <List ordered>
              <ListItem>Reduce bundle size</ListItem>
              <ListItem>Declarative API</ListItem>
              <ListItem>
                Consistent between different types of pointers
              </ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide>
          <Heading>
            <Link
              href="https://github.com/Eddie-CooRo/react-flare-demo"
              target="_blank">
              Demo
            </Link>
          </Heading>
        </Slide>
        <CodeSlide
          bgColor="primary"
          lang="js"
          code={require('raw-loader!../assets/codes/Flare.example')}
          ranges={require('../assets/codes/Flare.ranges.json')}
        />
        <Slide>
          <Heading fit>But wait...</Heading>
          <Appear>
            <Heading fit>Where are</Heading>
          </Appear>
          <Appear>
            <Heading fit>My hooooooooooks?</Heading>
          </Appear>
        </Slide>
        <CodeSlide
          bgColor="primary"
          lang="js"
          code={require('raw-loader!../assets/codes/FlareHook.example')}
          ranges={require('../assets/codes/FlareHook.ranges')}
        />
        <Slide
          margin={0}
          height={'100%'}
          style={{ width: '100%', height: '100%' }}>
          <div
            style={{
              position: 'absolute',
              top: 50,
              right: 50,
              left: 50,
              bottom: 50
            }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                border: '5px solid #ABB8C3',
                display: 'grid',
                gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr',
                gridTemplateColumns: '1fr 2fr 1fr 1fr',
                gridTemplateAreas: `"reactnative reactreconciler react reactserver"
                   "reactnative reactreconciler react reactserver"
                   "reactnative reactdom react reactserver"
                   "reactnative reactdom react reactserver"
                   "reactnative reactevent react reactserver"
                   "reactnative reactevent react reactserver"`
              }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffa08c',
                  fontWeight: 'bold',
                  gridArea: 'reactnative'
                }}>
                <Text>React Native</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#8cffa0',
                  gridRowStart: 'reactreconciler-start',
                  gridRowEnd: 'reactevent-end',
                  gridColumn: 'reactdom',
                  fontWeight: 'bold'
                }}>
                <Text>ReactDOM</Text>
                <Text textColor={'red'}>(Fire)</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#15fe3e',
                  gridArea: 'reactreconciler',
                  fontWeight: 'bold'
                }}>
                <Text>React reconciler</Text>
                <Text textColor={'red'}>(Fiber)</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#009e1b',
                  gridArea: 'reactevent',
                  fontWeight: 'bold'
                }}>
                <Text>Syntathic event system</Text>
                <Text textColor="red">(Flare)</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffff64',
                  gridArea: 'react',
                  fontWeight: 'bold'
                }}>
                <Text>React</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#8ca0ff',
                  gridArea: 'reactserver',
                  fontWeight: 'bold',
                  color: 'black'
                }}>
                <Text>React Server Renderer</Text>
                <Appear>
                  <Text textColor="red">(Fizz)</Text>
                </Appear>
              </div>
            </div>
          </div>
        </Slide>
        <Slide>
          <Heading fit>Fizz</Heading>
          <Appear>
            <Text bold>SSSR</Text>
          </Appear>
          <Appear>
            <Text>Streaming Server Side Rendering</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading fit>
            <Link
              href="https://github.com/Eddie-CooRo/suspense-ssr-demo"
              target="_blank">
              Demo
            </Link>
          </Heading>
        </Slide>
        <Slide
          margin={0}
          height={'100%'}
          style={{ width: '100%', height: '100%' }}>
          <div
            style={{
              position: 'absolute',
              top: 50,
              right: 50,
              left: 50,
              bottom: 50
            }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                border: '5px solid #ABB8C3',
                display: 'grid',
                gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr',
                gridTemplateColumns: '1fr 2fr 1fr 1fr',
                gridTemplateAreas: `"reactnative reactreconciler react reactserver"
                   "reactnative reactreconciler react reactserver"
                   "reactnative reactdom react reactserver"
                   "reactnative reactdom react reactserver"
                   "reactnative reactevent react reactserver"
                   "reactnative reactevent react reactserver"`
              }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffa08c',
                  fontWeight: 'bold',
                  gridArea: 'reactnative'
                }}>
                <Text>React Native</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#8cffa0',
                  gridRowStart: 'reactreconciler-start',
                  gridRowEnd: 'reactevent-end',
                  gridColumn: 'reactdom',
                  fontWeight: 'bold'
                }}>
                <Text>ReactDOM</Text>
                <Text textColor={'red'}>(Fire)</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#15fe3e',
                  gridArea: 'reactreconciler',
                  fontWeight: 'bold'
                }}>
                <Text>React reconciler</Text>
                <Text textColor={'red'}>(Fiber)</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#009e1b',
                  gridArea: 'reactevent',
                  fontWeight: 'bold'
                }}>
                <Text>Syntathic event system</Text>
                <Text textColor="red">(Flare)</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ffff64',
                  gridArea: 'react',
                  fontWeight: 'bold'
                }}>
                <Text>React</Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#8ca0ff',
                  gridArea: 'reactserver',
                  fontWeight: 'bold',
                  color: 'black'
                }}>
                <Text>React Server Renderer</Text>
                <Text textColor="red">(Fizz)</Text>
              </div>
            </div>
          </div>
        </Slide>
      </Deck>
    );
  }
}
