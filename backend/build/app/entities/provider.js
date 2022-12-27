"use strict";Object.defineProperty(exports, "__esModule", {value: true});





























 class Provider {
  constructor( props) {;this.props = props;}

   get name() {
    return this.props.name;
  }

   get createdAt() {
    return this.props.createdAt;
  }

   get updatedAt() {
    return this.props.updatedAt;
  }
} exports.Provider = Provider;
