/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f2ai85zam4glgq7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tn3gmuop",
    "name": "description",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f2ai85zam4glgq7")

  // remove
  collection.schema.removeField("tn3gmuop")

  return dao.saveCollection(collection)
})
