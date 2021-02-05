import fatFingered from 'fat-fingered'

fatFingered('tiaan@gnail.com') // [ 'gmail' ]
fatFingered('t@hotmail.con') // [ '.com' ]
fatFingered('t@lalala.nanana') // []