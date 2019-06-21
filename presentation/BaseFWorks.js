<Slide margin={0} height={'100%'} style={{ width: '100%', height: '100%' }}>
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
          <Appear order={8}>
            <Text textColor={'red'}>(Fabric)</Text>
          </Appear>
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
          <Appear order={9}>
            <Text textColor={'red'}>(Flare)</Text>
          </Appear>
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
          <Appear order={10}>
            <Text textColor={'red'}>(Fusion)</Text>
          </Appear>
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
          <Appear order={11}>
            <Text textColor="red">(Fizz)</Text>
          </Appear>
        </div>
      </Appear>
    </div>
  </div>
</Slide>;
