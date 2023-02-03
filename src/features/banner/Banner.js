import logo from '../../reddit-logo.png'

export function Banner() {
    return (
        <div className="Header-container">
            <button className="Hamburger">
                -<br/>-<br/>-
            </button>
            <img src={logo} alt="Reddit Logo" className="App-logo" />
            <h1 className="App-title">Acinea-ddit</h1>
        </div>
    )
}