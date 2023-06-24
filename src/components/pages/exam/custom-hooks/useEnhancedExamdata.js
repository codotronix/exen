import { useState, useEffect } from "react";

/**
 * In the source json5, 
 * the options (os) are like an array of Strings ["1# Option 1", "2# Option 2", ... ] etc
 * now, this hook separates the embedded ID from options txt,
 * and makes the "os" (options) now becomes like 
 * [ { id: 1, txt: "Option 1" }, { id: 2, txt: "Option 2" } ... ]
 * @param {*} qData[] 
 * @returns 
 */
export const useEnhancedExamdata = () => {
    const [rawExamData, setRawExamData] = useState([])
    const [enhancedExamData, setEnhancedExamData] = useState([])

    useEffect(() => {
        console.log('rawExamData', rawExamData)
        try {
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
    
            setEnhancedExamData(enhancedData)
        }
        catch(ex) {
            console.log(ex)
        }
    }, 
    [rawExamData])

    return [enhancedExamData, setRawExamData]
}