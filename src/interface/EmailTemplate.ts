// {
//   id: 'example-template',
//   title: 'Template di esempio',
//   description: 'Questo è un template di esempio',
//   fields: [
//     {
//       id: 'first_name',
//       label: 'Nome',
//       type: 'text',
//       placeholder: 'Inserisci il tuo nome',
//       required: true
//     },
//     {
//       id: 'last_name',
//       label: 'Cognome',
//       type: 'text',
//       placeholder: 'Inserisci il tuo cognome',
//       required: true
//     },
//     {
//       id: 'email',
//       label: 'Email',
//       type: 'email',
//       placeholder: 'Inserisci la tua email',
//       required: true
//     },
//     {
//       id: 'submit',
//       label: 'Invia',
//       type: 'submit',
//       required: false
//     }
//   ]
// }
import type { field } from './fields'

export interface IEmailTemplate {
  id: string
  title: string
  description: string
  fields: field[]
}
