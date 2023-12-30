"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const contracts_1 = __importDefault(require("./contracts"));
const reports_1 = __importDefault(require("./reports"));
let ReportsReturnPaymentModel = class ReportsReturnPaymentModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ReportsReturnPaymentModel.prototype, "returnPaymentsbank", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ReportsReturnPaymentModel.prototype, "returnPayments", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], ReportsReturnPaymentModel.prototype, "dateReturnPayment", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ReportsReturnPaymentModel.prototype, "returnPaymentDescription", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => reports_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ReportsReturnPaymentModel.prototype, "reportId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => contracts_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ReportsReturnPaymentModel.prototype, "contractId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => reports_1.default),
    __metadata("design:type", reports_1.default)
], ReportsReturnPaymentModel.prototype, "reports", void 0);
ReportsReturnPaymentModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
    })
], ReportsReturnPaymentModel);
exports.default = ReportsReturnPaymentModel;