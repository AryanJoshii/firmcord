let usersList = [];
export const whoSaidHii = {
    controller: (req, res) => {
        res.status(200).json({ list: usersList });
    }
};
export const sayHii = {
    validator: (req, res, next) => {
        if (req.body.name === undefined || req.body.name === "") {
            return res.status(400).json({ error: "BAD_REQUEST", message: "Name can not be empty!" });
        }
        next();
    },
    controller: (req, res) => {
        try {
            usersList.unshift(req.body.name);
            res.status(200).json({ status: "OK", list: usersList });
        }
        catch (error) {
            res.status(500).json({ error: "SOME_SERVER_ERROR" });
        }
    }
};
