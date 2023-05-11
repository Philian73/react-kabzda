import { FC, memo } from 'react'

type PropsType = {
  on: boolean
  onChange: (on: boolean) => void
}
export const OnOff: FC<PropsType> = memo(({ on, onChange }) => {
  console.log('OnOff rendering')

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

  return (
    <div>
      <div style={onStyle} onClick={() => !on && onChange(!on)}>
        On
      </div>
      <div style={offStyle} onClick={() => on && onChange(!on)}>
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  )
})
