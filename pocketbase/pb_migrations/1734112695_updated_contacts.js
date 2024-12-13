/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xg3xjp68vjlcnga")

  collection.createRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xg3xjp68vjlcnga")

  collection.createRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
