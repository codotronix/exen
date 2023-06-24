import EXAM_CONST from "../EXAM_CONST"
import clsx from 'clsx'
const MCQ = props => {
    const { qData, userAnswers, setUserAnswers, setResult, resultVisible } = props
    const handleChange = (e, opId) => {
        if(resultVisible) {
            e.preventDefault()
            console.log('Change after submission not allowed...')
            return
        }

        setUserAnswers(ua => ({
            ...ua,
            [qData.id]: opId
        }))

        // CHECK WHETHER IT IS CORRECT / INCORRECT / UNANSWERED
        let status = EXAM_CONST.INCORRECT
        if(opId === '-') status = EXAM_CONST.UNANSWERED
        else if (opId === qData.k) status = EXAM_CONST.CORRECT

        setResult(res => ({
            ...res,
            [qData.id]: { status }
        }))
    }

    return (
        <div className="MCQ">
            <p className="exam_text">
                {qData.q}
            </p>
            <ul className="options">
                {
                    qData.os && qData.os.map(op => 
                    <li key={op.id} className={clsx(resultVisible && (op.id===qData.k) && 'correct_op', 'p-5' )}>
                        <label className="radio_label">
                            <input type="radio" 
                                value={op.id}
                                checked={userAnswers[qData.id] === op.id}
                                onChange={e => handleChange(e, op.id)}
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
                            onChange={e => handleChange(e, '-')}
                        />
                    
                        Not answered
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default MCQ