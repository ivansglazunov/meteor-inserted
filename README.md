# Inserted

```
meteor add ivansglazunov:inserted
```

Driving storing the date and the user who created the document.
Required: [ivansglazunov:refs](https://github.com/ivansglazunov/meteor-refs)

## Usage

```js
// On server
var Collection = new Mongo.Collection('collection');
Collection.attachSchema({ _inserted: { type: insertedSchema() } });
// On client user with id "friend"
var id = Collection.insert({});
var document = Collection.findOne(id);
console.log(document);
// { _inserted: { user: { id: "friend", collection: "users" }, date: Date } }
```

## Default

* `insertedSchema.defaultRef: Ref` specify global default user
* `insertedSchema(defaultRef: Ref)` specify default user for this schema

## Versions

### 0.0.3
* server and client

### 0.0.2
* `ivansglazunov:refs@0.1.0`