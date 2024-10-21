import Dados from './Dados'
import StartNow from '../../../../../components/Start/StartNow'
import '../../../../../styles/Start.css'

function Start() {
    return (
        <div className ='start'>
            <StartNow />
            <Dados position='' space='right' id='one' response='' />
            {/* <Dados position='position' space='left' id='two' />
            <Dados position='' space='right' id='three' />
            <Dados position='position' space='left' id='four' />
            <Dados position='' space='right' id='five' /> */}
        </div>
    )
}

export default Start;