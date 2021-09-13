import './style.css'

function App() {
    return (
        <div className="rootMenu" >
            <div className="background-one">
                <div className="link-container">
                    <a className="link-one" href="matematica">Matematica</a>
                </div>
            </div>
            <div className="background-two link-container">
                <a className="link-two" href="#">Fisica</a>
            </div>
            <div className="background-three link-container">
                <a className="link-three" href="#">Quimica</a>
            </div>
        </div>
    )
}

export default App