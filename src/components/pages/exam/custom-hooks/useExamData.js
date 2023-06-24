import { useState, useEffect } from "react";
import axios from 'axios'
import json5 from "json5"

/**
 * In the source json5, 
 * the options (os) are like an array of Strings ["1# Option 1", "2# Option 2", ... ] etc
 * now, this hook separates the embedded ID from options txt,
 * and makes the "os" (options) now becomes like 
 * [ { id: 1, txt: "Option 1" }, { id: 2, txt: "Option 2" } ... ]
 * @param {String} examDataURL
 * @returns 
 */
export const useExamData = examDataURL => {
    const [examData, setExamData] = useState({})

    useEffect(() => {
        axios
        .get(examDataURL)
        .then(r => {
            // console.log(r.data)
            const rawExamData = json5.parse(r.data)
            console.log(rawExamData)

            let enhancedData = {
                ...rawExamData,
                questions: rawExamData.questions?.map(qData => ({
                    ...qData,
                    os: qData.os?.map(op => ({
                        id: parseInt(op.split('#')[0]),
                        txt: op.substring(op.indexOf('#') + 1).trim()
                    }))
                }))
            }

            setExamData(enhancedData)
        })
        .catch(ex => {
            console.log(ex)
        })
    }, 
    [examDataURL])

    return examData
}