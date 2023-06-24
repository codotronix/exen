
const MCQ_SA = ({ qData, userAnswers, setUserAnswers }) => {
    
    const setAns = opId => {
        setUserAnswers(ua => ({
            ...ua,
            [qData.id]: opId
        }))
    }

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
                                checked={userAnswers[qData.id] === op.id}
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
                            checked={!userAnswers[qData.id] || userAnswers[qData.id] === '-'}
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