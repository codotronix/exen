import { useState } from "react"
import "./Exam.css"
import EXAM_TYPE_COMP_MAP from "./exam-types-components-mapper"
import { Accordion, Button, Panel } from "../../common"
import { useExamData } from "./custom-hooks/useExamData"

const Exam = props => {
    const examDataURL = 'examdata/dp100_1.json5'
    const examData = useExamData(examDataURL)

    // A state to track the user answers
    // { id1: ans, id2: ans } etc
    // each QA component will fill it with their ans
    const [userAnswers, setUserAnswers] = useState({})  

    return (
        <div>
            <h1>Welcome to {examData.name}</h1>
            {
                examData.questions && examData.questions.map( (q, i) => {
                    const C = EXAM_TYPE_COMP_MAP[q.t]
                    return (
                        <Accordion title={`Q. No. ${i+1}`} key={i} classes="exam_acc">
                            <C 
                                qData={q} 
                                userAnswers={userAnswers}
                                setUserAnswers={setUserAnswers}
                            />
                        </Accordion>
                    )
                })
            }

            <Panel justify="right">
                <Button>SUBMIT</Button>
            </Panel>
            
        </div>
    )
}

export default Exam