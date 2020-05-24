const bcrypt = require('bcrypt')
const password = {
    create: (myPlaintextPassword) => {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(myPlaintextPassword, salt);
        return hash
    },
    check: (myPlaintextPassword, hash) => {
        hash = bcrypt.compareSync(myPlaintextPassword, hash);
        return hash
    }
}

module.exports = password