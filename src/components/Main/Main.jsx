import { h, Component } from 'preact'
import cx from 'classnames'
import style from './Main.css'
import { Container } from '../'

export default class Main extends Component {
  render({
    children,
    ...props
  }){
    return (
      <main id='Main' class={cx('Main', {[`Main--${props.class}`]: props.class} )}>
        <Container>
          {children}
        </Container>
      </main>
    )
  }
}
