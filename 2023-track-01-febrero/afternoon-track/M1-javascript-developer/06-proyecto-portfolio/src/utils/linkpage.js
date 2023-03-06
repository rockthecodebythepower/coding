export const linkPage = (id, page) => {
  document.querySelector(id).addEventListener("click", () => {
    page();
  });
};
