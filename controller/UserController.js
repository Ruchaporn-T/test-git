exports.getUsers = async (req, res) => {
    try {
        const data = { users: [{ id: 1, name: "Cherry" }, { id: 2, name: "Tom" }] };
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        res.status(200).json({ user: { id: 1, name: "Cherry" } });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { name } = req.body;
        res.status(200).json({ user: { id: 1, name: "Cherry" } });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        res.status(200).json({ user: { id: 1, name: "Cherry" } });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        res.status(200).json({ user: { id: 1, name: "Cherry" } });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};