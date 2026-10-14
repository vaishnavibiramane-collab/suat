// Tiny event bus so any component (or the legacy form code) can raise a toast
// without prop drilling. <Toaster /> listens for these.

export function notify(message, type = "info") {
  window.dispatchEvent(
    new CustomEvent("suat:toast", { detail: { message, type, id: Date.now() + Math.random() } })
  );
}
