

/**
 * Split email address into username, domain, SLD adn TLD
 * @param {String} email Email to split
 * 
 * @returns {Object}
 */
export const splitEmail = email => {
    // Something like https://github.com/lupomontero/psl is probably much better,
    // but too heavy for our use case
    email = email.trim().toLowerCase()
    let [username = '', domain = ''] = email.split('@')

    const index = domain.indexOf('.')
    const sld = domain.slice(0, index)
    const tld = domain.slice(index)    

    return {
        username,
        domain,
        sld,
        tld
    }
}

/**
 * Check if string is valid email (https://ui.dev/validate-email-address-javascript/)
 * @param {String} email String to check if valid email
 */
export const isValidEmail = (email)  =>{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
