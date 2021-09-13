import './style.css'

function App() {
    return (
        <div className="rootMatematica" >
            <p data-item='Matematica'>Matematica</p>

            <section>
                <nav>
                    <ul className="menuItems">
                        <li><a href='/matematica/pitagoras' data-item='Pitagoras'>Pitagoras</a></li>
                        <li><a href='#' data-item='Bhaskara'>Bhaskara</a></li>
                    </ul>
                </nav>
            </section>

        </div>
    )
}

export default App