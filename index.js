
const APPLE = '';
const APPLE_DECODE_RE = /./g;

export function encode(str, char = '') {
  char += APPLE;

  const re = `[${char}]`;
  return str.replace(new RegExp(re, 'g'), m => `${APPLE}${m}`);
}

export function decode(str) {
  return str.replace(APPLE_DECODE_RE, m => m.charAt(1));
}
