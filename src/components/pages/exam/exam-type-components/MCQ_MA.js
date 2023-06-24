
const MCQ_MA = ({ qData, userAnswers, setUserAnswers }) => {

    const handleChange = (e, opId) => {
        // { 1: true, 2: false } etc
        setUserAnswers(ua => {
            let thisAns = ua[qData.id] || {}
            thisAns = {
                ...thisAns,
                [opId]: e.target.checked
            }

            return {
                ...ua,
                [qData.id]: thisAns
            }
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
                                checked={userAnswers[qData.id] && !!userAnswers[qData.id][op.id]}
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