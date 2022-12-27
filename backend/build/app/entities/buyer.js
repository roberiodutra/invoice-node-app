"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _errorcatalog = require('@helpers/error-catalog');




























 class Buyer {
  constructor( props) {;this.props = props;
    const { createdAt, updatedAt } = props;

    if (updatedAt < createdAt) {
      throw new Error(_errorcatalog.ErrorTypes.InvalidUpdatedDate);
    }
  }

   get name() {
    return this.props.name;
  }

   get email() {
    return this.props.email;
  }

   get createdAt() {
    return this.props.createdAt;
  }

   get updatedAt() {
    return this.props.updatedAt;
  }
} exports.Buyer = Buyer;
