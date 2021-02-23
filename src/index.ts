const sev = () => {
  const el: HTMLHeadingElement | null = document.querySelector('h1');
  if (el) el.textContent = 'Helloooo';
};

sev();
