import './style.css'

function App() {
    return (
        <div className="rootMatematica" >
            <p data-item='Matematica'>Matematica</p>

            <section>
                <nav>
                    <ul className="menuItems">
                        <li><a href='/matematica/pitagoras' data-item='Pitagoras'>Pitagoras</a></li>
                        <li><a href='/matematica/baschara' data-item='Bhaskara'>Bhaskara</a></li>
                        <li><a href='/matematica/contagem' data-item='Contagem'>Contagem</a></li>
                        <li><a href='/matematica/Sen|Cos|Tg' data-item='Sen|Cos|Tg'>Sen|Cos|Tg</a></li>
                    </ul>
                </nav>
            </section>

        </div>
    )
}

export default App