import { FC, memo, useState } from 'react'

type PropsType = {
  onChange: (on: boolean) => void
  defaultOn?: boolean
}
export const UncontrolledOnOff: FC<PropsType> = memo(({ onChange, defaultOn }) => {
  console.log('UncontrolledOnOff rendering')

  const [on, setOn] = useState<boolean>(defaultOn ? defaultOn : false)

  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    backgroundColor: on ? 'green' : 'white',
  }
  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    backgroundColor: on ? 'white' : 'red',
  }
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: on ? 'green' : 'red',
  }

  const onClicked = () => {
    if (!on) {
      setOn(!on)
      onChange(!on)
    }
  }
  const offClicked = () => {
    if (on) {
      setOn(!on)
      onChange(!on)
    }
  }

  return (
    <div>
      <div style={onStyle} onClick={onClicked}>
        On
      </div>
      <div style={offStyle} onClick={offClicked}>
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  )
})
