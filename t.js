import * as api from '.';

const e = (s, char, m = 'encode') => console.log(`${m}: "${s}" -> "${api[m](s, char)}"${char ? `\t\tchar="${char}"` : ''}`);
const d = (s) => e(s, undefined, 'decode');

e('a');
e('a.', '.');
e('a.', '.');

d('a.');
d('a.');
