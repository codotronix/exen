import { useState } from "react"
import "./Exam.css"
import EXAM_TYPE_COMP_MAP from "./exam-types-components-mapper"
import { Accordion, Button, Panel } from "../../common"
import { useExamData } from "./custom-hooks/useExamData"
import EXAM_CONST from "./EXAM_CONST"

const Exam = props => {
    const examDataURL = 'examdata/dp100_1.json5'
    const examData = useExamData(examDataURL)

    // A state to track the user answers
    // { id1: ans, id2: ans } etc
    // each QA component will fill it with their ans
    const [userAnswers, setUserAnswers] = useState({})  

    /**
     * RESULT: to be populated by each QA Component
     * result = { qID1: { 
                        status: 'CORRECT' / 'INCORRECT' / 'UNANSWERED' / PARTIAL_CORRECT,
                        correct?: No. of Correct, applicable for PARTIAL_CORRECT only
                    },
                    qID2: { same structure as above }
                    .
                    .
                    .
                }
     */
    const [result, setResult] = useState({})    
    const [stats, setStats] = useState({})
    const [resultVisible, setResultVisible] = useState(false)

    const checkAnswers = () => {
        let correct = 0,
            incorrect = 0,
            unanswered = 0,
            partialCorrect = 0


        // GO THRU EACH QUESTIONS
        // AND FIND OUT THE STATS FOR EACH qID
        examData.questions.forEach(({id})  => {
            if(!result[id] || result[id].status === EXAM_CONST.UNANSWERED) unanswered++
            else if (result[id].status === EXAM_CONST.CORRECT) correct++
            else if (result[id].status === EXAM_CONST.PARTIAL_CORRECT) partialCorrect++
            else incorrect++
        });
        const thisStats = { correct, incorrect, unanswered, partialCorrect }
        
        setStats(thisStats)
        setResultVisible(true)
    }

    return (
        <div>
            
            <Panel>
                <h1>Name: {examData.name}</h1>
                <div className="mt-15">Questions: {examData.questions && examData.questions.length}</div>
            </Panel>
            {
                examData.questions && examData.questions.map( (q, i) => {
                    const C = EXAM_TYPE_COMP_MAP[q.t]
                    return (
                        <Accordion title={`Q. No. ${i+1}`} key={i} classes="exam_acc">
                            <C 
                                qData={q} 
                                userAnswers={userAnswers}
                                setUserAnswers={setUserAnswers}
                                result={result}
                                setResult={setResult}
                                resultVisible={resultVisible}
                            />
                        </Accordion>
                    )
                })
            }

            <Panel justify="right">
                <Button onClick={checkAnswers}>SUBMIT</Button>
            </Panel>
            
        </div>
    )
}

export default Exam