db.auth('root', 'oort')

dba = db.getSiblingDB('fajruldb')

dba.createUser({
  user: 'user1',
  pwd: 'user1',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});

dba.app_config.insert({
    name: "DB Learning",
    version: "0.1",
    author: "fajrul aulia"
});

db.Notes.insert( {
  title:"Sejarah Tuhan",
  content:"Karen Amstrong",
  thumbnail:"https://developer.android.com/studio/videos/home/layout-editor-poster.png"
 })
