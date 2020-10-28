// post-install.js

/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
*/
'use strict'

const path = require('path')
const gentlyCopy = require('gently-copy')

const HOME_FOLDER = process.env.INIT_CWD || './'

const files = ['hooks/*']

const userPath = path.join(HOME_FOLDER, '.git', 'hooks')

// Moving files to user's local directory
gentlyCopy(files, userPath)