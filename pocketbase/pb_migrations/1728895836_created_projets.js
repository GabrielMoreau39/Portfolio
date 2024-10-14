/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "f2ai85zam4glgq7",
    "created": "2024-10-14 08:50:36.896Z",
    "updated": "2024-10-14 08:50:36.896Z",
    "name": "projets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "py5f4otq",
        "name": "nom",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "macmrqyl",
        "name": "date",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("f2ai85zam4glgq7");

  return dao.deleteCollection(collection);
})
