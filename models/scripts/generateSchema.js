// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateSchema } = require('fast-graphql')
const fs = require('fs')

// all paths are relative to root unless otherwise using __dir path
const folderPath = './src/context/generated'
const inputPath = './models/typeDefs/**/**.gql'
const schemaPath = './src/context/generated/schema.graphql'
const typeDefsPath = './src/context/generated/types.ts'

const createFolderIfNotExists = folderPath => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath)
    console.log(`Folder created: ${folderPath}`)
  } else {
    console.log(`Folder already exists: ${folderPath}`)
  }
}

createFolderIfNotExists(folderPath)

generateSchema({ inputPath, schemaPath, typeDefsPath })
