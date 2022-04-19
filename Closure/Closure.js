
function createLogger(namespace) {
    function logger(message) {
        console.log( `[${namespace}] ${message}`)
    }

    return logger
}
// =================== App ==================

// Register.js

const infoLogger = createLogger( 'Info')

infologger('Bắt đầu gửi mail')
infologger('Gửi mail lỗi lần 1, thử gửi lại...')
infologger('Gửi mail thành công cho user xxx')

// ForgotPassword.js

const errorLogger = createLogger('Error')

errorLogger('Email không tồn tại trong DB')
errorLogger('Gửi mail lỗi lần 1, thử gửi lại...')
errorLogger('Gửi mail thành công cho user xxx')
