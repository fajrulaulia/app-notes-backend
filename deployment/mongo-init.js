db.createUser(
    {
        user: "fajrul",
        pwd: "aulia",
        roles: [
            {
                role: "readWrite",
                db: "fajrulauliadb"
            }
        ]
    }
);