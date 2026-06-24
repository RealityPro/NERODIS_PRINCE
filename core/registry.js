class Registry {

    constructor() {

        this.capabilities = new Map();

    }

    register(module) {

        if (!module.name) {

            throw new Error("Module requires a name.");

        }

        this.capabilities.set(module.name, module);

    }

    execute(name, input, context) {

        const capability = this.capabilities.get(name);

        if (!capability) {

            return `Capability "${name}" not found.`;

        }

        return capability.execute(input, context);

    }

    list() {

        return [...this.capabilities.keys()];

    }

}

const registry = new Registry();

export default registry;