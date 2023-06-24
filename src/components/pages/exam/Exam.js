import "./Exam.css"
import { useEffect } from "react"
import axios from "axios"
import json5 from "json5"
import EXAM_TYPE_COMP_MAP from "./exam-types-components-mapper"
import { Accordion, Button, Panel } from "../../common"
// import { useEnhancedExamdata } from "./custom-hooks/useEnhancedExamdata"
import { useExamData } from "./custom-hooks/useExamData"

const Exam = props => {
    // const [enhancedExamData, setRawExamData] = useEnhancedExamdata()
    const examDataURL = 'examdata/dp100_1.json5'
    const examData = useExamData(examDataURL)

    // useEffect(() => {
    //     axios
    //     .get('examdata/dp100_1.json5')
    //     // .get('/examdata/test.json5')
    //     .then(r => {
    //         // console.log(r.data)
    //         const examDataJSON = json5.parse(r.data)
    //         console.log(examDataJSON)
    //         setRawExamData(examDataJSON)
    //     })

    // }, 
    // [])

    return (
        <div>
            <h1>Welcome to {examData.name}</h1>
            {
                examData.questions && examData.questions.map( (q, i) => {
                    const C = EXAM_TYPE_COMP_MAP[q.t]
                    return (
                        <Accordion title={`Q. No. ${i+1}`} key={i} classes="exam_acc">
                            <C qData={q} />
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