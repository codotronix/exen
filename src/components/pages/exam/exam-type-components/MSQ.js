import EXAM_CONST from "../EXAM_CONST"
import clsx from 'clsx'
import { useNotification } from "../../../common/notifications/useNotification"

const MSQ = props => {
    const { qData, userAnswers, setUserAnswers, setResult, resultVisible } = props
    const notify = useNotification()

    const handleChange = (e, opId) => {
        if(resultVisible) {
            e.preventDefault()
            notify('Change after submission is not allowed...')
            return
        }
        // { 1: true, 2: false } etc
        let thisAns = userAnswers[qData.id] || {}
        thisAns = {
            ...thisAns,
            [opId]: e.target.checked
        }

        setUserAnswers({
            ...userAnswers,
            [qData.id]: thisAns
        })


        // CHECK WHETHER IT IS CORRECT / INCORRECT / UNANSWERED / PARTIAL CORRECT
        let status = EXAM_CONST.UNANSWERED  // init
        let correct = 0
        let ansArr = Object.keys(thisAns).filter(k => thisAns[k]).map(i => parseInt(i))    // "1-3-4"
        let realAns = qData.k

        // redundant step :D
        if(ansArr.length === 0) status = EXAM_CONST.UNANSWERED

        // if say all the selected, i.e selected too much
        else if(ansArr.length > realAns.length) status = EXAM_CONST.INCORRECT

        // CHECK FOR PARTIAL_CORRECT 
        else {
            // go thru all the actuals ans 
            // and check how many are selected by user
            for(let k of realAns) {
                if(ansArr.includes(k)) correct++
            }

            if(correct === realAns.length) status = EXAM_CONST.CORRECT
            else if (correct === 0) status = EXAM_CONST.INCORRECT
            else status = EXAM_CONST.PARTIAL_CORRECT
        }

        setResult(res => ({
            ...res,
            [qData.id]: { status, correct }
        }))
    }


    return (
        <div className="MSQ">
            <p className="exam_text">
                {qData.q}
            </p>
            <ul className="options">
                {
                    qData.os && qData.os.map(op => 
                    <li key={op.id} className={clsx(resultVisible && qData.k.includes(op.id) && 'correct_op', 'p-5' )}>
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

export default MSQ