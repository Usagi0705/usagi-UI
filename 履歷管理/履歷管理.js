const checkbox = document.getElementById("flexSwitchCheckDefault");
const label = document.getElementById("switchLabel");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    label.textContent = "已啟用";
    this.onclick = Open();
  } else {
    label.textContent = "已停用";
    this.onclick = Close();
  }
});

function Open() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "履歷已開啟",
  });
}

function Close() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "warning",
    title: "履歷已關閉",
  });
}
