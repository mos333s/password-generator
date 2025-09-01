export const CONFIG = {
    CHARACTER_SETS : {
        LOWERCASE: 'abcdefghijklmnopqrstuvwxyz',
        UPPERCASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        NUMS: '0123456789',
        SYMBOLS: '!@#$%^&*_-+=/?|()[]{}<>',
    },

    DEFAULT_SETTINGS : {
        length: 6,
        useLowerCase: true,
        useUpperCase: true,
        useNums: true,
        useSymbols: true
    },

    LIMITS: {
        MIN_LENGTH: 6,
        MAX_LENGTH: 32
    }
}