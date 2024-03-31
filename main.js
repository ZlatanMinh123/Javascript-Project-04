// Toast function
function toast({
    title = "",
    message = "",
    type = "info",
    duration = 3000,
} = {}) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");
        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-circle",
            error: "fas fa-times-circle",
        };
        // Tạo biến icon dùng để lấy ra giá trị của icons bên trên với type tương ứng
        const icon = icons[type];
        toast.classList.add("toast", `toast--${type}`);
        const delay = (duration / 1000).toFixed(2);
        toast.style.animation = `slideInLeft ease 0.6s, fadeOut linear 1s ${delay}s forwards`;
        const timeRemoveToast = duration + 1000;
        toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">
                        ${message}
                    </p>
                </div>
                <div class="toast__close">
                    <i class="fas fa-times"></i>
                </div>
        `;
        main.appendChild(toast);

        // Auto Remove Toast
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast);
        }, timeRemoveToast);

        // Remove Toast when clicked
        toast.onclick = (e) => {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };
        console.log(main);
    }
}

function showSuccessToast() {
    toast({
        title: "Thành công!",
        message: "Bạn đã đăng nhập thành công.",
        type: "success",
        duration: 3000,
    });
}

function showInfoToast() {
    toast({
        title: "Thông tin!",
        message: "Đây là nội dung bên trong.",
        type: "info",
        duration: 3000,
    });
}

function showWarningToast() {
    toast({
        title: "Cảnh báo!",
        message:
            "Tài khoản của bạn hiện đang có bảo mật kém, vui lòng nâng cấp mật khẩu.",
        type: "warning",
        duration: 3000,
    });
}

function showErrorToast() {
    toast({
        title: "Thất bại!",
        message:
            "Đăng nhập thất bại, vui lòng kiểm tra lại tài khoản hoặc mật khẩu.",
        type: "error",
        duration: 3000,
    });
}
