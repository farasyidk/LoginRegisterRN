import validation from 'validate.js'

const validation = {
    email: {
        presence: {
            message: 'Email masih kosong'
        },
        email: {
            message: 'mohon masukkan email yang sesuai'
        }
    },

    password: {
        presence: {
            message: 'Password masih kosong'
        },
        length: {
            minimum: 5,
            message: 'Password min 5'
        }
    },

    text: {
        presence: {
            message: 'Password masih kosong'
        }
    }
}