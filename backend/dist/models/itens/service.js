"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class ItemService {
    createItem(item_params, callback) {
        const _session = new schema_1.default(item_params);
        _session.save(callback);
    }
    filterItem(query, callback) {
        schema_1.default.findOne(query, callback);
    }
    listItens(callback) {
        schema_1.default.find(callback);
    }
    updateItem(item_params, callback) {
        const query = { codigo: item_params.codigo };
        schema_1.default.findOneAndUpdate(query, item_params, callback);
    }
    deleteItem(_id, callback) {
        const query = { codigo: _id };
        schema_1.default.deleteOne(query, callback);
    }
}
exports.default = ItemService;
