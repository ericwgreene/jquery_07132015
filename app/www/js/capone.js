window.CapOne = (function() {

	var capOne = {};

	capOne.extend = function(superModel, options) {

		function Model(options) {

			if (options != null) {
				if (options.defaults) {
					for (var prop in options.defaults) {
						this.attributes[prop] = options.defaults[prop];
					}
				}
				delete options.defaults;
			}

			Model.prototype._super.call(this, options);
		}

		Model.prototype = Object.create(superModel.prototype);
		Model.prototype.constructor = Model;
		Model.prototype._super = superModel;

		for (var prop in options) {
			Model.prototype[prop] = options[prop];
		}

		Model.extend = function(options) {
			return capOne.extend(Model, options);
		}

		return Model;
	}

	capOne.Model = function(attrs) {
			this.attributes = attrs || {};
	}

	capOne.Model.prototype.get = function(propName) {
		return this.attributes[propName];
	};

	capOne.Model.prototype.set = function(propName, propValue) {

		if (arguments.length === 1) {
			var attrs = propName;
			for (var prop in attrs) {
				this.attributes[prop] = attrs[prop];
			}
		} else {
			this.attributes[propName] = propValue;
		}

	};

	capOne.Model.extend = function(options) {
		return capOne.extend(capOne.Model, options);
	};

	capOne.Collection = function(options) {
		this.models = [];
	}

	capOne.Collection.prototype.add = function(model) {
		this.models.push(model);
		return this;
	}

	capOne.Collection.prototype.forEach = function(callbackFn) {
		this.models.forEach(callbackFn);
		return this;
	}

	capOne.Collection.extend = function(options) {
		return capOne.extend(capOne.Collection, options);
	}

	return capOne;

})();
