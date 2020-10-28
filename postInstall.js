/**
 * Script to run after npm install
 *
 * Copy hooks to `.git/hooks`
*/
'use strict'

const path = require('path')
const gentlyCopy = require('gently-copy')

const HOME_FOLDER = process.env.INIT_CWD || './'

const files = ['hooks/*']

const userPath = path.join(HOME_FOLDER, '.git', 'hooks')

gentlyCopy(files, userPath)