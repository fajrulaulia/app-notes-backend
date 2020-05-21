db.auth('fajrul', 'aulia')

db = db.getSiblingDB('fajruldb')

db.createUser({
  user: 'user1',
  pwd: 'user1',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});

db.app_config.insert({
    name: "DB Learning",
    version: 0.1,
    author: "fajrul aulia"
});