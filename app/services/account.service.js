const { ObjectId } = require("mongodb");
    class Accountservice{
        constructor(client) {
            this.accounts = client.db().collection("account");
        }

        extractConactData(payload) {
            const account = {
                username: payload.username,
                password: payload.password
            };
            Object.keys(account).forEach(
                (key) => account[key] === undefined && delete account[key]
            );
            return account;
        }

        async register(payload) {
            const account = this.extractConactData(payload);
            const result = await this.accounts.insertOne(account);
            return result;
        }

        async login(payload){
            const account = this.extractConactData(payload);
            const result = await this.accounts.findOne(account);
            return result;
            
        }
    }
module.exports = Accountservice;