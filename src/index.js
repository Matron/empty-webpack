import './style.scss'

import { camelCase } from 'lodash'
console.log(camelCase('index.js called'))
// console.log('test reload');

// console.log('NODE_ENV: ', process.env.NODE_ENV)

/* process.on('unhandledRejection', (reason, promise) => {
  throw new Error('Unhandled rejection caught: ', promise, 'rason: ', reason)
}) */
