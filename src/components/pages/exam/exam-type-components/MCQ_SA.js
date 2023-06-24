import { useState } from "react"

const MCQ_SA = ({ qData }) => {
    const [ans, setAns] = useState('-')  // { 1: true, 2: false } etc

    return (
        <div className="MCQ_SA">
            <p className="exam_text">{qData.q}</p>
            <ul className="options">
                {
                    qData.os && qData.os.map(op => 
                    <li key={op.id}>
                        <label className="radio_label">
                            <input type="radio" 
                                value={op.id}
                                checked={ans === op.id}
                                onChange={() => setAns(op.id)}
                            />
                        
                            {op.txt}
                        </label>
                    </li>)
                }
                <li>
                    <label className="radio_label">
                        <input type="radio" 
                            value="-"
                            checked={ans === '-'}
                            onChange={() => setAns('-')}
                        />
                    
                        Not answered
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default MCQ_SA