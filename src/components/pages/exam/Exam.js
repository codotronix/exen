import "./Exam.css"
import { useState, useEffect } from "react"
import axios from "axios"
import json5 from "json5"
import EXAM_TYPE_COMP_MAP from "./exam-types-components-mapper"
import { Accordion } from "../../common"
import { useEnhancedExamdata } from "./custom-hooks/useEnhancedExamdata"

const Exam = props => {
    const [enhancedExamData, setRawExamData] = useEnhancedExamdata()

    useEffect(() => {
        axios
        .get('/examdata/dp100_1.json5')
        // .get('/examdata/test.json5')
        .then(r => {
            // console.log(r.data)
            const examDataJSON = json5.parse(r.data)
            console.log(examDataJSON)
            setRawExamData(examDataJSON)
        })

    }, 
    [])

    return (
        <div>
            <h1>Welcome to {enhancedExamData.name}</h1>
            {
                enhancedExamData.questions && enhancedExamData.questions.map( (q, i) => {
                    const C = EXAM_TYPE_COMP_MAP[q.t]
                    return (
                        <Accordion title={`Q. No. ${i+1}`} key={i} classes="exam_acc">
                            <C qData={q} />
                        </Accordion>
                    )
                })
            }
        </div>
    )
}

export default Exam