Response = {
    success: (msg, data) => {

        return {
            success: true,
            message: msg,
            total: Array.isArray(data) ? data.length : undefined,
            data: (data || Array.isArray(data)) ? data : undefined,
        }
    },

    error: (msg) => {
        return {
            success: false,
            message: msg
        }
    }
}

module.exports = Response