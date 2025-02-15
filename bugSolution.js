```javascript
//Correct usage of $inc operator. Ensure the field is a number before incrementing
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1}});
//Alternative for string fields
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$set:{field2:field2 + "someString"}});
```