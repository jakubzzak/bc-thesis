import React, { useEffect, useState } from 'react'
import styles from './styles/App.module.css'
import Main from './components/Main'
import { Menu, Flag } from 'semantic-ui-react'
import { defineMessages, injectIntl } from 'react-intl'
import { Helmet } from 'react-helmet'

const messages = defineMessages({
  contact: { id: 'web.header.contact', defaultMessage: 'Contact' },
})

const App = ({ intl }) => {

  const [activeMenuitem, setActiveMenuItem] = useState('Jakub Žák')
  const [lang, setLang] = useState('us')


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  // window.onscroll = function (){}

  const handleItemClick = (name) => {
    const element = document.getElementById(name)
    let offsetPos = name.includes('LOGO') ? 0 : window.pageYOffset
    if (element !== null) {
      const headerOffset = 58
      const elementPos = element.getBoundingClientRect().top
      offsetPos += elementPos - headerOffset
    }
    window.scrollTo({
      top: offsetPos,
      behavior: 'smooth',
    })
    setActiveMenuItem(name)
  }

  return (
    <div id={'my_page'}>

      <div id={'header'} style={{
        backgroundColor: '#000',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        padding: '10px',
      }}>
        <Menu inverted secondary pointing style={{ fontSize: '13px' }}>
          <Menu.Item
            name='LOGO'
            onClick={() => handleItemClick('LOGO')}
          />
          <Menu.Item>
            <Flag name={lang === 'sk' ? 'us' : 'sk'} onClick={() => setLang(lang === 'sk' ? 'us' : 'sk')}
                  style={{ cursor: 'pointer' }}/>
          </Menu.Item>
          <Menu.Menu position='right' style={{ fontFamily: 'Chalkduster, fantasy' }}>
            <Menu.Item
              name={intl.formatMessage({ id: 'web.annotation.title' })}
              active={activeMenuitem === 'Annotation'}
              onClick={() => handleItemClick('Annotation')}
            />
            <Menu.Item
              name={intl.formatMessage({ id: 'web.goal.title' })}
              active={activeMenuitem === 'Goal'}
              onClick={() => handleItemClick('Goal')}
            />
            <Menu.Item
              name={intl.formatMessage(messages.contact)}
              active={activeMenuitem === 'Contact'}
              onClick={() => handleItemClick('Contact')}
            />
          </Menu.Menu>
        </Menu>
      </div>
      <div className={styles.body}>
        <Helmet defaultTitle={'Bc thesis'}
                titleTemplate={
                  'Bc thesis | %s'
                }>
          <meta charSet='utf-8'/>
        </Helmet>
        <Main/>
      </div>
    </div>
  )
}

export default injectIntl(App)
