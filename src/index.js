import FuzzySet from 'fuzzyset'

import {isValidEmail, splitEmail} from "./utils"

export const COMMON_SLDS = ['gmail', 'outlook', 'yahoo', 'hotmail', 'live', 'msn', 'icloud']
export const COMMON_TLDS = ['.com', '.net', '.org', '.edu', '.gov', '.co.za', '.info', '.biz']

/**
 * 
 * @param {String} email Email address
 * @param {Object} config Configuration object
 * @param {Array} config.slds Array of SLDs
 * @param {Array} config.tlds Array of SLDs
 * @param {Number} config.minScore Min score for FuzzySet to be included in results
 */
export default function fatFingered(email = '', {slds = COMMON_SLDS, tlds = COMMON_TLDS, minScore = .7} = {}) {
    if (!isValidEmail(email)) return []

    const fuzzSLDs = new FuzzySet(slds)
    const fuzzTLDs = new FuzzySet(tlds)
    const {sld, tld} =  splitEmail(email)
    
    const filterMatches = (acc, [score, value]) => {
        if (score < 1 && score >= minScore) {
            acc.push(value)
        }

        return acc
    }

    const sldResult = (fuzzSLDs.get(sld) || []).reduce(filterMatches, [])
    const tldResult = (fuzzTLDs.get(tld) || []).reduce(filterMatches, [])
  
    return [...sldResult, ...tldResult]
}