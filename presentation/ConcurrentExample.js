import React from 'react';
import { Layout, Image, Slide } from 'spectacle';
import SierpinskiTriangle from './SierpinskiTriangle';
import lowSetStatePlay from '../assets/lowSetStatePlay.png';
import lowSetStatePause from '../assets/lowSetStatePause.png';
import highSetStatePlay from '../assets/highSetStatePlay.png';

export default [
  <Slide transitionOut={['none']}>
    <Layout style={{ display: 'flex' }}>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle s={300}>1</SierpinskiTriangle>
        </div>
      </Layout>
      <Layout style={{ flex: 2 }} />
      <Layout style={{ flex: 1 }} />
    </Layout>
  </Slide>,
  <Slide transition={['none']}>
    <Layout style={{ display: 'flex' }}>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle s={300}>1</SierpinskiTriangle>
        </div>
      </Layout>
      <Layout
        style={{
          flex: 2
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '10%',
            left: 0,
            right: 0
          }}>
          <Image src={lowSetStatePlay} />
        </div>
      </Layout>
      <Layout style={{ position: 'relative', flex: 1 }} />
    </Layout>
  </Slide>,
  <Slide transition={['none']}>
    <Layout style={{ display: 'flex' }}>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle s={300}>1</SierpinskiTriangle>
        </div>
      </Layout>
      <Layout
        style={{
          flex: 2
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '10%',
            left: 0,
            right: 0
          }}>
          <Image src={lowSetStatePlay} />
        </div>
      </Layout>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle s={300}>1</SierpinskiTriangle>
        </div>
      </Layout>
    </Layout>
  </Slide>,
  <Slide transition={['none']}>
    <Layout style={{ display: 'flex' }}>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle s={300}>1</SierpinskiTriangle>
        </div>
      </Layout>
      <Layout
        style={{
          flex: 2
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '10%',
            left: 0,
            right: 0
          }}>
          <Image src={lowSetStatePlay} />
        </div>
      </Layout>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle color={'green'} s={150} y={-75}>
            2
          </SierpinskiTriangle>
          <SierpinskiTriangle s={150} y={75} x={-150}>
            1
          </SierpinskiTriangle>
          <SierpinskiTriangle s={150} y={75} x={150}>
            1
          </SierpinskiTriangle>
        </div>
      </Layout>
    </Layout>
  </Slide>,
  <Slide transition={['none']}>
    <Layout style={{ display: 'flex' }}>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle s={300}>1</SierpinskiTriangle>
        </div>
      </Layout>
      <Layout
        style={{
          flex: 2
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '10%',
            left: 0,
            right: 0
          }}>
          <Image style={{ margin: 0 }} src={lowSetStatePause} />
          <Image style={{ margin: 0 }} src={highSetStatePlay} />
        </div>
      </Layout>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle color={'green'} s={150} y={-75}>
            2
          </SierpinskiTriangle>
          <SierpinskiTriangle s={150} y={75} x={-150}>
            1
          </SierpinskiTriangle>
          <SierpinskiTriangle s={150} y={75} x={150}>
            1
          </SierpinskiTriangle>
        </div>
      </Layout>
    </Layout>
  </Slide>,
  <Slide transition={['none']}>
    <Layout style={{ display: 'flex' }}>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle s={300}>1</SierpinskiTriangle>
        </div>
      </Layout>
      <Layout
        style={{
          flex: 2
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '10%',
            left: 0,
            right: 0
          }}>
          <Image style={{ margin: 0 }} src={lowSetStatePause} />
          <Image style={{ margin: 0 }} src={highSetStatePlay} />
        </div>
      </Layout>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div
          style={{
            transform: 'translateY(300px) scale(0.5)',
            position: 'absolute',
            left: '50%',
            top: '50%'
          }}>
          <SierpinskiTriangle color={'green'} s={150} y={-75}>
            2
          </SierpinskiTriangle>
          <SierpinskiTriangle s={150} y={75} x={-150}>
            1
          </SierpinskiTriangle>
          <SierpinskiTriangle s={150} y={75} x={150}>
            1
          </SierpinskiTriangle>
        </div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%'
          }}>
          <SierpinskiTriangle s={300}>1</SierpinskiTriangle>
        </div>
      </Layout>
    </Layout>
  </Slide>,
  <Slide transition={['none']}>
    <Layout style={{ display: 'flex' }}>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle s={300}>1</SierpinskiTriangle>
        </div>
      </Layout>
      <Layout
        style={{
          flex: 2
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '10%',
            left: 0,
            right: 0
          }}>
          <Image style={{ margin: 0 }} src={lowSetStatePause} />
          <Image style={{ margin: 0 }} src={highSetStatePlay} />
        </div>
      </Layout>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div
          style={{
            transform: 'translateY(300px) scale(0.5)',
            position: 'absolute',
            left: '50%',
            top: '50%'
          }}>
          <SierpinskiTriangle color={'green'} s={150} y={-75}>
            2
          </SierpinskiTriangle>
          <SierpinskiTriangle s={150} y={75} x={-150}>
            1
          </SierpinskiTriangle>
          <SierpinskiTriangle s={150} y={75} x={150}>
            1
          </SierpinskiTriangle>
        </div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%'
          }}>
          <SierpinskiTriangle hoverFirst="true" s={300}>
            1
          </SierpinskiTriangle>
        </div>
      </Layout>
    </Layout>
  </Slide>,
  <Slide transition={['none']}>
    <Layout style={{ display: 'flex' }}>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle hoverFirst="true" s={300}>
            1
          </SierpinskiTriangle>
        </div>
      </Layout>
      <Layout
        style={{
          flex: 2
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '10%',
            left: 0,
            right: 0
          }}>
          <Image style={{ margin: 0 }} src={lowSetStatePause} />
          <Image style={{ margin: 0 }} src={highSetStatePlay} />
        </div>
      </Layout>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div
          style={{
            transform: 'translateY(300px) scale(0.5)',
            position: 'absolute',
            left: '50%',
            top: '50%'
          }}>
          <SierpinskiTriangle color={'green'} s={150} y={-75}>
            2
          </SierpinskiTriangle>
          <SierpinskiTriangle s={150} y={75} x={-150}>
            1
          </SierpinskiTriangle>
          <SierpinskiTriangle s={150} y={75} x={150}>
            1
          </SierpinskiTriangle>
        </div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%'
          }}>
          <SierpinskiTriangle hoverFirst="true" s={300}>
            1
          </SierpinskiTriangle>
        </div>
      </Layout>
    </Layout>
  </Slide>,
  <Slide transition={['none']}>
    <Layout style={{ display: 'flex' }}>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle hoverFirst={true} s={300}>
            1
          </SierpinskiTriangle>
        </div>
      </Layout>
      <Layout
        style={{
          flex: 2
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '10%',
            left: 0,
            right: 0
          }}>
          <Image style={{ margin: 0 }} src={lowSetStatePause} />
        </div>
      </Layout>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle hoverFirst={true} color={'green'} s={150} y={-75}>
            2
          </SierpinskiTriangle>
          <SierpinskiTriangle s={150} y={75} x={-150}>
            1
          </SierpinskiTriangle>
          <SierpinskiTriangle s={150} y={75} x={150}>
            1
          </SierpinskiTriangle>
        </div>
      </Layout>
    </Layout>
  </Slide>,
  <Slide transition={['none']}>
    <Layout style={{ display: 'flex' }}>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle hoverFirst={true} s={300}>
            1
          </SierpinskiTriangle>
        </div>
      </Layout>
      <Layout
        style={{
          flex: 2
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '10%',
            left: 0,
            right: 0
          }}>
          <Image style={{ margin: 0 }} src={lowSetStatePlay} />
        </div>
      </Layout>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle hoverFirst={true} color={'green'} s={300}>
            2
          </SierpinskiTriangle>
        </div>
      </Layout>
    </Layout>
  </Slide>,
  <Slide transition={['none']}>
    <Layout style={{ display: 'flex' }}>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle hoverFirst={true} color={'green'} s={300}>
            2
          </SierpinskiTriangle>
        </div>
      </Layout>
      <Layout
        style={{
          flex: 2
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '10%',
            left: 0,
            right: 0
          }}
        />
      </Layout>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle hoverFirst={true} color={'green'} s={300}>
            2
          </SierpinskiTriangle>
        </div>
      </Layout>
    </Layout>
  </Slide>,
  <Slide transition={['none']}>
    <Layout style={{ display: 'flex' }}>
      <Layout style={{ position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
          <SierpinskiTriangle hoverFirst={true} color={'green'} s={300}>
            2
          </SierpinskiTriangle>
        </div>
      </Layout>
      <Layout
        style={{
          flex: 2
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '10%',
            left: 0,
            right: 0
          }}
        />
      </Layout>
      <Layout style={{ position: 'relative', flex: 1 }} />
    </Layout>
  </Slide>
];
