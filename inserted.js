// insertedSchema(defaultRef?: Ref) => SimpleSchema
insertedSchema = function(defaultRef) {
	new SimpleSchema({
		user: {
			type: Refs.Schema,
			optional: true,
			autoValue: function() {
				if (this.isInsert) {
					if (this.userId) {
						return { id: this.userId, collection: Meteor.users._id };
					} else if (defaultRef) {
						return defaultRef;
					} else if (insertedSchema.defaultRef) {
						return insertedSchema.defaultRef;
					}
				}
			}
		},
		date: {
			type: Date,
			autoValue: function() {
				if (this.isInsert) return new Date();
			}
		}
	});
};

// You can override this variable.
insertedSchema.defaultRef = undefined;