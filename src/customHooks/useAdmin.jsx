import Swal from "sweetalert2";

var toastMixin = Swal.mixin({
  toast: true,
  icon: "success",
  title: "General Title",
  animation: false,
  position: "top-right",
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const succesBanned = function () {
  toastMixin.fire({
    animation: true,
    title: "User has been banned",
  });
};
export const succesUnBanned = function () {
  toastMixin.fire({
    animation: true,
    title: "User has been unbanned",
  });
};
