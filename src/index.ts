import { Contract } from './contarct';
import { GethClient } from './geth-client'

class Api {
    public contract: Contract;
    public gethClient: GethClient;

    constructor() {
        this.contract = new Contract();
        this.gethClient = new GethClient();
    }
} 

export {
    Contract,
    GethClient,
    Api
}