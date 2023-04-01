import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'NihonGO_Content_Studio',
  title: 'NihonGO Content Studio',

  projectId: 'bkahyhz9',
  dataset: 'production',

  //@ts-ignore
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
