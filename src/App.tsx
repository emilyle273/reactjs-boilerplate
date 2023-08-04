import { FC, useState } from 'react'
// import reactlogo from './assets/images/react.svg'
import './assets/styles/app.css'
import './assets/styles/app.scss'
// import Button from 'react-bootstrap/Button'
// import ThemeProvider from 'react-bootstrap/ThemeProvider'
// import { ThemeProvider } from 'styled-components'
import { useTranslation } from 'react-i18next'
import './i18n/i18n'
import NavBar from './components/NavBar'
import { Button } from 'react-bootstrap'
// import FontStyles from './fontStyles'

// export const theme = {
//   dark: {
//     primary: '#000',
//     text: '#fff'
//   },
//   light: {
//     primary: '#fff',
//     text: '#000'
//   }
// }

const App: FC = () => {
  /* eslint-disable */
  const [fullname, setFullname] = useState('Dư Thanh Được')
  const { t, i18n } = useTranslation()
  console.log(fullname)
  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
      {/* <FontStyles /> */}

      {/* <ThemeProvider> */}
      <Button className='dark-btn'>My Button</Button>
      <NavBar />
      {/* </ThemeProvider> */}
      {/* </ThemeProvider> */}

      {/* </ThemeProvider> */}
    </div>
  )
}

export default App
