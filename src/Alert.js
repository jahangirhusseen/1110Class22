class Alert{
    static danger(msg){
        return `<p class="alert alert-warning msg_content fade show"> ${msg} <button class="btn-close btn-sm" data-bs-dismiss="alert"></button></p>`
    }
    static success(msg){
        return `<p class="alert alert-success msg_content fade show"> ${msg} <button class="btn-close btn-sm" data-bs-dismiss="alert"></button></p>`
    }
}

export default Alert;