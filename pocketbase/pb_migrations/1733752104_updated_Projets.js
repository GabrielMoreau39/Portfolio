/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("755rkjlrvauhw4v")

  // remove
  collection.schema.removeField("5duwu0go")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kwgjfkjm",
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
    "id": "8e8w1e83",
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
    "id": "pwmljld9",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("755rkjlrvauhw4v")

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

  // remove
  collection.schema.removeField("kwgjfkjm")

  // remove
  collection.schema.removeField("8e8w1e83")

  // remove
  collection.schema.removeField("pwmljld9")

  return dao.saveCollection(collection)
})
