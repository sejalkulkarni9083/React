function CounterExample() {

const [count, setCount]=useState(0);


    return(
        <div>
            <p>you clicked {count}</p>
            <button onClick={ ()=> setCount(count+1)}> click me </button>
        </div>
    )
} 