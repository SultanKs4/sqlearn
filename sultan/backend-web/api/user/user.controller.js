const userService = require("./user.service");

module.exports = {
    index: async (req, res) => {
        const resObj = await userService.getAll();

        if (!resObj.status) return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    show: async (req, res) => {
        const resObj = await userService.getOne(req.params.id);

        if (!resObj.status) return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    store: async (req, res) => {
        const { username, password, no_induk, name } = req.body;
        const resObj = await userService.insert(
            username,
            password,
            no_induk,
            name
        );

        if (!resObj.status) return res.status(500).json(resObj);

        return res.status(201).json(resObj);
    },

    authenticate: async (req, res) => {
        const { username, password } = req.body;
        const resObj = await userService.authenticate(username, password);

        if (!resObj.status) return res.status(500).json(resObj);

        return res.status(200).json(resObj);
    },

    update: async (req, res) => {
        const resObj = await userService.update(req.params.id, req.body);

        if (!resObj.status) return res.status(500).json(resObj);

        return res.status(201).json(resObj);
    },

    destroy: async (req, res) => {
        const resObj = await userService.destroy(req.params.id);

        if (!resObj.status) return res.status(500).json(resObj);

        return res.status(204).json(resObj);
    },
};
