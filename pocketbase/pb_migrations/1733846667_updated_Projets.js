/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("755rkjlrvauhw4v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ov0jdggx",
    "name": "text1",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ebfpf1ji",
    "name": "text2",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bflykldq",
    "name": "text3",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("755rkjlrvauhw4v")

  // remove
  collection.schema.removeField("ov0jdggx")

  // remove
  collection.schema.removeField("ebfpf1ji")

  // remove
  collection.schema.removeField("bflykldq")

  return dao.saveCollection(collection)
})
