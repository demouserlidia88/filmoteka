!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}();var refs={modal:document.querySelector("[data-modal]")};document.body.addEventListener("click",(function(e){e.target.matches("[data-modal-open]")?toggleModal("is-open"):e.target.matches("[data-modal-close]")&&toggleModal("is-hidden")}));
//# sourceMappingURL=index.112f307b.js.map