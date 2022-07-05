import { useState } from "react"

function Home() {
    return <h1>Home</h1>
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1 );
    }

    return (
        <div>
            {contador}
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
    
}

export default Home