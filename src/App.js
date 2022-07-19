import './App.css';
import DatePicker from "./datePicker/datePicker";
import {useEffect, useState} from "react";

function App() {

    const [data, setData] = useState([])
    const [filtered, setFiltered] = useState(data)

    const fetched = () => {
        fetch('https://date.nager.at/api/v2/publicholidays/2020/US')
            .then((response) => response.json())
            .then((data) => setData(data)
            ).catch(e => console.log(e))
    }

    const chosenDates = (chosenDates) => {
        return chosenDates[0] ?
            setFiltered(data.filter(item => {
                return new Date(item.date).getTime() >= new Date(chosenDates[0]).getTime()
                    && new Date(item.date).getTime() <= new Date(chosenDates[1]).getTime()
            })) : setFiltered(data)
    }


    useEffect(() => {
        fetched()
    }, [])

    useEffect(() => {
        setFiltered(data)
    },[data])

    return (
        <div className="App">
            {data && <div>
                <ul>
                    {filtered && filtered.map((item, index) => {
                            return <li key={index}>{item.date}</li>
                        }
                    )}
                </ul>
            </div>}

            <DatePicker submitchosenDates={chosenDates}/>
        </div>
    );
}

export default App;
