const StatusModule = {

    name: "status",

    description: "Display system information.",

    execute(input, context) {

        return {

            system: "NERODIS",

            version: "0.5",

            integrity: "Stable",

            modules: context.registry.list()

        };

    }

};

export default StatusModule;