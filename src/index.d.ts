/**
 *
 * @param {String} email Email address
 * @param {Object} config Configuration object
 * @param {Array} config.slds Array of SLDs
 * @param {Array} config.tlds Array of SLDs
 * @param {Number} config.minScore Min score for FuzzySet to be included in results
 */
export default function fatFingered(email?: string, { slds, tlds, minScore }?: {
    slds: any[];
    tlds: any[];
    minScore: number;
}): any[];
export const COMMON_SLDS: string[];
export const COMMON_TLDS: string[];
