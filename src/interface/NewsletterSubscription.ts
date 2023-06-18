// {
//   "id": "newsletter-subscription",
//   "title": "Sottoscrizione Newsletter",
//   "description": "Iscriviti alla nostra newsletter per ricevere aggiornamenti e promozioni esclusive!",
//   "fields": [
//     {
//       "id": "name",
//       "label": "Nome",
//       "type": "text",
//       "placeholder": "Inserisci il tuo nome",
//       "required": true
//     },
//     {
//       "id": "email",
//       "label": "Indirizzo email",
//       "type": "email",
//       "placeholder": "Inserisci la tua email",
//       "required": true
//     },
//     {
//       "id": "accept_terms",
//       "label": "Accetto i termini e le condizioni",
//       "type": "checkbox",
//       "required": true
//     },
//     {
//       "id": "submit",
//       "label": "Iscriviti",
//       "type": "submit",
//       "required": false
//     }
//   ]
// }

import type { field } from './fields'

export interface INewsletterSubscription {
  id: string
  title: string
  description: string
  fields: field[]
}
