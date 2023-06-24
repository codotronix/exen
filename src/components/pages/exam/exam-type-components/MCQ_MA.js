import { useState } from "react"

const MCQ_MA = ({ qData, showResult }) => {
    const [ans, setAns] = useState({})  // { 1: true, 2: false } etc
    // const [showResult, setShowResult]

    const handleChange = (e, opId) => {
        setAns({
            ...ans,
            [opId]: e.target.checked
        })
    }


    return (
        <div className="MCQ_MA">
            <p className="exam_text">{qData.q}</p>
            <ul className="options">
                {
                    qData.os && qData.os.map(op => 
                    <li key={op.id}>
                        <label className="radio_label">
                            <input type="checkbox" 
                                checked={!!ans[op.id]}
                                onChange={e => handleChange(e, op.id)}
                            />
                        
                            {op.txt}
                        </label>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default MCQ_MA