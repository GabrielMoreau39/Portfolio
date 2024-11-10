/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("755rkjlrvauhw4v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6ueqc4tv",
    "name": "image2",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0fqamf4s",
    "name": "image3",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("755rkjlrvauhw4v")

  // remove
  collection.schema.removeField("6ueqc4tv")

  // remove
  collection.schema.removeField("0fqamf4s")

  return dao.saveCollection(collection)
})
