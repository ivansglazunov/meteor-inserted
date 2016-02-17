// insertedSchema(defaultRef?: Ref) => SimpleSchema
insertedSchema = function(defaultRef) {
	return new SimpleSchema({
		user: {
			type: Refs.Schema,
			optional: true,
			autoValue: function() {
				if (this.isInsert) {
					if (this.userId) {
						return { id: this.userId, collection: Meteor.users._name };
					} else if (defaultRef) {
						return defaultRef;
					} else if (insertedSchema.defaultRef) {
						return insertedSchema.defaultRef;
					} else {
						return { id: 'guest', collection: Meteor.users._name };
					}
				}
			}
		},
		date: {
			type: Date,
			optional: true,
			autoValue: function() {
				if (this.isInsert) return new Date();
			}
		}
	});
};

// You can override this variable.
insertedSchema.defaultRef = undefined;