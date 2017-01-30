import { h, Component } from 'preact'
import { download } from 'downloadjs'
import { Main, Navbar, Container, Section, Copy, Button, Card } from 'components'

export default class Home extends Component {

  state = {
    url: '#'
  }

  handleImage = (e) => {
    const canvas = document.getElementById('imageCanvas')
    const ctx = canvas.getContext('2d')
    const reader = new FileReader()

    reader.onload = function(event){
      const img = new Image()
      img.onload = function(){
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img,0,0)
      }
      img.src = event.target.result
    }

    reader.readAsDataURL(e.target.files[0])
  }

  handleDownload = (e) => {
    const canvas = document.getElementById('imageCanvas')
    const dt = canvas.toDataURL('image/png')

    this.setState({
      url: dt.replace(/^data:image\/[^;]/, 'data:application/octet-stream')
    })


    console.log(this.state.url)
    e.preventDefault()
    // console.log(this.href)
  }

  render(
    { ...props },
    { url }
  ) {

    return (
      <Main>
          <input onChange={this.handleImage} type="file" capture="camera" accept="image/*" name="cameraInput" />

          <div>
            <canvas id="imageCanvas"></canvas>
          </div>

          <Button url={url} onClick={this.handleDownload}>Download</Button>
      </Main>
    )
  }
}
