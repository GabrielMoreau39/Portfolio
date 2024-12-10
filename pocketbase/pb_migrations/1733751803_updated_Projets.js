/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("755rkjlrvauhw4v")

  // remove
  collection.schema.removeField("3u7fe87h")

  // remove
  collection.schema.removeField("bdhpyhg6")

  // remove
  collection.schema.removeField("erqokxw1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5duwu0go",
    "name": "competences",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "Maquettage",
        "Site Web",
        "Développement"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("755rkjlrvauhw4v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3u7fe87h",
    "name": "competence1",
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
    "id": "bdhpyhg6",
    "name": "competence2",
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
    "id": "erqokxw1",
    "name": "competence3",
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

  // remove
  collection.schema.removeField("5duwu0go")

  return dao.saveCollection(collection)
})
