import { type SchemaTypeDefinition } from 'sanity'
import navigationMenu from './schemaTypes/navigationMenu'
import footerMenu from './schemaTypes/footerMenu'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [navigationMenu, footerMenu],
}
