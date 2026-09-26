// Submitting opens a pre-filled WhatsApp message; this demo does not store form data.
const form = document.querySelector('#inspection-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  const message = `Hello Dadedos Power, I'd like to book an inspection.\n\nName: ${fields.get('name')}\nPhone: ${fields.get('phone')}\nService: ${fields.get('service')}\nMessage: ${fields.get('message')}`;
  window.open(`https://wa.me/2349019315210?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
