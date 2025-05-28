// Setup first model viewer
const modelViewer1 = document.getElementById("modelViewer1");
const loader1 = document.getElementById("loader1");

modelViewer1.addEventListener("load", () => {
  loader1.classList.add("fade-out");
  setTimeout(() => {
    loader1.style.display = "none";
  }, 500);

  if (modelViewer1.availableAnimations.includes("Action")) {
    modelViewer1.animationName = "Action";
    modelViewer1.play();
  }
});

modelViewer1.addEventListener("error", () => {
  const loadingText1 = loader1.querySelector(".loading-text");
  loadingText1.textContent = "Failed to load model";
  loadingText1.style.color = "#ff4444";
});

modelViewer1.addEventListener("progress", (event) => {
  const progress = event.detail.totalProgress;
  const loadingText1 = loader1.querySelector(".loading-text");
  if (progress < 1) {
    loadingText1.textContent = `Loading... ${Math.round(progress * 100)}%`;
  }
});

// Setup second model viewer
const modelViewer2 = document.getElementById("modelViewer2");
const loader2 = document.getElementById("loader2");

modelViewer2.addEventListener("load", () => {
  loader2.classList.add("fade-out");
  setTimeout(() => {
    loader2.style.display = "none";
  }, 500);

  if (modelViewer2.availableAnimations.includes("Action")) {
    modelViewer2.animationName = "Action";
    modelViewer2.play();
  }
});

modelViewer2.addEventListener("error", () => {
  const loadingText2 = loader2.querySelector(".loading-text");
  loadingText2.textContent = "Failed to load model";
  loadingText2.style.color = "#ff4444";
});

modelViewer2.addEventListener("progress", (event) => {
  const progress = event.detail.totalProgress;
  const loadingText2 = loader2.querySelector(".loading-text");
  if (progress < 1) {
    loadingText2.textContent = `Loading... ${Math.round(progress * 100)}%`;
  }
});