/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Projets = "Projets",
	Contacts = "contacts",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ProjetsRecord = {
	Lien1?: string
	Lien2?: string
	Lien3?: string
	NomLien1?: string
	NomLien2?: string
	NomLien3?: string
	competence1?: string
	competence2?: string
	competence3?: string
	description?: string
	image1?: string
	image2?: string
	image3?: string
	logiciel1?: string
	logiciel2?: string
	logiciel3?: string
	logiciel4?: string
	logiciel5?: string
	nom?: string
	text1?: string
	text2?: string
	text3?: string
}

export type ContactsRecord = {
	email?: string
	message?: string
	name?: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ProjetsResponse<Texpand = unknown> = Required<ProjetsRecord> & BaseSystemFields<Texpand>
export type ContactsResponse<Texpand = unknown> = Required<ContactsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Projets: ProjetsRecord
	contacts: ContactsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Projets: ProjetsResponse
	contacts: ContactsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'Projets'): RecordService<ProjetsResponse>
	collection(idOrName: 'contacts'): RecordService<ContactsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
