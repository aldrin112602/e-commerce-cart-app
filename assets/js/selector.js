// For Element selector
export const selector = (name) => {
  const elements = document.querySelectorAll(name);
  return elements.length === 1 ? elements[0] : null;
}
